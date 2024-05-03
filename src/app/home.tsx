// Home.js
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import RenderList from "../components/RenderList";
import Header from "../components/Header";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

export default function Home() {
    return (
      <ActionSheetProvider>
      <ScrollView>
        <View style={styles.valor}>
          <Header/>
          <View>
              <Text style={styles.title}>Carros a Venda</Text>
                  <View style={styles.container}>
                      <RenderList/> 
                  </View>
          </View>
        </View>
      </ScrollView>
      </ActionSheetProvider>
    );
}

const styles = StyleSheet.create({
  valor: {
    flex: 1,
  },
  container: {
    margin:20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:50,
    marginBottom:20,
    marginLeft:150,
    marginRight:150
  },
});
