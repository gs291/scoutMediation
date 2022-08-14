import {useState} from 'react';
import emailjs from '@emailjs/browser';
import {styled} from '@mui/material/styles';
import {Button, CircularProgress, Typography} from '@mui/material';

import {globalOptions} from '../../lib/utils/emotionStyled';
import {BUTTON_PREFIX, SELECT_CONTENT_BUTTON, ga4SendSelectContent} from '../../lib/utils/ga4';


const FooterContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  padding: 20px;
`;

const ErrorSuccessContainer = styled('div', globalOptions)`
  margin: 20px 0;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px 0;
  color: ${props => props['data-s'] ? 'green' : 'red'};
`;

const GA4_SUBMIT_MODAL_ID = "SUBMIT_MODAL";

export default function ContactSend({form, setForm, setErrors}) {
    const [progress, setProgress] = useState({
        isSuccess: false,
        isLoading: false,
        isError: false,
        errorMessage: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formPhoneErrorMatch = form.phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
        const formPhoneError = !(formPhoneErrorMatch && formPhoneErrorMatch.length > 0);

        setErrors({
            "name": form.name === '',
            "email": form.email === '' || form.email.indexOf('@') === -1,
            "phone": formPhoneError,
            "message": form.message === ''
        });

        if (form.name === ''
            || form.email === ''
            || form.email.indexOf('@') === -1
            || formPhoneError
            || form.message === '') {
            ga4SendSelectContent(SELECT_CONTENT_BUTTON, {
                item_id: `${BUTTON_PREFIX}${GA4_SUBMIT_MODAL_ID}`,
                errors: true
            });

            return;
        }

        ga4SendSelectContent(SELECT_CONTENT_BUTTON, {
            item_id: `${BUTTON_PREFIX}${GA4_SUBMIT_MODAL_ID}`,
            errors: false
        });

        setProgress({isLoading: true, isError: false, errorMessage: "", isSuccess: false});
        emailjs.send('gmail', 'contactme', form, 'user_r87lyqdfNcWvvEm845oeh')
            .then((result) => {
                setForm({"name": "", "email": "", "phone": "", "message": ""});
                setProgress(prevProg => ({...prevProg, isLoading: false, isSuccess: true}));
            }, (error) => {
                setProgress({isLoading: false, isError: true, errorMessage: error.text, isSuccess: false});
            });
    }

    return (
        <>
            <FooterContainer>
                {progress.isError && (
                    <>
                        <ErrorSuccessContainer data-s={progress.isSuccess}>>
                            <Typography variant="h4">
                                ERROR
                            </Typography>
                            <Typography variant="h6">
                                {progress.errorMessage}
                            </Typography>
                        </ErrorSuccessContainer>
                    </>
                )}
                {progress.isSuccess && (
                    <>
                        <ErrorSuccessContainer data-s={progress.isSuccess}>
                            <Typography variant="h4">
                                Message Sent!
                            </Typography>
                        </ErrorSuccessContainer>
                    </>
                )}
                {progress.isLoading ? (
                    <CircularProgress color="primary" />
                ) : (
                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        size="large"
                        onClick={handleSubmit}
                    >
                        Send
                    </Button>
                )}
            </FooterContainer>
        </>
    );
}