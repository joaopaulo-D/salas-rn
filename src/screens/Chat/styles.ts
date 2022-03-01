import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: white;
`;

export const ContainerChat = styled.KeyboardAvoidingView`
    flex: 1;
`;

export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 15px;
`;

export const Input = styled.TextInput`
    bottom: 0;
    height: 40px;
    flex: 1;
    margin-right: 15px;
    border-color: transparent;
    background-color: #ececec;
    border-width: 1px;
    padding: 10px;
    color: gray;
    border-radius: 30px;
`;

export const Button = styled.TouchableOpacity``;

export const Recebe = styled.View`
    padding: 15px;
    background-color: #ececec;
    align-self: flex-end;
    border-radius: 20px;
    margin-right: 15px;
    margin-bottom: 20px;
    max-width: 80%;
    position: relative;
`;

export const Sende = styled.View`
    padding: 15px;
    background-color: #000;
    align-self: flex-start;
    border-radius: 20px;
    margin: 15px;
    max-width: 80%;
    position: relative;
`;
