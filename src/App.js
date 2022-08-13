/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React, {useState,useContext} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   TouchableOpacity,
   StyleSheet,
   Text,
   FlatList,
   View,
 } from 'react-native';
 
 import useFetch from './hooks/useFetch';
 import Card from './components/Card/Product/Card';
 import I18n from './translate/i18n';
 import {PracticeContext} from './Context/NewContext';
 import Ionicons from '@expo/vector-icons/FontAwesome';
 import {useNavigation} from '@react-navigation/native';

 const App = () => {
  
  const navigation = useNavigation();

  const {info} = useContext(PracticeContext);

  const {loading,data} = useFetch('https://fakestoreapi.com/products');

  const getcomponent=({item})=>
  <Card prop={item} 
  />; 

  console.log(loading,data)
  return (  
      <SafeAreaView style={styles.body}>

        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <View style={styles.header}>
          <Text style={styles.title}>{I18n.t('Welcome')}</Text>
          <Text style={styles.title2}>{I18n.t('BlaBla Shop')}</Text>
          </View>

          <TouchableOpacity onPress={()=>{navigation.navigate("Basket")}} style={{alignItems:'center',margin:10}}>
            <Text>{info.length}</Text>
            <Ionicons name="shopping-cart" size={32} color="black" onPress={navigation.navigate('Basket')}/>
          </TouchableOpacity>
        
        </View>

          <FlatList
          keyExtractor={(item) => item.id} 
          data={data}
          renderItem={getcomponent}
          />      

      </SafeAreaView>
  );
};
 
 const styles = StyleSheet.create({
   body: {
     backgroundColor:'#C8D9E4',
     flex:1,
   },
   title:{
     fontSize:25,
     fontWeight:'bold',
   },
   title2:{
     fontSize:30,
     color:'#4d9878',
     fontWeight:'bold',
 
   }
 
 });
 
 export default App;
 