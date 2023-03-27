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

export default function App() {
    const {height, width, scale, fontScale} = useWindowDimensions();
    const center = vec(width / 2, height / 2)
    const rct = {x: center.x - 90, y: center.y - 50, width: 180, height: 100}
    const mzd = useImage(require('./assets/mzd.jpg'))
    const star = Skia.Path.MakeFromSVGString(
        "M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z"
    );
    return (
        <Canvas style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            {/*<Path color={"lightblue"}*/}
            {/*      style={"stroke"}*/}
            {/*      strokeWidth={4}*/}
            {/*      strokeJoin={'round'}*/}
            {/*      path="M150 0 L75 200 L225 200 Z"/>*/}

            <Group clip={star}>

                {mzd && <Image image={mzd}
                               x={0}
                               y={0}
                               fit={"cover"}
                               width={256}
                               height={256}/>}

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
