import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../style/Layout';
import ReviewItem from './ReviewItem';
import Title from './Title';

function ReviewSection() {
    return (
        // <InnerLayout>
            <ReviewSectionStyled>
                <Title title={"Reviews"} span={"Reviews"} />
                <InnerLayout>
                    <div className="reviews">
                        <ReviewItem 
                            text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem esse perspiciatis inventore?"} />
                        <ReviewItem 
                            text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem esse perspiciatis inventore?"} />
                    </div>
                </InnerLayout>
            </ReviewSectionStyled>
        // </InnerLayout>
    )
}

const ReviewSectionStyled = styled.section`
    .reviews {
display: flex;
    }
`;

export default ReviewSection
