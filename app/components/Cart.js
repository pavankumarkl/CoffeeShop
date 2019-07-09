import React, { Component } from "react";
import { Text, View, ListView, TouchableOpacity } from "react-native";
import { jsonData } from "../itemsList";
import { connect } from "react-redux";
import ResponsiveStyle from "../Styling/ResponsiveStyle";
import Styling from "../Styling/Styling";
import { addToCart } from "../actions/coffeeShopActions";
const data = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartState: null,
      dataSource: null
    };
  }
  componentWillMount() {
    console.log("componentWillMount of cart");
    if (this.props.addToCartState == null) {
      this.setState({
        cartState: this.props.addToCartState,
        dataSource: data.cloneWithRows(this.state.cartState)
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.addToCartState != nextProps.addToCartState) {
      this.setState({
        cartState: nextProps.addToCartState,
        dataSource: data.cloneWithRows(nextProps.addToCartState)
      });
    }
  }
  _renderSummary(rowData, sectionId, rowId) {
    console.log("Cart page, rowData is:", { rowData }, typeof rowId, rowId);
    const rowNumber = Number(rowId);
    return rowData.count != 0 ? (
      <View key={rowNumber}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: ResponsiveStyle.FONT_SIZE_TITLE
            }}
          >
            {rowData.name}
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: ResponsiveStyle.FONT_SIZE_TITLE
            }}
          >
            {rowData.count}
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: ResponsiveStyle.FONT_SIZE_TITLE
            }}
          >
            Rs.{rowData.price}{" "}
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: ResponsiveStyle.FONT_SIZE_TITLE
            }}
          >
            = Rs.{rowData.count * rowData.price}
          </Text>
        </View>
      </View>
    ) : null;
  }
  render() {
    console.log("State in render of cart is", this.state.cartState);
    if (this.state.cartState != null) {
      return (
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1 / 8,
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                color: "rgb(17,131,204)",
                fontSize: ResponsiveStyle.FONT_SIZE_TITLE,
                fontWeight: "bold"
              }}
            >
              CART SUMMARY
            </Text>
          </View>
          <View
            style={{
              flex: 1 / 10,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text
              style={{
                color: "rgb(17,131,204)",
                fontSize: ResponsiveStyle.FONT_SIZE_TITLE,
                fontWeight: "bold"
              }}
            >
              ITEM
            </Text>
            <Text
              style={{
                color: "rgb(17,131,204)",
                fontSize: ResponsiveStyle.FONT_SIZE_TITLE,
                fontWeight: "bold"
              }}
            >
              QTY
            </Text>
            <Text
              style={{
                color: "rgb(17,131,204)",
                fontSize: ResponsiveStyle.FONT_SIZE_TITLE,
                fontWeight: "bold"
              }}
            >
              PRICE
            </Text>
            <Text
              style={{
                color: "rgb(17,131,204)",
                fontSize: ResponsiveStyle.FONT_SIZE_TITLE,
                fontWeight: "bold"
              }}
            >
              TOTAL
            </Text>
          </View>
          {/* <View style={{flexDirection:'row',justifyContent:'center',alignItems:'flex-start'}}>
                             <Text style={{color:'rgb(17,131,204)',fontSize:ResponsiveStyle.FONT_SIZE_TITLE,fontWeight:'bold'}}>ITEM{'\t\t\t\t'}QTY{'\t\t'}PRICE{'\t\t'}TOTAL</Text>
                        </View> */}
          <ListView
            dataSource={this.state.dataSource}
            style={{ width: ResponsiveStyle.DEVICE_WIDTH }}
            enableEmptySections={true}
            renderRow={(rowData, sectionId, rowId) =>
              this._renderSummary(rowData, sectionId, rowId)
            }
          />
        </View>
        // <View style={{flex:1,flexDirection:'row',justifyContent:'center',backgroundColor:'white',width:ResponsiveStyle.DEVICE_WIDTH,borderColor:'black'}}>
        //    <View style={{alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
        //    <Text style={{color:'rgb(17,131,204)',fontSize:ResponsiveStyle.FONT_SIZE_TITLE,fontWeight:'bold'}}>CART SUMMARY{'\n'}</Text>
        //             <Text style={{color:'rgb(17,131,204)',fontSize:ResponsiveStyle.FONT_SIZE_TITLE,fontWeight:'bold',alignSelf:'auto'}}>ITEM{'\t\t\t\t'}QTY{'\t\t'}PRICE{'\t\t'}TOTAL</Text>
        //     </View>
        //     <ListView dataSource = {this.state.dataSource}
        //             style={{width:ResponsiveStyle.DEVICE_WIDTH}}
        //             enableEmptySections={true}
        //             renderRow ={(rowData,sectionId,rowId) => this._renderSummary(rowData,sectionId,rowId)}/>
        // </View>
      );
    } else {
      return (
        <View
          style={{ justifyContent: "center", flex: 1, alignSelf: "center" }}
        >
          <Text
            style={{
              color: "rgb(17,131,204)",
              fontSize: ResponsiveStyle.FONT_SIZE_TITLE,
              fontWeight: "bold"
            }}
          >
            {" "}
            Your Cart Is Empty{" "}
          </Text>
        </View>
      );
    }
  }
}
function mapStateToProps(state) {
  console.log("Inside mapStateToProps of UserProfile");
  return {
    addToCartState: state.coffeeShopReducer.addToCartState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    addToCart: () => dispatch(addToCart)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
