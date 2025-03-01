import './Join.css'
import {useRef} from "react";
import emailjs from '@emailjs/browser'

export const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_m8sr7bq', 'template_cbcd03l', form.current, {
                publicKey: 'e2chR_ScRGI4kbwsR',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return(
        <div className='Join' id='join-us'>
            <div className='left-j'>
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span> LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'> WITH US?  </span>
                </div>
            </div>
            <div className='right-j'>
                <form ref={form} className='email-container' onSubmit={sendEmail}>
                    <input type="email" name='user_email' placeholder='Enter your Email address'/>
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div>
        </div>
    )
}