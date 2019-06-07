import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    ListView,
  } from 'react-native';
  import {jsonData} from "../itemsList";
  import Styling from "../Styling/Styling";
  import ResponsiveStyle from "../Styling/ResponsiveStyle";
  import NumericInput from 'react-native-numeric-input';
  import { connect } from 'react-redux';
  import {addToCart} from '../actions/coffeeShopActions'
  let cloneState = function(obj){
    return JSON.parse(JSON.stringify(obj))
  }
  var listOfItems = [];
  const data=new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class Menu extends Component{

    constructor(props){
        super(props)
        this.state ={
            currency: 'Rs',
           avlList:jsonData,
           datasource:[],
           countValue:0,
           cartState:null
        }
    }
    componentWillMount(){
        // jsonData.map((data,i)=>
        //     listOfItems.push({"id":data.id,"name":data.name,"price":data.price})
        // )
        console.log("componentWillMount of Menu",this.props.addToCartState,this.props.addToCartState.value)
        if(this.props.addToCartState != null){
            this.setState({
                datasource: data.cloneWithRows(jsonData),
                 cartState:this.props.addToCartState
            })
        }
        else
        {this.setState({
            datasource: data.cloneWithRows(jsonData)
        })
    }
    }
    componentWillReceiveProps(nextProps){
        console.log("nextProps in Menu",nextProps)
        if(this.state.cartState != nextProps.addToCartState){
            this.setState({
                 cartState:nextProps.addToCartState
            })
        }
    }
    sendData(key,value,rowNumber){
        console.log("Inside send data of menu", this.state.cartState)
        let stateCopy = JSON.parse(JSON.stringify(this.state.cartState))
        stateCopy[key].count = value
        this.setState({
            cartState:stateCopy 
            }) 
        console.log("Inside send data of menu after change", this.state.cartState)
        this.props.dispatch(addToCart(this.state.cartState))
    }
    ListRowView(data,sectionId,rowId){
        const rowNumber = Number(rowId);
        console.log("Row data is ",this.props.addToCartState)
            return   (
                        
                        <TouchableHighlight key={rowNumber}
                                    underlayColor='rgb(226,226,226)'
                                    style={Styling.billDetails}
                            >
                            <View style={Styling.billDetails} >
                                
                                <View style={{width:ResponsiveStyle.DEVICE_WIDTH/1.8}}>
                                <Text style={[Styling.bill,{color:'black'}]}>{data.name}</Text>
                                </View>
                                <View style={[Styling.billAmount]}>
                                <Text style={Styling.amount}>{this.state.currency}.{data.price}</Text>
                                </View>
                                {console.log("Cart state in render",this.state.cartState[data.id].count)}
                                <NumericInput 
                                    value={this.state.cartState!= null ?this.state.cartState[data.id].count:0} 
                                    // value={0}
                                    onChange={value => this.sendData(data.id,value,rowNumber)} 
                                    // onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                                    // totalWidth={240} 
                                    // totalHeight={50} 
                                    minValue={0}
                                    iconSize={25}
                                    step={1}
                                    valueType='integer'
                                    rounded={true}
                                    textColor='#B0228C' 
                                    iconStyle={{ color: 'white' }} 
                                    rightButtonBackgroundColor='#EA3788' 
                                    leftButtonBackgroundColor='#E56B70'/>
                                
                            </View>
                        </TouchableHighlight>
        )
       
    }
    render(){
        console.log("Json data ",jsonData,this.state.cartState,this.state.datasource)
        return(

            <View style={{flex:10,alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>

              <ListView dataSource = {this.state.datasource}
                        style={{width:ResponsiveStyle.DEVICE_WIDTH}}
                        enableEmptySections={true}
                        renderRow ={(rowData,sectionId,rowId) => this.ListRowView(rowData,sectionId,rowId)}/>
            </View>
        );
    }

   
}
function mapStateToProps (state) {
    console.log("Inside mapStateToProps of UserProfile");
    return {
        addToCartState: state.coffeeShopReducer.addToCartState,
     }
  }
  function mapDispatchToProps(dispatch) {
    return {
      dispatch,
      addToCart: () => dispatch(addToCart)
      };
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Menu);

