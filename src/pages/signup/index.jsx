import { MdEmail, MdLock, MdPerson2 } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from 'yup'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { Container, Title, Column, TitleLogin, SubtitleLogin, Row, Wrapper, TermsOfUseWarningText, HaveAccountText, DoLoginText } from './styles';

const schema = object({
    name: string().min(3, 'Minimo de 3 caracteres.').required('Campo obrigatório.'),
    email: string().email('Email inválido.').required('Campo obrigatório.'),
    password: string().min(3, 'Minimo de 3 caracteres.').required('Campo obrigatório.'),
}).required();

const SignUp = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
            const { data } = await api.post('/users', {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (data.id && data.email) {
                navigate('/login');
                return;
            }

            alert('Ops, houve erro. Tentar novamente.');
        } catch (e) {
            console.log(e);
            alert('Erro no servidor. Tentar novamente.');
        }
    }

    const handleDoLogin = () => {
        navigate('/login');
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
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Cria sua conta e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <Input placeholder="Nome completo"
                            leftIcon={<MdPerson2 />}
                            name="name"
                            value={control.name}
                            control={control}
                            errorMessage={errors?.name?.message} />
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
                        <Button title="Criar minha conta" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <TermsOfUseWarningText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso.</TermsOfUseWarningText>
                    </Row>
                    <Row>
                        <HaveAccountText>
                            Já tenho conta.
                            <DoLoginText onClick={handleDoLogin}> Fazer login</DoLoginText>
                        </HaveAccountText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { SignUp }