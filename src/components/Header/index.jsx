import React from 'react'
import logo from '../../assets/logo-dio.png';

import { Button } from '../Button';

import { Container, Wrapper, SearchInputContainer, Input, Row, Menu, MenuRight, UserPicture } from './styles';

const Header = ({ authenticated }) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Dio's Logo" />
                    {authenticated ? (
                        <>
                            <SearchInputContainer>
                                <Input placeholder='Search...' />
                            </SearchInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {authenticated ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/39860032?v=4" />
                    ) : (
                        <>
                            <MenuRight href="/">Home</MenuRight>
                            <Button title="Sign In" />
                            <Button title="Sign Up" />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }