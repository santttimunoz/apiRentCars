import axios from "axios";
import { useState } from "react";
import { View, Alert } from "react-native";
import { Text, TextInput, Button, RadioButton } from "react-native-paper";
import { styles } from "../../../assets/CSS/styles";
import { window } from "../../../assets/CSS/styles";

export function Cars() {

  const [state, setState] = useState("able");
  const[plateNumber, setPlateNumber] = useState()
  const[brand, setBrand] = useState()
  const[dailyValue, setDailyValue] = useState()
  const [errorMessage, setErrorMessage] = useState('')
  const[modalVisible, setModalVisible] = useState(false)

  const closeModal = ()=>{
    setModalVisible(false)
}  

  const guardar = async () => {
    try {
      const responseget = await axios.get('http://localhost:4000/api/car')

      if(plateNumber == "" || brand == "" || state == "" || dailyValue == "" ){
        setErrorMessage("debe llenar los campos")
        setModalVisible(true)
      }else if(plateNumber == responseget.plateNumber){
        setErrorMessage("plateNumber ya existe")
        setModalVisible(true)
      }
      else{
         // Realizar la solicitud POST a la API para registrar el usuario
      const response = await axios.post('http://localhost:4000/api/car', {
        plateNumber,
        brand,
        state,
        dailyValue,
      });      

      setPlateNumber("")
      setBrand("")
      setState("")
      setDailyValue("")      
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
          {modalVisible && <Ventana modalVisible={modalVisible} closeModal={closeModal} message={errorMessage}/>}
        </View>
      </View>
    </>
  );
}
