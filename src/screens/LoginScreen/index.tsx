import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import LoginForm from './components/LoginForm';
import { useLogin } from './hooks/useLogin';
import { loginStyles } from './utils/loginStyles';
import theme from '../../styles/theme';


type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenProps['navigation']>();
  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    handleLogin,
  } = useLogin();

  return (
    <Container>
      <Title>App Marcação de Consultas</Title>
      <LoginForm
        email={email}
        password={password}
        error={error}
        loading={loading}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onLogin={handleLogin}
        onNavigateRegister={() => navigation.navigate('Register')}
        styles={loginStyles}
      />
      <Text style={loginStyles.hint}>
        Primeiro acesso? Cadastre-se como Admin ou Paciente.
      </Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  background-color: ${theme.colors.background};
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: ${theme.colors.text};
`;

export default LoginScreen;