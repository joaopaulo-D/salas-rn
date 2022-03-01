import { createStackNavigator } from "@react-navigation/stack";
import { AddChat } from "../screens/AddChat";
import { Cadastro } from "../screens/Cadastro";
import { Chat } from "../screens/Chat";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";

const Stack = createStackNavigator()


export function Routes(){
    return(
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#000' },
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerTitleStyle: { color: 'white' }, 
        }}
        >
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="Cadastro" component={Cadastro}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="AddChat" component={AddChat}/>
            <Stack.Screen name="Chat" component={Chat}/>
        </Stack.Navigator>
    )
}