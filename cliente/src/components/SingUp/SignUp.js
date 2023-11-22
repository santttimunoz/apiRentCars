import axios from "axios";
import { useState } from "react";
import { View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ventana } from "../ventana/Ventana";

import { Text, TextInput, Button, RadioButton } from "react-native-paper";
import { styles } from "../../../assets/CSS/styles";


export function SignUp() {

  const [errorMessage, setErrorMessage] = useState('')
  const[modalVisible, setModalVisible] = useState(false)
  const navigation = useNavigation();
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [secretWord, setSecretWord] = useState("");

  const closeModal = ()=>{
    setModalVisible(false)
}  

  const guardar = async () => {
    try {
      const responseget = await axios.get('http://localhost:4000/api/users')

      if(userName == "" || password == "" || role == "" || secretWord == "" || name == ""){
        setErrorMessage("debe llenar los campos")
        setModalVisible(true)
      }else if(userName == responseget.userName){
        setErrorMessage("usuario ya existe")
        setModalVisible(true)
      }
      else{
         // Realizar la solicitud POST a la API para registrar el usuario
      const response = await axios.post('http://localhost:4000/api/user', {
        name,
        userName,
        role,
        password,
        secretWord
      });
      
      if(response){
      navigation.navigate("LogIn")
      }     

      setName("")
      setUserName("")
      setPassword("")
      setRole("")
      setSecretWord("")
      // Manejar la respuesta de la API según tus necesidades
      console.log('Respuesta de la API:', response.data);

      // Mostrar un mensaje de éxito
      Alert.alert('Registro exitoso', 'Usuario registrado correctamente.');

      // Redirigir a la pantalla de inicio de sesión
      navigation.navigate('LogIn');
      }
     
    } catch (error) {
      // Manejar errores de la API
      console.error('Error al registrar el usuario:', error);
      Alert.alert('Error', 'Hubo un error al registrar el usuario. Por favor, intenta nuevamente.');
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 20 }}>
          user register
        </Text>
        <View>
          <TextInput
            autoFocus
            label="name"
            left={<TextInput.Icon icon="account" />}
            onChangeText={(name) => setName(name)}
            value={name}
          />
          <TextInput
            style={{ marginTop: 10 }}
            autoFocus
            label="userName"
            left={<TextInput.Icon icon="account" />}
            onChangeText={(userName) => setUserName(userName)}
            value={userName}
          />
          <View style={{ flexDirection: "row" }}>
            <RadioButton
              status={role === "admin" ? "checked" : "unchecked"}
              value="admin"
              onPress={() => setRole("admin")}
            />
            <Text style={{ marginTop: 10 }}>Admin</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <RadioButton
              status={role === "user" ? "checked" : "unchecked"}
              value="user"
              onPress={() => setRole("user")}
            />
            <Text style={{ marginTop: 10 }}>User</Text>
          </View>
          <TextInput
            style={{ marginTop: 10 }}
            autoFocus
            label="Password"
            left={<TextInput.Icon icon="lock" />}
            onChangeText={(password) => setPassword(password)}
            value={password}
          />
          <TextInput
            style={{ marginTop: 10 }}
            autoFocus
            label="secretWord"
            left={<TextInput.Icon icon="lock" />}
            onChangeText={(secretWord) => setSecretWord(secretWord)}
            value={secretWord}
          />
          <Button
            style={{ marginTop: 20, backgroundColor: "black" }}
            labelStyle={{ color: "white" }}
            mode="outlined"
            onPress={guardar}
          >
            Registrar
          </Button>          
          <Text style={{ textAlign: "center", marginTop: 10 }}>
            Ya tienes una cuenta?{" "}
            <Text
              style={{ color: "black", fontWeight: "bold" }}
              onPress={() => navigation.navigate("LogIn")}
            >
              Inicia Sesion
            </Text>
          </Text>
          {modalVisible && <Ventana modalVisible={modalVisible} closeModal={closeModal} message={errorMessage}/>}
        </View>
      </View>
    </>
  );
}
