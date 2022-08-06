import { View, Text, ScrollView,StyleSheet,Image } from 'react-native'
import React,{useContext} from 'react';
import {PracticeContext} from '../../../Context/NewContext'

const Card =() => {

  const {info,addbasket} = useContext(PracticeContext);

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
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.price}>{item.price}$</Text>
            </View>

            </View>
        
        </View>    
        )}

    </ScrollView>
  );
}

export default Card;

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
    }
})