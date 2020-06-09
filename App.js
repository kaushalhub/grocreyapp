import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import LoginScreen from "./screens/LoginScreen";
import VerifyScreen from "./screens/VerifyScreen";
import HomeScreen from "./screens/HomeScreen";
import MessageScreen from "./screens/MessageScreen";
import NotificationScreen from "./screens/NotificationScreen";
import PostScreen from "./screens/PostScreen";
import ProfileScreen from "./screens/ProfileScreen";

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" size={28} color={tintColor} />
        )
      }
    },
    Messages: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-chatboxes" size={28} color={tintColor} />
        )
      }
    },
    Post: {
      screen: PostScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons
            name="ios-cart"
            size={48}
            color="#E9446A"
            style={{
              shadowColor: "#E9446A",
              shadowOffset: { width: 0, height: 1 },
              shadowRadius: 10,
              shadowOpacity: 0.3
            }}
          />
        )
      }
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-notifications" size={28} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: LoginScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-person" size={28} color={tintColor} />
        )
      }
    }
  },

  {
    tabBarOptions: {
      activeTintColor: "#161F3D",
      inactiveTinColor: "#B8BBC4",
      showLabel: false
    }
  }
);

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Verify: VerifyScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppTabNavigator
    }
  )
);
