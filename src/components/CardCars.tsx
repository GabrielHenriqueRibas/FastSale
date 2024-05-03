import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Car {
    id: number;
    brand: string;
    model: string;
    year: number;
}

export default function CardCars({ item }: { item: Car }) {
    return (
        <View>
            <Text>{item.id}</Text>
            <Text>{item.model}</Text>
            <Text>{item.year}</Text>
        </View>
    );
}