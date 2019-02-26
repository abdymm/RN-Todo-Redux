import React from "react";
import TodoReduxApp from "./app/TodoReduxApp";
import store from "./app/store";
import { Provider } from "react-redux";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    return (
      <Provider store={store}>
        <TodoReduxApp />
      </Provider>
    );
  }
}
