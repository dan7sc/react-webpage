import React from 'react'
import logo from '../../assets/logo-dio.png';

import { Button } from '../Button';

import { Container, Wrapper, SearchInputContainer, Input, Row, Menu, MenuRight } from './styles';

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Dio's Logo" />
                    <SearchInputContainer>
                        <Input placeholder='Search...' />
                    </SearchInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href="/">Home</MenuRight>
                    <Button title="Sign In" />
                    <Button title="Sign Up" />
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }