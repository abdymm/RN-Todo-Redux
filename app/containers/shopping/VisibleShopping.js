import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Products from "../../components/shopping/Products";

import { connect } from "react-redux";

import { games } from "../../constants/Data";
import { ADD_TO_CART } from "../../actions/actionTypes";

class VisibleShopping extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Products products={games} onPress={this.props.addItemToCart} />
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: product => dispatch({ type: ADD_TO_CART, payload: product })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(VisibleShopping);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
