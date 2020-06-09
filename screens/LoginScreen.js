import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  LayoutAnimation
} from "react-native";


export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    mobile: "",
    errorMessage: null
  };

  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>

        <Image
          source={require("../assets/authHeader.png")}
          style={{ marginTop: -180, marginLeft: -10 }}
        ></Image>

        <Image
          source={require("../assets/loginLogo.png")}
          style={{ marginTop: -110, alignSelf: "center" }}
        ></Image>

        <Image
          source={require("../assets/authFooter.png")}
          style={{ position: "absolute", bottom: -325, right: -225 }}
        ></Image>

        <Text style={styles.greeting}>{`Hello again.\nWelcome Back.`}</Text>

        <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}>{this.state.errorMessage}</Text>
          )}
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Enter Mobile Number</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={mobile => this.setState({ mobile })}
              value={this.state.mobile}
            ></TextInput>
          </View>

        </View>

        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Verify")}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
            GET OTP
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
    marginTop: -32,
    fontSize: 22,
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
  }
});
