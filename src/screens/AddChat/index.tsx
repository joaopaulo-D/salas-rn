import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";
import React, { useState } from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";
import { Button, Container, Title } from "./styles";

export function AddChat(){

    const navigation = useNavigation()
    const [input, setInput] = useState<string>('')

    async function createChat(){
        await firebase.firestore().collection('chats')
        .add({
            chatName: input
        })
        .then(() => navigation.goBack())
        .catch((error) => console.log(error))
    }

    return(
        <Container>
            <Input
                placeholder="Digite o nome da sala"
                value={input}
                onChangeText={(text) => setInput(text)}
                onSubmitEditing={createChat}
                leftIcon={
                    <Entypo name="chat" size={24} color="#000"/>
                }
            />

            <Button onPress={() => createChat()}>
                <Title>Enviar</Title>
            </Button>
        </Container>
    )
}