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
        </View>
        <View style ={styles.detailContainer}>
            <View style ={{marginLeft: 20, flexDirection: "row", alignItems: "flex-end"}}>
                <View style ={styles.line}/>
                <Text style ={{fontSize: 18, fontWeight:'bold'}}>Best Choice</Text>
            </View>
            <View style ={{marginLeft:20, marginTop:20, flexDirection:"row", justifyContent:"space-between", alignItems:'center'}}>
                <Text style ={{fontSize:22, fontWeight:'bold'}}>{plant.name}</Text>
                <View style = {styles.priceTag}>
                    <Text style = {{marginLeft:15, color:"white", fontSize:16, fontWeight:"bold"}}>{plant.price}$</Text>
                </View>
            </View>
            <View style = {{paddingHorizontal:20, marginTop:10}}>
                <Text style ={{fontSize:20, fontWeight: "bold"}}>About</Text>
                <Text style ={{color:"grey", fontSize:14, lineHeight: 22, marginTop:20 }}>{plant.about}</Text>
                <View style ={{marginTop:20, flexDirection:'row',justifyContent:"space-between"}}>
                    <View style ={{flexDirection: "row", alignItems :'center'}}>
                        {/* <View style = {styles.borderBtn}>
                            <Text style ={styles.borderBtnText}>-</Text>
                        </View>
                        <Text style = {{fontSize: 20, marginHorizontal:10,fontWeight: 'bold'}}>1</Text>
                        <View style = {styles.borderBtn}>
                            <Text style ={styles.borderBtnText}>+</Text>
                        </View> */}
                        <NumericInput />
                    </View>
                    <View style = {styles.buyBtn}>
                        <Text style ={{color: 'white', fontSize: 18, fontWeight:'bold' }} >
                            Buy
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
        backgroundColor: "green",
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
        width:150,
        height:50,
        backgroundColor: "green",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }
});

export default DetailsScreen;