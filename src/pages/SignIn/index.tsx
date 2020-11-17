import React from 'react';
import { Image } from 'react-native';

import { Container, Title } from './styles';
import logoImg from '../../assets/logo.png';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn: React.FC = () => (
  <Container>
    <Image source={logoImg} />
    <Title>Faça seu logon</Title>

    <Input name="email" icon="mail" placeholder="E-mail" />
    <Input name="password" icon="lock" placeholder="Senha" />

    <Button onPress={() => alert('Entrar')}>Entrar</Button>
  </Container>
);

export default SignIn;
