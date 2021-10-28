import React, { useState } from 'react'
import styled from 'styled-components'
import Title from '../Components/Title';
import { InnerLayout, MainLayout } from '../style/Layout';
import Menu from '../Components/Menu';
import Portfolios from '../data/portfolios';
import Button from '../Components/Button';
import portfolios from '../data/portfolios';


const allButtons = ['All', ...new Set(portfolios.map(item => item.category))]

function PortfolioPage() {
    const [menuItem, setMenuItems] = useState(Portfolios);
    const [button, setbutton] = useState(allButtons);

    const filter = (button) => {

        if(button === 'All'){
            setMenuItems(portfolios);
            return;
        }

        const filteredData = portfolios.filter(item => item.category === button );
        setMenuItems(filteredData);
    }
    return (
        <MainLayout>
            <Title title={'Portfolio'} span={'Portfolio'}/>
            <InnerLayout>
                <Button filter={filter} button={button} />
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}

const PortfolioPageStyled = styled.section`

`;

export default PortfolioPage
