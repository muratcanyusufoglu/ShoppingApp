import { View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native'
import React,{useContext} from 'react';
import {PracticeContext} from '../../../Context/NewContext'

const Card =({prop}) => {
  
    const {info,addbasket} = useContext(PracticeContext);

  return (

        <TouchableOpacity>
            <View style={styles.container}>

                <Image style={styles.image} source={{uri:prop.image}} />

                <View style={styles.textbar}>

                <View>
                <Text style={styles.title}>{prop.title}</Text>
                </View>
                <TouchableOpacity onPress={()=>addbasket(prop)} style={{backgroundColor:'orange'}}>
                    <Text>ADD BASKETT</Text>
                </TouchableOpacity>

                <View style={styles.bottom}>
                <Text style={styles.category}>{prop.category}</Text>
                <Text style={styles.price}>{prop.price}$</Text>
                </View>

                </View>

            </View>
        </TouchableOpacity>
  );
}

export default Card;

const styles = StyleSheet.create({
    container:{
        flex:1,
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
    }
})