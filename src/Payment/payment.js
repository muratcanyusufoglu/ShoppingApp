// import { View, Text,Button } from 'react-native'
// import React from 'react'
// import { useDispatch, useSelector} from 'react-redux';
// import {increaseNumber} from '../redux/actions/numberAction';
// import {decreaseNumber} from '../redux/actions/numberAction';


// export default function payment() {

//     const dispatch = useDispatch();

//     //const counter = useSelector((state)=>state.counter);
    
//     //console.log('counter',counter)
//   return (
//     <View>
//       <Button title="Increase" onPress={()=>dispatch(increaseNumber())}/>
//       <Text></Text>
//       <Button title="Decrease" onPress={()=>dispatch(decreaseNumber())}/>

//     </View>
//   )
// }


import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {StripeProvider, CardField} from '@stripe/stripe-react-native'

export default function payment() {
  return (
    <StripeProvider
    publishableKey="key"
    merchanIdentifier=""
    >
      <StripeTest></StripeTest>
    </StripeProvider>
  )
}

function StripeTest(){

    return(
    <View>
        <CardField
        style={{width:'100%',height:100}}
        />
        <TouchableOpacity style={{height:30, width:'80%',alignItems:'center'}}>
            <Text>Pay Now</Text>
        </TouchableOpacity>
    </View>
    )
}