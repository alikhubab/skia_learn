import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
    BlurMask,
    Canvas,
    Circle,
    Group,
    Oval,
    Paint,
    RadialGradient,
    Rect,
    SweepGradient,
    vec
} from "@shopify/react-native-skia";
import {useWindowDimensions} from 'react-native';

export default function App() {
    const {height, width, scale, fontScale} = useWindowDimensions();
    const center = vec(width / 2, height / 2)
    const rct = {x: center.x - 90, y: center.y - 50, width: 180, height: 100}
    return (
        <Canvas style={{flex: 1}}>
            <Circle r={15} c={center}>
                <RadialGradient c={vec(center.x + 25, center.y - 10)} r={50} colors={["lightblue", "cyan"]}/>
            </Circle>
            {/*<Paint style={"stroke"} strokeWidth={18}>*/}
            {/*    <SweepGradient c={vec(128, 128)} colors={["blue", 'red', 'blue']}/>*/}
            {/*</Paint>*/}
            <Group color={"lightblue"} style={"stroke"} strokeWidth={10}>
                <Oval rect={rct}/>
                <Group transform={[{rotate: Math.PI / 3}, {scale: -1}]} origin={center}>
                    <Oval rect={rct}/>
                </Group>
                <Group transform={[{rotate: -Math.PI / 3}, {scale: -1}]} origin={center}>
                    <Oval rect={rct}/>
                </Group>
                <SweepGradient
                    c={vec(100, 100)}
                    colors={["cyan", "magenta", "yellow",]}
                />
                <BlurMask blur={5} style={"inner"}/>
            </Group>
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
