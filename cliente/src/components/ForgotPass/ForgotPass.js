import { useState } from "react";
import { View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../../assets/CSS/styles";

export function ForgotPass() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Reset Your Password
        </Text>
        <View>
          <TextInput style={{ marginTop: 10 }} label={"userName"} />
          <TextInput style={{ marginTop: 10 }} label={"secretWord"} />
          <TextInput style={{ marginTop: 10 }} label={"newPassword"} />
          <Button
            style={{ marginTop: 20, backgroundColor: "black" }}
            labelStyle={{ color: "white" }}
          >
            guardar
          </Button>
          <Text style={{ textAlign: "center", marginTop: 10 }}>
            ir a
            <Text style={{ fontWeight: "bold" }} onPress={()=> navigation.navigate("LogIn")} >
              LogIn
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
}
