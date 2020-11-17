import React from 'react';
import { Image } from 'react-native';

import { Container, Title } from './styles';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => (
  <Container>
    <Image source={logoImg} />
    <Title>Faça seu logon</Title>
    <Button onPress={() => alert('Entrar')}>Entrar</Button>
  </Container>
);

export default SignIn;
