import axios from "axios";
import { useState } from "react";
import { View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Text, TextInput, Button, RadioButton } from "react-native-paper";
import { styles } from "../../../assets/CSS/styles";

export function SignUp() {
  const navigation = useNavigation();
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");

  const guardar = async () => {
    try {
      // Realizar la solicitud POST a la API para registrar el usuario
      const response = await axios.post('https://api-rent-cars.vercel.app/api/user', {
        name,
        userName,
        role,
        password,
        secret
      });

      // Manejar la respuesta de la API según tus necesidades
      console.log('Respuesta de la API:', response.data);

      // Mostrar un mensaje de éxito
      Alert.alert('Registro exitoso', 'Usuario registrado correctamente.');

      // Redirigir a la pantalla de inicio de sesión
      navigation.navigate('LogIn');
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
            onChangeText={(secret) => setSecret(secret)}
            value={secret}
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
        </View>
      </View>
    </>
  );
}
