import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: white;
`;

export const InputContainer = styled.View`
    width: 300px;
    margin-top: 20px;
`;

export const Button = styled.TouchableOpacity`
    background-color: #000;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
    width: 80%;
`; 

export const Title = styled.Text`
    color: white;
    text-align: center;
`;