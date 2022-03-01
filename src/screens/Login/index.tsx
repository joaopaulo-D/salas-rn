import React, { useEffect, useState } from "react";

import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import { Text, View } from "react-native";

import { Input } from "react-native-elements";

import { 
    Button,
    Container,
    InputContainer, 
    Title
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";
import { SigIn } from "../../services/firebase";

export function Login(){

    const navigation = useNavigation()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
            if(authUser){
                navigation.navigate('Home')
            }
        })

        return unsubscribe
    }, [])

    function handleLogin(){
        SigIn(email, password)
    }

    return(
        <Container>
            <StatusBar style="light"/>
            <InputContainer>
                <Input 
                    placeholder="Digite seu e-mail" 
                    autoFocus 
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input 
                    placeholder="Digite sua senha" 
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </InputContainer>

            <Button onPress={() => handleLogin()}>
                <Title>Entrar</Title>
            </Button>
            <Button onPress={() => navigation.navigate('Cadastro')}>
                <Title>Cadastrar</Title>
            </Button>
        </Container>
    )
}