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
                        uri: 'https://plus.unsplash.com/premium_photo-1697730429201-381b71f61427?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2F0ZXdheSUyMG9mJTIwaW5kaWElMjBtdW1iYWklMjBtdW1iYWklMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D'
                    }}
                    style={styles.CardImage}
                />
                <View style={styles.CardBody}>
                    <Text style={styles.CardTittle}>India Gate</Text>
                    <Text style={styles.CardLabel}> All India War Memorial
                    </Text>
                    <Text style={styles.CardDiscription}>The India Gate (formerly known as All India War Memorial) is a war memorial located near the Rajpath (officially called Kartavya path) on the eastern edge of the.</Text>
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
