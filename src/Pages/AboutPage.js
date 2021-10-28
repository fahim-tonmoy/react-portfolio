import React from 'react'
import styled from 'styled-components';
import ImageSection from '../Components/imageSection';
import ReviewSection from '../Components/ReviewSection';
import ServicesSection from '../Components/ServicesSection';
import Title from '../Components/Title';
import { MainLayout } from '../style/Layout';
 
function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <ServicesSection />
                <ReviewSection />
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section`
    
`;

export default AboutPage;
