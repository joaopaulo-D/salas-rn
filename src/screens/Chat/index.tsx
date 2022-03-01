import { useEffect, useLayoutEffect, useState } from "react";

import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Keyboard, TouchableNativeFeedback, ScrollView, View, Text } from "react-native";

import { 
    Button, 
    Container, 
    ContainerChat, 
    Footer, 
    Input, 
    Recebe,
    Sende,
} from "./styles";
import firebase from "firebase";

type MensagemProps = {
    id: string;
    displaName: string;
    email: string;
    photoUrl: string;
    mensagem: string;
    created_at: string
}

export function Chat(){

    const naviagtion = useNavigation()
    const route = useRoute()
    const { chatName } : any = route.params
    const { id } : any = route.params
    const [input, setInput] = useState<string>("")
    const [msg, setMsg] = useState<MensagemProps[]>([])

    useLayoutEffect(() => {
        naviagtion.setOptions({
            title: chatName
        })
    }, [])

    function sendMensagem(){
        Keyboard.dismiss()

        firebase.firestore()
        .collection('chats')
        .doc(id)
        .collection('mensagens')
        .add({
            created_at: firebase.firestore.FieldValue.serverTimestamp(),
            mensagem: input,
            displayName: firebase.auth().currentUser?.displayName,
            email: firebase.auth().currentUser?.email,
            photoUrl: firebase.auth().currentUser?.photoURL
        })

        setInput("")

    }

    useEffect(() => {
        const unsubscribe = firebase.firestore()
        .collection('chats')
        .doc(id)
        .collection('mensagens')
        .orderBy("created_at", "asc")
        .onSnapshot((query) => {
            const data = query.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }) as MensagemProps[]

            setMsg(data)
        })

        return unsubscribe
    }, [])

    return(
        <Container>
            <ContainerChat keyboardVerticalOffset={90}>
                <TouchableNativeFeedback onPress={Keyboard.dismiss}>
                    <>
                        <ScrollView>
                            {msg.map((m, index) => (
                                m.email === firebase.auth().currentUser?.email ? (
                                    <Recebe key={index}>
                                        <Text>{m.mensagem}</Text>
                                    </Recebe>
                                ) : (
                                    <Sende>
                                        <Text style={{ color: '#fff' }}>{m.mensagem}</Text>
                                    </Sende>
                                )
                            ))}
                        </ScrollView>
                            <Footer>
                                <Input
                                    placeholder="Digite sua mensagem"
                                    value={input}
                                    onChangeText={(text) => setInput(text)}
                                />
                                <Button onPress={() => sendMensagem()} activeOpacity={0.5}>
                                    <FontAwesome name="send" size={24} color="#ccc"/>
                            </Button>
                        </Footer>
                    </>
                </TouchableNativeFeedback>
            </ContainerChat>
        </Container>
    )
}