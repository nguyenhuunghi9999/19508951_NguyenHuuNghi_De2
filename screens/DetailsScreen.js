import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';
import NumericInput from "react-native-numeric-input";

const DetailsScreen = ({navigation, route}) => {

    const plant = route.params;
    return (
       <SafeAreaView style ={{flex:1, backgroundColor: "white"}}>
            <View style ={styles.header}>
                <AntDesign name="arrowleft" size={28} color="black" onPress={() => navigation.goBack()} />
                <AntDesign name="shoppingcart" size={28} color="black" />
            </View>
        <View style = {styles.imgContainer}>
            <Image source={plant.img} style ={{resizeMode:"contain", flex:1}} />
            <NumericInput />
        </View>
        <View style ={styles.detailContainer}>
            <View style ={{marginLeft:20, marginTop:20, flexDirection:"row", justifyContent:"space-between", alignItems:'center'}}>
                <Text style ={{fontSize:22, fontWeight:'bold', color:"gray"}}>{plant.name}</Text>
            </View>
            <View >
                    <Text style = {{marginLeft:20, color:"black", fontSize:30, fontWeight:"bold"}}>${plant.price}</Text>
                </View>
            <View style = {{paddingHorizontal:20, marginTop:10}}>
                <Text style ={{fontSize:20, fontWeight: "bold"}}>Color</Text>
                <View style={{flexDirection: "row",justifyContent: "space-between"}}>
                    <View style={{backgroundColor:"orange", height:20, width:20, marginLeftLeft:20}}>
                    </View>
                    <View style={{backgroundColor:"green", height:20, width:20, marginLeftLeft:20}}>
                    </View>
                </View>
                <Text style ={{fontSize:20, fontWeight: "bold"}}>Size</Text>
                <View style={{flexDirection: "row",justifyContent: "space-between"}}>
                    <View style={{backgroundColor:"gray", height:40, width:40, marginLeftLeft:20}}>
                    <Text>XS</Text>
                    </View>
                    <View style={{backgroundColor:"gray", height:40, width:40, marginLeftLeft:20}}>
                    <Text>X</Text>
                    </View>
                    <View style={{backgroundColor:"gray", height:40, width:40, marginLeftLeft:20}}>
                    <Text>M</Text>
                    </View>
                    <View style={{backgroundColor:"gray", height:40, width:40, marginLeftLeft:20}}>
                    <Text>L</Text>
                    </View>
                    <View style={{backgroundColor:"gray", height:40, width:40, marginLeftLeft:20}}>
                    <Text>XL</Text>
                    </View>
                </View>
                <Text style ={{color:"grey", fontSize:14, lineHeight: 22, marginTop:20 }}>{plant.about}</Text>
                <View style ={{marginTop:20, flexDirection:'row',justifyContent:"space-between"}}>
                    <View style = {styles.buyBtn}>
                        <Text style ={{color: 'white', fontSize: 18, fontWeight:'bold' }} >
                            Add to cart
                        </Text>
                    </View>
                </View>
            </View>
        </View>
       </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    imgContainer:{
        flex:0.45,
        flexDirection:"row",
        marginTop: 20,
        justifyContent:'center',
        alignItems:'center'
    },
    detailContainer: {
        flex:0.55,
        backgroundColor: "#F1F1F1",
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 20,
        marginTop : 30,
        paddingTop: 30,
    },
    line: {
        width:25,
        height:2,
        backgroundColor: "black",
        marginBottom:5,
        marginRight:3
    },
    priceTag: {
        backgroundColor: "#f542e3",
        width:80,
        height:40,
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25,
        justifyContent: 'center',
    },
    borderBtn: {
        borderColor: "grey",
        borderWidth:1,
        borderRadius:5,
        height:40,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    borderBtnText: {
        fontWeight: "bold",
        fontSize: 28
    },
    buyBtn: {
        width:"100%",
        height:50,
        backgroundColor: "#f542e3",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }
});

export default DetailsScreen;