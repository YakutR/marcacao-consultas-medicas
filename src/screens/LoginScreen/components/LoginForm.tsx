import React from 'react';
import { Input, Button, Text } from 'react-native-elements';
import { ViewStyle } from 'react-native';

type LoginFormProps = {
  email: string;
  password: string;
  error: string;
  loading: boolean;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onLogin: () => void;
  onNavigateRegister: () => void;
  styles: any;
};

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  error,
  loading,
  onEmailChange,
  onPasswordChange,
  onLogin,
  onNavigateRegister,
  styles,
}) => (
  <>
    <Input
      placeholder="Email"
      value={email}
      onChangeText={onEmailChange}
      autoCapitalize="none"
      keyboardType="email-address"
      containerStyle={styles.input}
    />

    <Input
      placeholder="Senha"
      value={password}
      onChangeText={onPasswordChange}
      secureTextEntry
      containerStyle={styles.input}
    />

    {error ? <Text style={styles.error}>{error}</Text> : null}

    <Button
      title="Entrar"
      onPress={onLogin}
      loading={loading}
      containerStyle={styles.button as ViewStyle}
      buttonStyle={styles.buttonStyle}
    />

    <Button
      title="Cadastrar Novo Usuário"
      onPress={onNavigateRegister}
      containerStyle={styles.registerButton as ViewStyle}
      buttonStyle={styles.registerButtonStyle}
    />
  </>
);

export default LoginForm;