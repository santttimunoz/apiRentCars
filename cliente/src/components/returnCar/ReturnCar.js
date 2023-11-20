import { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Text, TextInput, Button, RadioButton } from "react-native-paper";
import { styles } from "../../../assets/CSS/styles";

export function ReturnCar(){
    const navigation = useNavigation()
    return(
        <>
         <View style={styles.container}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Return a Car
        </Text>
        <View>
          <TextInput style={{ marginTop: 10 }} label={"rentNumber"} />
          <TextInput style={{ marginTop: 10 }} label={"plateNumber"} />
          <TextInput style={{ marginTop: 10 }} label={"returnDate"} />
          <Button
            style={{ marginTop: 20, backgroundColor: "black" }}
            labelStyle={{ color: "white" }}
          >
            guardar
          </Button>
          <Text style={{ textAlign: "center", marginTop: 10 }}>
            ir a
            <Text style={{ fontWeight: "bold" }} onPress={navigation.navigate("Cars")} >
              Rean a Car
            </Text>            
          </Text>
          <Text style={{ fontWeight: "bold", textAlign: "center", marginTop: 10 }} onPress={navigation.navigate("LogIn")} >
              LogOut
            </Text>
        </View>
      </View>
        </>
    )
}