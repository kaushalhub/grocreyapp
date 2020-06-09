import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  StatusBar
} from "react-native";
import { Appbar } from 'react-native-paper';
import Carousel from '../components/Carousel';
import { dummyData } from '../data/Data'

export default class HomeScreen extends React.Component {

  _handleSearch = () => console.log('Searching');


  render() {
    return (
      <View>
      <Appbar.Header style={{ backgroundColor: '#E9446A'}}>
       
        <Appbar.Content
          title="YourMart"
          subtitle="Your Own Grocery Shop"
        />
        <Appbar.Action icon="magnify" onPress={this._handleSearch} />

      </Appbar.Header>

      <Text style={{fontSize: 30, marginLeft: 15, marginTop: 20}}>Feature</Text>

      <View>
            <Carousel data = {dummyData}/>
      </View>


     
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
