import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from 'yup'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { Container, Title, Column, TitleLogin, SubtitleLogin, ForgotText, CreateText, Row, Wrapper } from './styles';

const schema = object({
    email: string().email('Email inválido.').required('Campo obrigatório.'),
    password: string().min(3, 'Minimo de 3 caracteres.').required('Campo obrigatório.'),
}).required();

const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = data => {
        console.log(data);
    }

    const handleClickSignIn = () => {
        navigate('/feed')
    }
    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <Input placeholder="E-mail"
                            leftIcon={<MdEmail />}
                            name="email"
                            value={control.email}
                            control={control}
                            errorMessage={errors?.email?.message} />
                        <Input placeholder="Senha"
                            type="password"
                            leftIcon={<MdLock />}
                            name="password"
                            value={control.password}
                            control={control}
                            errorMessage={errors?.password?.message} />
                        <Button title="Entrar" variant="secondary" type="submit" onClick={handleClickSignIn} />
                    </form>
                    <Row>
                        <ForgotText>Esqueci minha senha</ForgotText>
                        <CreateText>Criar Conta</CreateText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }