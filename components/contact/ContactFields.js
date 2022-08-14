import {TextField} from '@mui/material';
import {styled} from '@mui/material/styles';

const BodyContainer = styled('div')`
  padding: 2em 1em;
`;

export default function ContactFields({errors, form, setForm, messageLabel}) {

    const handleChange = (e) => {
        setForm(prevForm => ({...prevForm, [e.target.name]: e.target.value}));
    }

    return (
        <>
            <BodyContainer>
                <TextField
                    required
                    fullWidth
                    name="name"
                    label="Name"
                    margin="normal"
                    onChange={handleChange}
                    error={errors.name}
                    value={form.name}
                    {...(errors.name ? {helperText: "Name can't be empty"} : null)}
                />
                <TextField
                    required
                    fullWidth
                    name="email"
                    label="Email"
                    type="email"
                    margin="normal"
                    onChange={handleChange}
                    value={form.email}
                    error={errors.email}
                    {...(errors.email ? {helperText: "Invalid email"} : null)}
                />
                <TextField
                    required
                    fullWidth
                    name="phone"
                    label="Phone Number"
                    type="tel"
                    margin="normal"
                    onChange={handleChange}
                    value={form.phone}
                    error={errors.phone}
                    {...(errors.phone ? {helperText: "Invalid Phone Number"} : null)}
                />
                <TextField
                    required
                    fullWidth
                    name="message"
                    label={messageLabel}
                    multiline
                    rows={4}
                    margin="normal"
                    onChange={handleChange}
                    value={form.message}
                    error={errors.message}
                    {...(errors.message ? {helperText: "Can't have an empty message"} : null)}
                />
            </BodyContainer>
        </>
    );
}