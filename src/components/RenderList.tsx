import React from "react";
import { SafeAreaView, ScrollView, SectionList, StyleSheet, Text, View } from "react-native";
import data from "../service/data";
import convertData from "../helpers/covertData";

export default function RenderList() {
    return(
        <SafeAreaView style={styles.teste}>
            <SectionList
                sections={convertData(data)}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.container}>
                        <Text style={styles.text}>{item.id}</Text>
                        <Text style={styles.text}>{item.model}</Text>
                        <Text style={styles.text}>{item.year}</Text>
                    </View>
                    </ScrollView>
                  )}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.title}>{section.title}</Text>
                )}
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    teste:{
        margin:10
    },
    title:{
        alignContent:"center",
        textAlign: "center",
        fontWeight:"bold",
        borderTopRightRadius:20,
        padding:20,
        backgroundColor: "#666666",
    },
    scrollViewContent: {
        flexGrow: 1,
      },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10
    },
    text: {
        marginHorizontal: 5,
    },
  });