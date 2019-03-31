import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { connect } from "react-redux";
import { fetchFixtures } from "../../actions/setting.action";

class ShowFixture extends Component {
  componentDidMount() {
    this.props.fetchFixtures();
  }
  render() {
    const { fixtures, isFetching } = this.props.fixtures;

    return (
      <View style={styles.container}>
        {isFetching ? (
          <Text>Fetching data</Text>
        ) : (
          <View>
            {fixtures.length > 0 && (
              <View>
                {fixtures.map(fixture => (
                  <View key={fixture.fixture.id}>
                    <Text>
                      {fixture.fixture.home} VS {fixture.fixture.away}
                    </Text>
                    <Text>
                      {fixture.fixture.schedule}
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log("Fixtures", state.fixtureState);
  return {
    fixtures: state.fixtureState
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchFixtures: () => dispatch(fetchFixtures())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowFixture);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
