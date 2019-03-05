import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class Products extends Component {
  render() {
    console.log("ProdComp", this.props.products);
    console.log("ProdCompLength", this.props.products.length);
    if (this.props.products.length > 0) {
      return (
        <View style={styles.container}>
          {this.props.products.map(product => (
            <View style={styles.list} key={product.id}>
              <TouchableOpacity
                key={product.id}
                onPress={() => this.props.onPress(product)}
              >
                <Text
                  style={{
                    fontSize: 18
                  }}
                >
                  {product.name}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      );
    } else {
      return <View><Text>asd</Text></View>;
    }
  }
}
export default Products;

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
