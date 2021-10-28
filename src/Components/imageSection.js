import React from 'react';
import styled from 'styled-components';
import resume from '../img/resume2.jpg';
import PrimaryButton from './PrimaryButton';


function ImageSection() {
    return (
        <ImageSectionStyle>
            <div className="left-content">
              <img src={resume} alt="" />
            </div>
            <div className="right-content">
                    <h4>I'm <span>Fahim Hasan</span></h4>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fugit minus quisquam, similique quam consectetur deleniti sint quos blanditiis obcaecati eligendi pariatur quidem perferendis reiciendis? Nisi impedit tempore cumque perferendis!
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name </p>
                        <p>Age </p>
                        <p>Nationality </p>
                        <p>Language </p>
                        <p>Location </p>
                        <p>Service </p>
                    </div>
                    <div className="info">
                        <p>  : Fahim Hasan</p>
                        <p>  : 24</p>
                        <p>  : Bangladeshi </p>
                        <p>  : Bangla, English</p>
                        <p>  : Dhaka, Bangladesh </p>
                        <p>  : Freelancer</p>
                    </div>
                </div>
                <PrimaryButton title={'Download Cv'} />
            </div>
            
        </ImageSectionStyle>
    )
}

const ImageSectionStyle = styled.div`
margin-top: 5rem;
    display: flex;
    .left-content {
        width: 100%;
        height: 60vh;
        img {
            width: 90%;
            height: 100%;
            object-fit: cover;
        }
    }

    .right-content {
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span {
                font-size: 2rem;
            }
        }
        .paragraph {
            padding: 1rem 0;
        }
        .about-info {
            display: flex;
            padding-bottom: 1.4rem;
            .info-title {
                padding-right: 4rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p {
                    padding: .3rem 0;
                }
            }
        }
    }
`;

export default ImageSection
