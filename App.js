/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import Menu from "./app/components/Menu"
import Cart from "./app/components/Cart"
import React, {Component} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap,PagerPan } from 'react-native-tab-view';
import { connect } from 'react-redux';
 

const MenuPage = () => (
  <Menu/>
);
const CartPage = () => (
  <Cart/>
);
 class App extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'menu', title: 'Menu' },
      { key: 'cart', title: 'Cart' },
    ],
  };
componentWillReceiveProps(nextProps){
  console.log("next props is ",nextProps)
}
renderPager = props => (
  <PagerPan {...props} />
);
  render() {
    console.log("Inside render of coffee app",this.state.routes);
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          menu: MenuPage,
          cart: CartPage,
        })}
        // renderScene = {this.renderScene(this.state.routes)}
        renderPager={this.renderPager}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }

}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

function mapStateToProps (state) {
  console.log("Inside mapStateToProps of UserProfile",state);
  return {
      addToCartState: state.coffeeShopReducer.addToCartState,
   }
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
