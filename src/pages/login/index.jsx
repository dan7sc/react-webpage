import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from 'yup'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

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

    const onSubmit = async (formData) => {
        try {
            const { data } = await api.get(`/users?email=${formData.email}&password=${formData.password}`);

            if (data.length === 1 && data[0].id) {
                navigate('/feed');
                return;
            }

            alert('Usuário ou senha inválido');
            return;
        } catch (e) {
            console.log(e);
            alert('Erro no servidor. Tentar novamente.');
        }
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
                        <Button title="Entrar" variant="secondary" type="submit" onClick={handleSubmit(onSubmit)} />
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