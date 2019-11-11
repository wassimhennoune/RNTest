import React from 'react';
import { StyleSheet, Button, View } from 'react-native';


//My components
import MyList from './src/components/MyList'

export default class App extends React.Component {

  //state, where to store data because the API is inexistant
  state = {
    rtl:false,
    data: [
      {
        img: require("./assets/icon.png"),
        txt: "this is first product",
        action: () => {
          alert("action for first element")
        }
      }, {
        img: require("./assets/icon.png"),
        txt: "this is second product",
        action: () => {
          alert("action for second element")
        }
      }, {
        img: require("./assets/icon.png"),
        txt: "this is third product",
        action: () => {
          alert("action for third element")
        }
      }, {
        img: require("./assets/icon.png"),
        txt: "this is fourth product",
        action: () => {
          alert("action for fourth element")
        }
      }, {
        img: require("./assets/icon.png"),
        txt: "this is fifth product",
        action: () => {
          alert("action for fifth element")
        }
      },
    ]
  }

 
   addElements=()=>{
    let newElement = {
      img: require("./assets/icon.png"),
      txt: "i'm new",
      action: () => {
        alert("i'm new")
      }
    }
    let data = this.state.data
    data.push(newElement)
    this.setState({data}) 
    alert("added a new element") 
  }

   pullRefresh =()=>{
    alert("pull Refresh, get Data")
  }

render(){
  return (
    <View style={styles.container}>
      <Button title="switch language" onPress={()=>this.setState({rtl:!this.state.rtl})}/>
      <MyList data={this.state.data}
      onEndReached={this.addElements}
      pullRefresh={this.pullRefresh}
      rtl={this.state.rtl}/>
    </View>
  )}
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:32
  },
});
