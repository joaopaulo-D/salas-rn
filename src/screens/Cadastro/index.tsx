import { useState } from "react";

import { StatusBar } from "expo-status-bar";

import { Text, View } from "react-native";
import { Input } from "react-native-elements";

import { 
    Button,
    Container, 
    InputContainer, 
    Title
} from "./styles";
import { Registro } from "../../services/firebase";

export function Cadastro(){

    const [nome, setNome] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassowrd] = useState<string>('')
    const [imagem , setImagem] = useState<string>('')

    function Cadastro(){
        Registro(nome, email, password, imagem)
    }

    return(
        <Container>
            <StatusBar style="light"/>
            <Text style={{ marginBottom: 50, fontSize: 25, color: '#000' }}>
                Cadastro 
            </Text>

            <InputContainer>
                <Input
                    placeholder="Digite seu nome"
                    autoFocus
                    value={nome}
                    onChangeText={(text) => setNome(text) }
                />

                <Input
                    placeholder="Digite seu e-mail"
                    autoFocus
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => setEmail(text) }
                />

                <Input
                    placeholder="Digite sua senha"
                    autoFocus
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassowrd(text) }
                />

                <Input
                    placeholder="imagem"
                    value={imagem}
                    onChangeText={(text) => setImagem(text)}
                    onSubmitEditing={Cadastro}
                />
            </InputContainer>
            
            <Button onPress={() => Cadastro()}>
                <Title>Entrar</Title>
            </Button>
        </Container>
    )
}