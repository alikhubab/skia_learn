import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Canvas, Circle, Oval} from "@shopify/react-native-skia";
import {useWindowDimensions} from 'react-native';

export default function App() {
    const {height, width, scale, fontScale} = useWindowDimensions();
    const center = {x: width / 2, y: height / 2}
    const rct = {x: center.x - 90, y: center.y - 50, width: 180, height: 100}
    return (
        <Canvas style={{flex: 1}}>
            <Circle r={25} color={"lightblue"} c={center}/>
            <Oval rect={rct} color="lightblue" style="stroke" strokeWidth={18}/>
        </Canvas>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
