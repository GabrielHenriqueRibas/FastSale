import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Info() {
    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Text style={{fontSize: 24, fontStyle: "italic", alignContent: 'center', textAlign: 'center', marginBottom:10}}>FastSale</Text>
                <Text style={{fontStyle: "italic", alignContent: 'center', textAlign: 'center', marginBottom:10}}>Versão 1.0</Text>
                <Text style={{fontSize: 16,fontStyle: "italic", alignContent: 'center', textAlign: 'center', marginBottom:10}}>Desenvolvido por:</Text>
                <Text style={{fontSize: 24,fontStyle: "italic", alignContent: 'center', textAlign: 'center', marginBottom:10}}>Gabriel Henrique Ribas</Text>
                <Text style={{color: "blue",fontStyle: "italic", alignContent: 'center', textAlign: 'center', marginBottom:10}}>github</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:200
    },
    center: {
        backgroundColor: 'white',
        textAlign: 'center',
        padding: 20,
    },
});
