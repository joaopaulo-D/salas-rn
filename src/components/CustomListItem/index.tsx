import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ListItem } from "react-native-elements";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";

type CustomListItemProps = {
    id: string
    chatName: string
}

export function CustomListItem(props: CustomListItemProps){

    const navigation = useNavigation()

    return(
        <ListItem 
        onPress={() => navigation.navigate('Chat', {
            id: props.id,
            chatName: props.chatName
        })} 
        key={props.id} 
        bottomDivider
        >
            <Avatar
                rounded
                source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKLJ-qACk6fBUdMkuQXKlkWfvp5-pU4LJXPbOq1nKKz0YqtlaigJ-nwAT4yI_xQdurGlY&usqp=CAU"
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "900" }}>
                    {props.chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    ...
                </ListItem.Subtitle>
            </ListItem.Content>

        </ListItem>
    )
}