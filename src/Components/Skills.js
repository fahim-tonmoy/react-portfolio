import React from 'react'
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../style/Layout';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
                <Title title={'My Skills'} span={'My Skills'} />
                <InnerLayout >
                    <div className="skills">
                        <ProgressBar
                            title={"HTML5"}
                            width={"100%"}
                            text={"100%"}
                        />
                        <ProgressBar
                            title={"CSS3"}
                            width={"80%"}
                            text={"80%"}
                        />
                        <ProgressBar
                            title={"BOOTSTRAP"}
                            width={"90%"}
                            text={"90%"}
                        />
                        <ProgressBar
                            title={"JAVDCRIPT"}
                            width={"70%"}
                            text={"70%"}
                        />
                        <ProgressBar
                            title={"REACT JS"}
                            width={"60%"}
                            text={"60%"}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}
 
const SkillsStyled = styled.section`
    .skills {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
    }
`;

export default Skills
