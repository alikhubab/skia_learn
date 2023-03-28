import React from 'react';
import {Text, useWindowDimensions} from "react-native";
import {
    BlurMask,
    Circle,
    DiscretePathEffect,
    Group,
    Oval,
    RadialGradient,
    SweepGradient,
    vec
} from "@shopify/react-native-skia";

const Effects = (props) => {
    const {height, width, scale, fontScale} = useWindowDimensions();
    const center = vec(width / 2, height / 2)
    const rct = {x: center.x - 90, y: center.y - 50, width: 180, height: 100}


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
                <DiscretePathEffect length={12} deviation={5}/>
            </Group>
        </>
    )
};

export default Effects;
