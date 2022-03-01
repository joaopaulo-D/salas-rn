import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { 
    SafeAreaView, 
    ScrollView,
    Text,
    TouchableOpacity,
    View
 } from "react-native";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { CustomListItem } from "../../components/CustomListItem";

type ChatsProps = {
    id: string
    chatName: string
}

export function Home(){

    const navigation = useNavigation()
    const imagemUser: any = firebase.auth().currentUser?.photoURL
    const nomeUser = firebase.auth().currentUser?.displayName
    const [chats, setChats] = useState<ChatsProps[]>([])

    function handleLogout(){
        firebase.auth().signOut()
        .then(() => navigation.navigate('login'))
    }

    useEffect(() => {
        const unsubscribe = firebase.firestore().collection('chats').onSnapshot((query) => {
            const data = query.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }) as ChatsProps[]

            setChats(data)
        })

        return unsubscribe
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Chat",
            headerStyle: { backgroundColor: '#000' },
            headerTitleStyle: { color: '#fff' },
            headerTintColor: '#fff',
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity>
                        <Avatar
                            rounded
                            source={{
                                uri: imagemUser
                            }}
                        />
                        <Text style={{
                            marginLeft: 45,
                            marginTop: -30,
                            fontSize: 18,
                            color: '#fff'
                        }}>{nomeUser}</Text>
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <View style={{ marginRight: 15, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('AddChat')} style={{ marginRight: 15 }}>
                        <Entypo name="add-to-list" size={24} color="#fff"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLogout()}>
                        <Entypo name="log-out" size={24} color="#fff"/>
                    </TouchableOpacity>
                </View>
            )
        })
    }, [])

    return(
        <SafeAreaView>
            <ScrollView>
                {chats.map((u, index) => (
                    <CustomListItem key={index} id={u.id} chatName={u.chatName}/>
                ))}
                
            </ScrollView>
        </SafeAreaView>
    )
}