import {useState} from 'react';
import {Typography} from '@mui/material';

import ContactSend from './ContactSend';
import PageCard from '../card/PageCard';
import ContactFields from './ContactFields';

export default function ContactBox({includeTitle=true}) {

    const [form, setForm] = useState({"name": "", "email": "", "phone": "", "message": ""});
    const [errors, setErrors] = useState({"name": false, "email": false, "phone": false, "message": false});

    return (
        <>
            <PageCard>
                {includeTitle && (
                    <Typography variant="h3" textAlign="center">
                        Contact Scout Anatricia
                    </Typography>
                )}
                <ContactFields form={form} errors={errors} setForm={setForm} />
                <ContactSend form={form} setForm={setForm} setErrors={setErrors} />
            </PageCard>
        </>
    );
}
