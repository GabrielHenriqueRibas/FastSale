import { Link, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export default function InputLogin() {

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");


    const handlePress = () => {username == "teste" && password =="123"}
    
    return (
        <View>
            <TextInput style={styles.input}
                placeholder="Username"
                placeholderTextColor="#3c3c3c"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput style={styles.input}
                placeholder="password"
                placeholderTextColor="#3c3c3c"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <Link href={'./home'}>
                <Image
                    style={styles.login}
                    source={require("../../assets/img/login.png")}
                />
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    input:{
        height: 10,
        margin: 10,
        padding: 15,
        borderRadius: 40 ,
        backgroundColor: '#F0F0F0',
        borderColor: "red",
        marginLeft:75,
        marginRight:75,
        fontSize: 12  
    },
    login: {
        width: 150,
        height: 50,
        marginLeft: 150,
        marginRight: 150,
        marginTop: 50,
        marginBottom: 70,
      },
  });