import { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Text, TextInput, Button } from "react-native-paper";
import { styles } from "../../../assets/CSS/styles";

export function LogIn() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>LogIn</Text>
        <View>
          <TextInput style={{ marginTop: 10 }} label={"userName"} />
          <TextInput style={{ marginTop: 10 }} label={"password"} />
          <Button
            style={{ marginTop: 20, backgroundColor: "black" }}
            labelStyle={{ color: "white" }}
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
        </View>
      </View>
    </>
  );
}
