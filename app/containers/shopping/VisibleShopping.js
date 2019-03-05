import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import Products from "../../components/shopping/Products";

import { connect } from "react-redux";

import { games } from "../../constants/Data";
import { ADD_TO_CART } from "../../actions/actionTypes";
import { addToCart, fetchProducts } from "../../actions";

class VisibleShopping extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const { products, isFetching } = this.props.products;
    console.log("Prodododoo", products);
    console.log("games-const", games);
    return (
      <View style={styles.container}>
        {isFetching ? (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <ActivityIndicator size={"large"} />
          </View>
        ) : (
          <Products products={products} onPress={this.props.addItemToCart} />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log("Products", state.products);
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    addItemToCart: product => dispatch(addToCart(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleShopping);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
