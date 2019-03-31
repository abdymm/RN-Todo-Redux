import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { connect } from "react-redux";
import ShowFixture from "./ShowFixture";

class SettingsScreen extends Component {
  static navigationOptions = {
    title: "SMANSA CUP Fixture"
  };

  render() {
    return (
      <View style={styles.container}>
        <ShowFixture />
      </View>
    );
  }
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
