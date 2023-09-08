import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
// the messages templates can be changed here: https://dashboard.emailjs.com/admin/templates
import { BrowserView, MobileView } from 'react-device-detect';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uzh1mc8', 'template_w5y2hmq', form.current, '1OTfpN1tbCwCWUVpb')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert('Message sent. Thanks, I will return ASAP!');
        e.target.reset();
    };

    return (
        <section id="contact">
            <h5>Get in touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail />
                        <h4>Email</h4>
                        <h5>rstriquer@gmail.com</h5>
                        <a href="mailto:rstriquer@gmail.com" target="_blank]">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine />
                        <h4>Messenger</h4>
                        <h5>rstriquer</h5>
                        <a href="https://m.me/rstriquer" target="_blank]">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp />
                        <h4>WhatsApp</h4>
                        <h5>+5541984466360</h5>
                        <BrowserView>
                            <a href="https://web.whatsapp.com/send?phone=%2B5541984466360" target="_blank]">Send a message</a>
                        </BrowserView>
                        <MobileView>
                            <a href="https://api.whatsapp.com/send?phone=%2B5541984466360" target="_blank]">Send a message</a>
                        </MobileView>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail    }>
                    <input type="text" name="name" placeholder="Your full name" required />
                    <input type="email" name="email" placeholder="Your email" required />
                    <textarea name="message" rows="7" placeholder="Your message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact