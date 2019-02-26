import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

import { filterTodos } from "../actions/index";
import Label from "../constants/Label";

class FilterTodos extends Component {
  filterTodos = status => {
    console.log("STATUSSSS", Label.FILTER_SHOW_COMPLETE);
    this.props.dispatch(filterTodos(status));
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.buttonFilter, styles.buttonFilterComplete]}
          onPress={() => this.filterTodos(Label.FILTER_SHOW_COMPLETE)}
        >
          <Text style={styles.textFilter}>Complete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonFilter, styles.buttonFilterALL]}
          onPress={() => this.filterTodos(Label.FILTER_SHOW_ALL)}
        >
          <Text style={styles.textFilter}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonFilter, styles.buttonFilterInComplete]}
          onPress={() => this.filterTodos(Label.FILTER_SHOW_INCOMPLETE)}
        >
          <Text style={styles.textFilter}>Incomplete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect()(FilterTodos);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginHorizontal: 10
  },
  buttonFilter: {
    padding: 6,
    marginHorizontal: 2,
    backgroundColor: "#27ae60",
    borderRadius: 5
  },
  buttonFilterALL: {
    backgroundColor: "#2980b9"
  },
  buttonFilterInComplete: {
    backgroundColor: "#c0392b"
  },

  textFilter: {
    fontSize: 13,
    color: "#fff"
  }
});
