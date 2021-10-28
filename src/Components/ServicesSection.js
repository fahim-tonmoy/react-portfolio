import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../style/Layout';
import ServiceCard from './ServiceCard';
import Title from './Title';
import design from '../img/design.svg';
import intellience from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function ServicesSection() {
    return (
            <InnerLayout>
                <ServicesSectionStyled>
                    <Title title={'Services'} span={'services'} />
                    <div className="services">
                        <ServiceCard 
                            image={design} 
                            title={'Web Design'} 
                            paragraph={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, porro.'}/>
                        <div className="mid-card">
                            <ServiceCard 
                                image={intellience} 
                                title={'Artificial Intelligence'} 
                                paragraph={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, porro.'}/>
                        </div>
                        <ServiceCard 
                            image={gamedev} 
                            title={'Game Development'} 
                            paragraph={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, porro.'}/>
                    </div>
                </ServicesSectionStyled>
            </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
 .services {
     margin-top: 5rem;
     display: flex;
     justify-content: space-between;
     .mid-card {
         margin: 0 1.2rem;
     }
 }
`;

export default ServicesSection


