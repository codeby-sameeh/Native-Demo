import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import ElevatedCards from './ElevatedCards'

const FancyCards = () => {
    return (
        <View>
            <Text style={styles.headingtext}>Trendig Places</Text>
            <View style={[styles.Card, styles.ElevatedCard]}>
                <Image
                    source={{
                        uri: 'https://images.pexels.com/photos/29002477/pexels-photo-29002477/free-photo-of-hawa-mahal-palace-of-winds-in-jaipur-india.jpeg?auto=compress&cs=tinysrgb&w=800'
                    }}
                    style={styles.CardImage}
                />
                <View style={styles.CardBody}>
                    <Text style={styles.CardTittle}>Hawa Mahal</Text>
                    <Text style={styles.CardLabel}>Pink City
                        Jaipur
                    </Text>
                    <Text style={styles.CardDiscription}>The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingtext: {
        fontSize: 22.,
        fontWeight: 'bold',
        paddingHorizontal: 20,
    },
    Card: {
        width:370,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:19,
    },
    ElevatedCard: {
        backgroundColor:'#EAF0F1'
    },
    CardImage: {
        height: 180,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
        // marginBottom:1,
    },
    CardBody: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:6,
    },
    CardTittle: {
        fontSize:23,
        fontWeight:'bold'
    },
    CardLabel: {
        fontSize:15,
        fontFamily:'sans-serif-light',
        marginTop:3,
    },
    CardDiscription: {
        color:'#2B2B52',
        textAlign:'center'
    },
})

export default FancyCards;
