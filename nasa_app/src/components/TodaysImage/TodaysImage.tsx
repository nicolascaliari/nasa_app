import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from "react-native"
import { PostImage , RootStackParams} from "../../types";
import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack'

type PostImageNavigationProps = StackNavigationProp<RootStackParams, 'Detail'>


const TodaysImage: FC<PostImage> = ({ date, title, url, explanation }) => {
    const { navigate } = useNavigation<PostImageNavigationProps>();
    const handleViewPress = () => {
        navigate('Detail' , { title, date, url, explanation } )
    }


    return (
        <View style={styles.container}>
            <Image source={{ uri: url }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                <Button title="View" color='transparent' onPress={handleViewPress} />
            </View>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2c449d',
        marginVertical: 18,
        marginHorizontal: 24,
        borderRadius: 32,
        padding: 16,

    },
    image: {
        width: '100%',
        borderRadius: 32,
        height: 190,
        borderWidth: 2,
        borderColor: '#fff',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        marginVertical: 12,
        fontWeight: 'bold'
    },
    date: {
        color: '#fff',
        fontSize: 16,
        marginVertical: 12,
        fontWeight: 'bold'
    },
    buttonContainer: {
        alignItems: 'flex-end'
    }
})


export default TodaysImage;