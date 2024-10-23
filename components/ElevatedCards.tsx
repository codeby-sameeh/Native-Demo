import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingtext}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container} >
        <View style={[styles.card ,styles.ElavatedCards]}>
            <Text>Tap</Text>
        </View> 
        <View style={[styles.card ,styles.ElavatedCards]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card ,styles.ElavatedCards]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card ,styles.ElavatedCards]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card ,styles.ElavatedCards]}>
            <Text>more..</Text>
        </View>
        <View style={[styles.card ,styles.ElavatedCards]}>
            <Text>😊</Text>
        </View>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    headingtext:{
        fontSize: 24.,
        fontWeight: 'bold',
        paddingHorizontal: 20,
     },
     container:{
        padding:8,
     },
     card:{
      height:100,
      width:100,
      justifyContent:'center',
      alignItems:'center',
       borderRadius:5,
       margin:5
     },
     ElavatedCards:{
      backgroundColor:'#cad5e2',
      elevation:4,
     }
})

export default ElevatedCards