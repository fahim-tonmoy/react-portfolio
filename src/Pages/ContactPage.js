import React from 'react'
import styled from 'styled-components';
import { InnerLayout, MainLayout } from '../style/Layout';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import ContactItem from '../Components/ContactItem';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function ContactPage() {
    const phone = <LocalPhoneIcon />
    const location = <LocationOnIcon />
    const email = <EmailIcon />
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'}/>
                <ContactPageStyle>
                    <InnerLayout className={'contact-section'}>
                        <div className="left-content">
                            <div className="contact-title">
                                <h4>Get In Touch</h4>
                            </div>
                            <form className='form'>
                                <div className="form-field">
                                    <label htmlFor="name"  >Enter Your Name</label>
                                    <input type="text" id='name'/>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="email"  >Enter Your Email</label>
                                    <input type="email" id='email'/>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="subject"  >Enter Your subject</label>
                                    <input type="text" id='subject'/>
                                </div>
                                <div className="form-field">
                                    <label htmlFor="text-area">Enter your Message</label>
                                    <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                                </div>
                                <div className="form-field">
                                    <PrimaryButton title={'Send Email'}/>
                                </div>
                            </form>
                        </div>
                        <div className="right-content">
                            <ContactItem 
                                icon={phone} 
                                title={'Phone'}
                                contact1={'+8801688290597'}
                                contact2={'+8801727465381'}
                            />
                            <ContactItem 
                                icon={email} 
                                title={'Email'}
                                contact1={'fht801@gmail.com'}
                                contact2={'hasan.fahiim@gmail.com'}
                            />
                            <ContactItem 
                                icon={location} 
                                title={'Address'}
                                contact1={'uttara, Dhaka'}
                                // contact2={'hasan.fahiim@gmail.com'}
                            />
                        </div>
                    </InnerLayout>
                </ContactPageStyle>
        </MainLayout>
    )
}

const ContactPageStyle = styled.section`
    .contact-section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        .right-content {
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form {
            width: 100%;
            .form-field {
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label {
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding: 0 .5rem;
                    color: inherit;
                }
                input {
                    border: 1px solid var(--bordar-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding: 0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea {
                    background-color: transparent;
                    border: 1px solid var(--bordar-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }
        }
    }
`;

export default ContactPage
