import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBW2TSXq_tyelDp_e_O8jFeKEyV33NJ38Y",
    authDomain: "chat-rn-8d676.firebaseapp.com",
    projectId: "chat-rn-8d676",
    storageBucket: "chat-rn-8d676.appspot.com",
    messagingSenderId: "176349744980",
    appId: "1:176349744980:web:3d6cfa187fa391527342c1"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}


export async function Registro(nome: string, email: string, password: string, imagem: string){
    try {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            authUser.user?.updateProfile({
                displayName: nome,
                photoURL: imagem || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZNG2V1kv_IH_8aTfCrLyEYKVDuCeuKoHaQ&usqp=CAU"
            })
        })
    } catch (error) {
        console.log(error)
    }   
}

export async function SigIn(email: string, password: string){
    try {
        firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
        console.log(error)
    }
}