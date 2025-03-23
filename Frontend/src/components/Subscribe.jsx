import { useState } from 'react';
import { useFormInput } from '../hooks/useForm';
import '../App.css'

export default function SubscribeForm() {
    const [status, setStatus] = useState('');

    const [nameInputProps, resetName] = useFormInput('');
    const [emailInputProps, resetEmail] = useFormInput('');
 
    function handleSubscribe() {
        resetName(); resetEmail();
        setStatus('Thanks for subscribing!')
    }
 
    return (
        <div className="SubscribeForm componentBox">
            <label className='label'>Your First name: <input {...nameInputProps} /></label><br/>
            <label className='label'>Your Email: <input {...emailInputProps} /></label><br/>
            <button className="submit" onClick={handleSubscribe}>Subscribe</button><br/>
            <div>{status}</div>
        </div>
    );
}

