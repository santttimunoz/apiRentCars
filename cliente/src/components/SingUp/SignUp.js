import { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Text, TextInput, Button, RadioButton } from "react-native-paper";
import { styles } from "../../../assets/CSS/styles";

export function SignUp() {
  const navigation = useNavigation()
  const [state, setState] = useState("");
  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 20 }}>user register</Text>
        <View>
          <TextInput
            autoFocus
            label="name"
            left={<TextInput.Icon icon="account" />}
            onChangeText={(name) => setName(name)}
            value={""}
          />
          <TextInput
            style={{ marginTop: 10 }}
            autoFocus
            label="userName"
            left={<TextInput.Icon icon="account" />}
            onChangeText={""}
            value={""}
          />
          <View style={{ flexDirection: "row" }}>
            <RadioButton
              status={state === "able" ? "checked" : "unchecked"}
              value="admin"
              onPress={() => setState("able")}
            />
            <Text style={{ marginTop: 10 }}>Admin</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <RadioButton
              status={state === "disable" ? "checked" : "unchecked"}
              value="user"
              onPress={() => setState("disable")}
            />
            <Text style={{ marginTop: 10 }}>User</Text>
          </View>
          <TextInput
            style={{ marginTop: 10 }}
            autoFocus
            label="Password"
            left={<TextInput.Icon icon="lock" />}
            onChangeText={""}
            value={""}
          />
          <Button
            style={{ marginTop: 20, backgroundColor: "black" }}
            labelStyle={{ color: "white" }}
            mode="outlined"
            onPress={() => guardar()}
          >
            Registrar
          </Button>
          <Text style={{textAlign : "center", marginTop : 10}} >Ya tienes una cuenta?{' '}
                <Text style={{color:'black', fontWeight:"bold"}}  onPress={()=> navigation.navigate('LogIn')}>
                     Inicia Sesion
                    </Text>
                    </Text> 
        </View>
      </View>
    </>
  );
}
