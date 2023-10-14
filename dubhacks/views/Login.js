import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import SwitchButton from '../components/switchButton';
import TextInputField from '../components/textInput';
import RememberForgotSection from '../components/rememberForgotSection';
import ActionButton from '../components/actionButton';
import Header from '../components/header';

const Login = () => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [selectedButton, setSelectedButton] = useState(0);
    const [loginBackgroundColor, setLoginBackgroundColor] = useState('#9E896A');
    const [registerBackgroundColor, setRegisterBackgroundColor] = useState('transparent');
    const [loginTextColor, setLoginTextColor] = useState('white');
    const [registerTextColor, setRegisterTextColor] = useState('black');
    const [isRegisterScreen, setIsRegisterScreen] = useState(false);

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'poppins-thin': require('../fonts/Poppins/Poppins-Light.ttf'),
            });
            setFontLoaded(true);
        }

        loadFont();
    }, []);

    useEffect(() => {
        if (selectedButton === 0) {
            setLoginBackgroundColor('#9E896A');
            setRegisterBackgroundColor('transparent');
            setLoginTextColor('white');
            setRegisterTextColor('black');
        } else if (selectedButton === 1) {
            setLoginBackgroundColor('transparent');
            setRegisterBackgroundColor('#9E896A');
            setRegisterTextColor('white');
            setLoginTextColor('black');
        }
    }, [selectedButton]);

    const switchToLogin = () => {
        setSelectedButton(0);
        setIsRegisterScreen(false);
    };

    const switchToRegister = () => {
        setSelectedButton(1);
        setIsRegisterScreen(true);
    };

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.loginContainer}>
                <View style={styles.switchContainer}>
                    <SwitchButton
                        backgroundColor={loginBackgroundColor}
                        textColor={loginTextColor}
                        text="Login"
                        onPress={switchToLogin}
                    />
                    <SwitchButton
                        backgroundColor={registerBackgroundColor}
                        textColor={registerTextColor}
                        text="Register"
                        onPress={switchToRegister}
                    />
                </View>
                <TextInputField placeholder="Username" fontLoaded={fontLoaded} />
                <TextInputField placeholder="Password" fontLoaded={fontLoaded} />
                {isRegisterScreen && (
                    <TextInputField placeholder="Email" fontLoaded={fontLoaded} />
                )}
                <RememberForgotSection
                    rememberMe={rememberMe}
                    toggleRememberMe={() => setRememberMe(!rememberMe)}
                    fontLoaded={fontLoaded}
                />
                <ActionButton
                    text={isRegisterScreen ? 'Register' : 'Login'}
                    backgroundColor={isRegisterScreen ? '#86A37D' : '#9E896A'}
                    fontLoaded={fontLoaded}
                    onPress={() => { }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginContainer: {
      padding: 20,
      borderRadius: 25,
      width: '100%',
    },
    switchContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 40,
        backgroundColor: '#F8EDDD',
        marginBottom: 120,
      },
  });

export default Login;