import { ActionSheetProvider } from "@expo/react-native-action-sheet"
import React from "react"
import Header from "../components/Header";
import { View } from "react-native";
import Info from "../components/Info";

export default function Sobre() {
    return (
        <ActionSheetProvider>
            <View>
                <Header></Header>
                <Info></Info>
            </View>
        </ActionSheetProvider>
        
    )
}