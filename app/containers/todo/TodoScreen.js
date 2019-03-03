import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import AddTodo from "./AddTodo";
import VisibleTodos from "./VisibleTodos";
import FilterTodos from "./FilterTodos";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <AddTodo />
        <View>
          <VisibleTodos />
        </View>
        <View>
          <FilterTodos />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  }
});
