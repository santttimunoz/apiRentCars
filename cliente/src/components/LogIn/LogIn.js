import axios from "axios";
import { useState } from "react";
import { View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ventana } from "../ventana/Ventana";

import { Text, TextInput, Button } from "react-native-paper";
import { styles } from "../../../assets/CSS/styles";

export function LogIn() {

  const navigation = useNavigation();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('')
  const[modalVisible, setModalVisible] = useState(false)

  const closeModal = ()=>{
    setModalVisible(false)
}  

  const guardar = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/users')
      const users = response.data.users;
      console.log(users)
      const foundUser = users.find((user) => user.userName === userName)           

      if(userName == "" || password == "" ){
        setErrorMessage("debe llenar los campos")
        setModalVisible(true)
      }else if (foundUser) {                
        // Use foundUser.userName for the comparison
        if (userName === foundUser.userName) {
          // Move navigation inside this block
          
          console.log('Respuesta de la API:', response.data);
  
          // Mostrar un mensaje de éxito
          Alert.alert('Registro exitoso', 'Usuario registrado correctamente.');
  
          // Redirigir a la pantalla de inicio de sesión
          navigation.navigate('LogIn');
        } else {
          console.log('Usuario no encontrado');
          // Optionally show an alert or take other actions
        }
      } else {
        console.log('Usuario no encontrado');
        // Optionally show an alert or take other actions
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
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>LogIn</Text>
        <View>
          <TextInput style={{ marginTop: 10 }} label="userName"           
          onChangeText={(userName)=>setUserName(userName)}
          value={userName}/>
          <TextInput style={{ marginTop: 10 }} label="password"
           onChangeText={(password)=>setPassword(password)}
           value={password} />
          <Button
            style={{ marginTop: 20, backgroundColor: "black" }}
            labelStyle={{ color: "white" }}
            onPress={guardar}
          >
            Iniciar Sesion
          </Button>
          <Text style={{ textAlign: "center", marginTop: 10}}>
            No tienes una cuenta?
            <Text
              style={{ fontWeight: "bold" }}
              onPress={() => navigation.navigate("SignUp")}
            >
              SignUp
            </Text>
          </Text>
          
          <Text
            style={{ textAlign : "center", marginTop : 5, fontWeight : "bold"}}
            onPress={() => navigation.navigate("ForgotPass")}
          >
            ¿olvidaste la contraseña? 
          </Text>
          {modalVisible && <Ventana modalVisible={modalVisible} closeModal={closeModal} message={errorMessage}/>}
        </View>
      </View>
    </>
  );
}
