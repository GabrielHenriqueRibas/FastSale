// Header.js
import React from "react";
import { Entypo } from '@expo/vector-icons';
import { connectActionSheet, useActionSheet} from "@expo/react-native-action-sheet";
import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

function Header() {
    const { showActionSheetWithOptions } = useActionSheet();

    const onPress = () => {
        const options = ['Sobre', 'Logout' ];
        const destructiveButtonIndex = 1;
        const cancelButtonIndex = 2;
    
        showActionSheetWithOptions({
            options,
            cancelButtonIndex,
            destructiveButtonIndex,
         },(selectedIndex) => {
                switch (selectedIndex) {
                    case 0:
                      router.push("./Sobre")
                      break;
            
                    case destructiveButtonIndex:
                        
                      router.back()
                      break;
                  }});
        }

    return (
        <View style={styles.header}> 
            <Text style={styles.text}>FastSale</Text>
            <Entypo name="menu" size={24} color="white" onPress={onPress}/>
        </View>
    );
}

const conectApp = connectActionSheet(Header)

export default conectApp;

const styles = StyleSheet.create({
    text:{
        color: "white",
        fontStyle:"italic",
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "black",
        paddingHorizontal: 16,
        height: 60
      },
});
