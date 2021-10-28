import React from 'react';
import styled from 'styled-components';
import Resume from '../Components/Resume';
import Skills from '../Components/Skills';
import Title from '../Components/Title';
import { InnerLayout, MainLayout } from '../style/Layout';

function ResumePage() {
    return (
        <MainLayout>
            <ResumePageStyled>
                <Skills />
                <Resume/>
                {/* <InnerLayout>
                </InnerLayout> */}
            </ResumePageStyled>
        </MainLayout>
    )
}

const ResumePageStyled = styled.div`

`;

export default ResumePage;
