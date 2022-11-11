import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions, Image} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons, Entypo, Feather } from '@expo/vector-icons'; 
import { TextInput } from "react-native-gesture-handler";
import plants from "../consts/plants";

const width = Dimensions.get('screen').width/2-30;

const HomeScreen = ({navigation}) => {

    const categories = ['ALL', 'MEN', 'WOMEN', 'KIDS'];

    const [categoryIndex, setCategoryIndex] = useState(0);

    const CategoryList = () => {
        return (
            <View style = {styles.categoryContainer}>
            {categories.map((item, index) => (
                <TouchableOpacity 
                    key={index} 
                    activeOpacity ={0.8}
                    onPress={() => setCategoryIndex(index)}>
                    <Text style ={[styles.categoryText, categoryIndex == index && styles.categoryTextSelected]}>
                    {item}
                    </Text>
                </TouchableOpacity>
                
            ))}
        </View>
        );   
    };

    const Card = ({plant}) => {
        return ( 
        <TouchableOpacity onPress={() => navigation.navigate("Details", plant)}>
        <View style = {styles.card}>
            <View style ={{height: 100, alignItems: "center"}}>
                    <Image style={{flex:1, resizeMode:'contain'}} 
                    source={plant.img} />
            </View>
            <Text style = {{fontWeight:'bold', fontSize:12,marginTop: 10 }}>
                {plant.name}
            </Text>
            <View style ={{flexDirection: "row", justifyContent:"space-between", marginTop:5}}>
                <Text style ={{fontSize:19, fontWeight:"bold"}}>{plant.price}$</Text>
            </View>
        </View>
        </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style = {{flex:1, paddingHorizontal:20, backgroundColor:"white"}}>
            <View style={styles.header}>
                <Entypo name="menu" size={24} color="black" />
                <Feather name="search" size={24} color="black" />
            </View>
            <CategoryList />
            <FlatList 
                columnWrapperStyle = {{justifyContent: "space-between"}}
                showsVerticalScrollIndicator = {false}
                contentContainerStyle ={{
                    marginTop:10, 
                    paddingBottom :50
                }}
                numColumns={2} 
                data = {plants} 
                renderItem={({item}) => {
                    return <Card plant={item} />;
                }} />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    header: {
        marginTop:30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchContainer:{
        height: 50,
        backgroundColor: "#F1F1F1",
        borderWidth:1,
        borderRadius: 10,
        flex:1,
        flexDirection:"row",
        alignItems: "center"
    },
    input: {
        fontSize: 18,
        fontWeight:'bold',
        color:"dark",
        flex:1
    },
    searchButton:{
        marginLeft: 10,
        height:50,
        width: 50,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    categoryContainer:{
        flexDirection: 'row',
        marginTop: 30,
        marginBottom:20,
        justifyContent: "space-between"

    },
    categoryText:{
        fontSize:16,
        color:'grey',
        fontWeight:'bold'
    },
    categoryTextSelected:{
        color:"green",
        paddingBottom:5,
        borderBottomWidth:2,
        borderColor: "green"

    },
    card: {
        height:225,
        backgroundColor: '#F1F1F1',
        width,
        marginHorizontal: 2,
        borderRadius:10,
        marginBottom:20,
        padding:15
    }
});

export default HomeScreen;

