import React from 'react'
import styled from 'styled-components'
import { InnerLayout, MainLayout } from '../style/Layout';
import SmallTitle from './SmallTitle';
import Title from './Title';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />; 
    const school = <SchoolIcon />; 
    return (
            <ResumeStyled>
                <Title title={'Resume'} span={'Resume'}/>
                <InnerLayout>
                    <div className="small-title">
                        <SmallTitle icon={briefcase} title={'Working Experience'} />
                    </div>
                    <div className="resume-content">
                        <ResumeItem 
                            year={'2015 - 2020'} 
                            title={'Computer Science'} 
                            subtitle={'Shanto Mariam UniverSity'} 
                            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ut recusandae architecto dolorum itaque?'}
                        />
                        <ResumeItem 
                            year={'2013 - 2015'} 
                            title={'Higher Secondary Certificate'} 
                            subtitle={'MileStone College'} 
                            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ut recusandae architecto dolorum itaque?'}
                        />
                    </div>
                    <div className="small-title u-small-title-margin">
                        <SmallTitle icon={school} title={'Working Experience'} />
                    </div>
                    <div className="resume-content ">
                        <ResumeItem 
                            year={'2015 - 2020'} 
                            title={'Computer Science'} 
                            subtitle={'Shanto Mariam UniverSity'} 
                            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ut recusandae architecto dolorum itaque?'}
                        />
                        <div className="u-margin-bottom">
                            <ResumeItem 
                                year={'2013 - 2015'} 
                                title={'Higher Secondary Certificate'} 
                                subtitle={'MileStone College'} 
                                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ut recusandae architecto dolorum itaque?'}
                            />
                        </div>
                    </div>
                </InnerLayout>
            </ResumeStyled>
    )
}

const ResumeStyled = styled.div`
    .small-title {
        padding-bottom: 3rem;
    }
    .u-small-title-margin {
        margin-top: 3rem;
    }

    .resume-content{
        border-left: 2px solid var(--bordar-color);
    }
`;

export default Resume
