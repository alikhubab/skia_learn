import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
    BlurMask,
    Canvas,
    Circle,
    Group, Image,
    Oval,
    Paint, Path,
    RadialGradient,
    Rect,
    SweepGradient,
    vec,
    useImage, Skia
} from "@shopify/react-native-skia";
import {useWindowDimensions} from 'react-native';
import {Color} from "@shopify/react-native-skia/lib/module/skia/web/JsiSkColor";
import Effects from "./components/Effects";

export default function App() {
    const {height, width, scale, fontScale} = useWindowDimensions();
    const center = vec(width / 2, height / 2)

    return (
        <Canvas style={{flex: 1,}}>
            <Effects/>
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
