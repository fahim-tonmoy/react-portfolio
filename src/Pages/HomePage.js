import React from 'react';
import styled from 'styled-components';
import Particle from '../Components/Particles';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

function HomePage() {
    return (
        <HomePageStyled>
         <div className="particles-con">
             <Particle />
         </div> 
         <div className="typography">
             <h1>Hi I'm <span>Fahim Hasan</span></h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas delectus laudantium reprehenderit veritatis quidem ab dicta praesentium cupiditate harum blanditiis tempore dolorem ullam, sunt placeat odit officia non provident voluptatibus.</p>
             <div className="icons">
                 <a target='_blank' rel="noreferrer" href='https://www.facebook.com/fahim.hasan801/' className="icon i-facebook">
                     <FacebookIcon/>
                 </a>
                 <a target='_blank' rel="noreferrer" href='https://github.com/fahim-tonmoy' className="icon i-github">
                 <GithubIcon/>
                 </a>
                 <a target='_blank' rel="noreferrer" href='https://www.instagram.com/tonmoy_fahim/' className="icon i-instagram">
                 <InstagramIcon/>
                 </a>
             </div>
         </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon {
                border: 2px solid var(--bordar-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover {
                    /* background-color: var(--primary-color);
                     */
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child) {
                    margin-right: 1rem;
                }
                svg {
                    margin: .5rem;
                }
            }
            .i-instagram {
                &:hover {
                    /* background-color: var(--primary-color);
                     */
                    border: 2px solid #8a3ab9;
                    color: #8a3ab9;
                }
            }
            .i-github {
                &:hover {
                    /* background-color: var(--primary-color);
                     */
                    border: 2px solid #5f4687;
                    color: #5f4687;
                }
        }
    }
}
`;

export default HomePage;
