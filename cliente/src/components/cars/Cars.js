import { useState } from "react";
import { View } from "react-native";
import { Text, TextInput, Button, RadioButton } from "react-native-paper";
import { styles } from "../../../assets/CSS/styles";

export function Cars() {
  const [state, setState] = useState("able");
  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 20 }}>
          Cars Register
        </Text>
        <View>
          <TextInput
            autoFocus
            label="plateNumber"
            left={<TextInput.Icon icon="account" />}
            onChangeText={""}
            value={""}
          />
          <TextInput
            style={{ marginTop: 10 }}
            autoFocus
            label="brand"
            left={<TextInput.Icon icon="account" />}
            onChangeText={""}
            value={""}
          />
          <View style={{ flexDirection: "row" }}>
            <RadioButton
              status={state === "able" ? "checked" : "unchecked"}
              value="able"
              onPress={() => setState("able")}
            />
            <Text style={{ marginTop: 10 }}>Able</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <RadioButton
              status={state === "disable" ? "checked" : "unchecked"}
              value="disable"
              onPress={() => setState("disable")}
            />
            <Text style={{ marginTop: 10 }}>Disable</Text>
          </View>
          <TextInput
            autoFocus
            label="costPerDay"
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
            ingresar
          </Button>
          <Button
            style={{ marginTop: 10, backgroundColor: "blue" }}
            labelStyle={{ color: "white" }}
            //mode="outlined"
            onPress={() => navigation.navigate("ListCars")}
          >
            lista
          </Button>
          
          {/* aqui configurar la ventana (modal) */}
          <Text style={{ marginTop: 10 }}>
            Quieres rentar un vehiculo?{" "}
            <Text
              style={{ color: "blue", fontWeight: "bold" }}
              onPress={() => navigation.navigate("Rents")}
            >
              Ir a Rentas
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
}
