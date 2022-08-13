import { View, Text, ScrollView,StyleSheet,Image, TouchableOpacity } from 'react-native'
import React,{useContext} from 'react';
import {PracticeContext} from '../../../Context/NewContext'



const ShoppingCard =() => {

  const {info,addbasket,deleteBasket} = useContext(PracticeContext);

  const totalPrice = info.reduce((a,c)=> a + Number(c.price) * c.qty,0)

  return (
        <ScrollView>
            {info.map(item => 
                <View style={styles.container}>
                
                <Image style={styles.image} source={{uri:item.image}} />

                <View style={styles.textbar}>

                <View>
                <Text style={styles.title}>{item.title}</Text>
                </View>
                {/* <TouchableOpacity onPress={()=>addbasket(item)} style={{backgroundColor:'orange'}}>
                    <Text>ADD BASKET</Text>
                </TouchableOpacity> */}

                <View style={styles.bottom}>

                <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={styles.button2} onPress={()=>deleteBasket(item)}>
                <Text>-</Text>
                </TouchableOpacity>

                <Text style={{marginHorizontal:10}}>{item.qty}</Text>

                <TouchableOpacity style={styles.button} onPress={()=> addbasket(item)}>
                <Text>+</Text>
                </TouchableOpacity>
                </View>

                <Text style={styles.price}>{item.price}$</Text>
                </View>

                </View>
            
            </View>    
            )}
            <View style={{alignItems:'center'}}>
            <Text>Total:{totalPrice}</Text>
            </View>
        </ScrollView>
  );
}

export default ShoppingCard;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgrounColor:'#f8f9fa',
        margin:10,
        borderWidth:1,
        borderRadius:15,

    },
    image:{
        width:100,
        height:100,
        resizeMode:'contain',
        borderRadius:15
    },
    textbar:{
        flex:2,
        marginLeft:5,
        justifyContent:'space-between',
        marginLeft:10,
    },
    bottom:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    title:{
        fontSize:15,
        textAlign:'auto',
        fontWeight:'500'
    },
    category:{
        textAlign:'left'
    },
    price:{
        textAlign:'right',
        marginRight:5,
    },
    button: {
        height:25,
        width:25,
        backgroundColor:'#83c5be',
        alignItems:'center',
        justifyContent:'center',
    },
    button2: {
        height:25,
        width:25,
        backgroundColor:'#e85d04',
        alignItems:'center',
        justifyContent:'center',
    }
})