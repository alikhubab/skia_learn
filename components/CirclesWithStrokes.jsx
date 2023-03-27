import React from 'react';
import {BlurMask, Circle, Group, Oval, RadialGradient, SweepGradient, vec} from "@shopify/react-native-skia";

const CirclesWithStrokes = (props) => {
    return (
        <>
            <Circle r={15} c={center}>
                <RadialGradient c={vec(center.x + 25, center.y - 10)} r={50} colors={["lightblue", "cyan"]}/>
            </Circle>
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
        </>

    );
}

export default CirclesWithStrokes;
