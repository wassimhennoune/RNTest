import React from 'react';
import { View, Image, Text, Button } from 'react-native';


export default function MyCard(props) {


  return (

    <View style={{ flex: 1, flexDirection: props.rtl? 'row' : 'row-reverse',margin:10,padding:10,borderWidth:0.5,borderColor:'#444'}}>
      <View style={{ flex: 1 }}>
        <Image source={props.img} style={{width:100,height:100,marginHorizontal:10}} />
      </View>
      <View style={{ flex: 2,justifyContent:'space-between' }}>
        <Text>{props.txt}</Text>
        <Button title='preess me' onPress={() => props.action()} />
      </View>
    </View>

  );
}
