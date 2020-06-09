import React from "react";
import { FlatList, ActivityIndicator, Text, View } from "react-native";

export default class FetchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return fetch(
      "https://api.data.gov.in/resource/60c882ea-8958-4e00-ab80-d3980ef88bdb?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=1000"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.records
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
   
    return (
      <View
        style={{
          flex: 1,
          marginTop: 100,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <Text style={{ fontSize: 50 }}>
              {item.cil}, {item.name_of_state_ut}
            </Text>
          )}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}
