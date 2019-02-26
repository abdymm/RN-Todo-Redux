import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { connect } from "react-redux";

import { addTodo } from "../actions";

class AddTodo extends Component {
  state = {
    text: ""
  };

  addTodo = text => {
    //update redux store
    console.log(text);
    this.props.dispatch(addTodo(text));
    this.setState({ text: "" });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TextInput
            blurOnSubmit={false}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            placeholder="Whats going on.."
            style={styles.inputStatus}
            onSubmitEditing={() => this.addTodo(this.state.text)}
          />
          <TouchableOpacity
            style={styles.buttonAddTodo}
            onPress={() => this.addTodo(this.state.text)}
          >
            <Text style={{ color: "#0366d6" }}>POST</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginHorizontal: 10
  },
  inputStatus: {
    flex: 1,
    height: 50,
    backgroundColor: "#eee",
    paddingLeft: 10
  },
  buttonAddTodo: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 10,
    paddingHorizontal: 10
  }
});
