import { useEffect, useState } from "react";
import { View, Picker } from "react-native";

import { Text, TextInput, Button, RadioButton } from "react-native-paper";
import { styles } from "../../../assets/CSS/styles";

export function Rent() {
  const [selectedValue, setSelectedValue] = useState("option1");
  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontWeight : "bold", fontSize : 20}}>Make a Rent</Text>
        <View>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Option 1" value="option1" />
            <Picker.Item label="Option 2" value="option2" />
            <Picker.Item label="Option 3" value="option3" />
          </Picker>
          <TextInput
            style={{ marginTop: 10 }}
            autoFocus
            label="initialDate"
            left={<TextInput.Icon icon="account" />}
            onChangeText={""}
            value={""}
          />
          <TextInput
            style={{ marginTop: 10 }}
            autoFocus
            label="finalDate"
            left={<TextInput.Icon icon="account" />}
            onChangeText={""}
            value={""}
          />
          <TextInput
            style={{ marginTop: 10 }}
            autoFocus
            label="rentNumber"
            left={<TextInput.Icon icon="account" />}
            onChangeText={""}
            value={""}
          />
          <Button
            style={{ marginTop: 20, backgroundColor: "blue" }}
            labelStyle={{ color: "white" }}
            //mode="outlined"
            onPress={() => guardar()}
          >
            Resgistrar
          </Button>
          <Text style={{ marginTop: 10 }}>
            Quieres ver los vehiculos?{" "}
            <Text
              style={{ color: "blue", fontWeight: "bold" }}
              onPress={() => navigation.navigate("Cars")}
            >
              Ir a los vehiculos
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
}
