import React from 'react'
import Button from './Button'
import { H1, Image, P, Tag } from './styles/Elements.styles'
import { ButtonContainer, CardContainer,ContentContainer } from './styles/Container.styles'

const Card = () => {
  return (
    <CardContainer>
        <ContentContainer>
            <Tag color=" #4361ee" >EXCLUSIVE</Tag>
            <H1>React Styled Components</H1>
            <P>
                Exclusive React JS Tutorial on Styled Components Where you will learn why we need this and how to use it 
            </P>
            <ButtonContainer>
                <Button link="https://lwsbd.link/rsc" text="Watch now" />
                <Button link="https://lwsbd.link/react" text="Github repo" />
            </ButtonContainer>
        </ContentContainer>
        <Image src={nerdImage} alt="nerd" width="300px"/>
    </CardContainer>
  )
}

export default Card