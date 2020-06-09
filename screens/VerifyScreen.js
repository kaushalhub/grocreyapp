import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";



export default class VerifyScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>

        <Image
          source={require("../assets/authHeader.png")}
          style={{ marginTop: -150, marginLeft: -15 }}
        ></Image>
        <Image
          source={require("../assets/loginLogo.png")}
          style={{ marginTop: -110, alignSelf: "center" }}
        ></Image>
        <Image
          source={require("../assets/authFooter.png")}
          style={{ position: "absolute", bottom: -325, right: -225 }}
        ></Image>

        <TouchableOpacity
          style={styles.back}
          onPress={() => this.props.navigation.goBack()}
        >
          <Ionicons
            name="ios-arrow-round-back"
            size={32}
            color="#FFF"
          ></Ionicons>
        </TouchableOpacity>

        <View
          style={{
            position: "absolute",
            top: 64,
            alignItems: "center",
            width: "100%"
          }}
        >
          <Text
            style={styles.greeting}
          >{`Hello \nLogin to get Started`}</Text>
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Enter OTP</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChange={this.namehandleChange}
              
            ></TextInput>
          </View>

        </View>

        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Login")}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
            Login
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  greeting: {
    marginTop: -10,
    fontSize: 30,
    color: "white",
    fontWeight: "400",
    textAlign: "center"
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
  },
  error: {
    color: "#E9446A",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
  },
  form: {
    marginTop: -60,
    marginBottom: 48,
    marginHorizontal: 38
  },
  inputTitle: {
    color: "#8A8F9E",
    fontSize: 20,
    textTransform: "uppercase"
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D"
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center"
  },
  back: {
    position: "absolute",
    top: 48,
    left: 32,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(21, 22, 48, 0.1)",
    alignItems: "center",
    justifyContent: "center"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#E1E2E6",
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center"
  }
});
