import { View,
     Text ,
    StyleSheet} from 'react-native'
import React from 'react'

const FlatCards = ():JSX.Element => {
  return (
    <View>
      <Text style={styles.headingtext}>Flat Cards</Text>
      <View style={styles.Conteiner}>
      <View style={[styles.Card, styles.CardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.Card, styles.CardTwo]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.Card, styles.CardThree]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.Card, styles.CardFour]}>
            <Text>Green</Text>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    headingtext:{
       fontSize: 24.,
       fontWeight: 'bold',
       paddingHorizontal: 20,

    },
    Conteiner:{
     flex: 1,
     flexDirection: 'row',

    },
    Card:{
        alignItems:'center',
        justifyContent:'center',
        height:100,
        width:'20%',
        borderRadius:4,
        margin:10,
    },
    CardOne:{
        backgroundColor: '#ef5354'
    }, 
     CardTwo:{
        backgroundColor: '#50dbb4'
    },
      CardThree:{
        backgroundColor: '#5da3fa'
    },
    CardFour:{
      backgroundColor: '#5da654'
  },
})
 
export default FlatCards