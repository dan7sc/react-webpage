import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (
        <>
            <Header authenticated={true} />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                    <UserInfo nome="Usuario 1" image="https://avatars.githubusercontent.com/u/39860032?v=" percentual={25} />
                    <UserInfo nome="Usuario 2" image="https://avatars.githubusercontent.com/u/39860032?v=" percentual={65} />
                    <UserInfo nome="Usuario 3" image="https://avatars.githubusercontent.com/u/39860032?v=" percentual={45} />
                    <UserInfo nome="Usuario 4" image="https://avatars.githubusercontent.com/u/39860032?v=" percentual={72} />
                </Column>
            </Container>
        </>
    )
}

export { Feed }; 