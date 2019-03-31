import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class Fixtures extends Component {
  render() {
    console.log("Fixture", this.props.fixtures);
    if (this.props.fixtures.length > 0) {
      return (
        <View style={styles.container}>
          {this.props.fixtures.map(fixture => (
            <View style={styles.list} key={fixture.id}>
              <TouchableOpacity
                key={fixture.id}
                onPress={() => this.props.onPress(fixture)}
              >
                <Text
                  style={{
                    fontSize: 18
                  }}
                >
                  {fixture.home} VS {fixture.away}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      );
    } else {
      return (
        <View>
          <Text>NO</Text>
        </View>
      );
    }
  }
}
export default Fixtures;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
  list: {
    padding: 10,
    marginBottom: 10,
    borderColor: "rgba(100,100,100,0.2)",
    borderWidth: 1,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "rgb(100,100,100)",
    shadowOpacity: 0.8
  }
});
