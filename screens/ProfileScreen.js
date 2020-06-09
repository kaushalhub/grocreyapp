import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>corporate identification number: U10100ML2009PTC008387 </Text>
        <Text>company name: N E MINING & CONSTRUCTION PRIVATE LIMITED </Text>
        <Text>company status: Under Process of Striking off</Text>
        <Text>company class: Private</Text>
        <Text>company category: Company limited by Shares</Text>
        <Text>company sub category: Non-govt company</Text>
        <Text>date of registration: 2009-11-19T06:56:55Z</Text>
        <Text>registered state: Meghalaya</Text>
        <Text>authorized cap: 50000</Text>
        <Text>paidup capital: 10000</Text>
        <Text>industrial class: 10100</Text>
        <Text>principal business activity as per cin: Mining & Quarrying</Text>
        <Text>
          registered office address: C/O TLIBON LYNGDOH NONGRAH, NONGPDENG
          SHILLONG East Khasi Hills ML IN 793006
        </Text>
        <Text>registrar of companies: RoC-Shillong</Text>
        <Text>email addr: ajaykc31@gmail.com</Text>
        <Text>latest year annual return: 31-03-2012</Text>
        <Text>latest year financial statement: 31-03-2011</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
