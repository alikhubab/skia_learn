import React, {useEffect, useState} from 'react';
import {Text, useWindowDimensions} from "react-native";
import {
    BlurMask,
    Circle, DashPathEffect,
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
    const [interval, setInterval] = useState([1, 1])


    function updateStateWithDelay(delay, value) {
        setTimeout(() => {
            setInterval(prevState => [prevState[0] + value, prevState[1] + value])
        }, delay)
    }

    function updateInterval() {
        for (let i = 0; i < 1000; i++) {
            const delay = 200 + i * 2;
            updateStateWithDelay(delay, 2)
        }
    }

    const setIntervalFunc = () => {
        setTimeout(() => {
            console.log("Set Interval is called")
            setInterval(prevState => [prevState[0] + 1, prevState[1] + 1])
        },)
    }
    useEffect(() => {
        updateInterval();
    }, [])

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
                {/*<DiscretePathEffect length={12} deviation={5}/>*/}
                <DashPathEffect intervals={interval}/>
            </Group>
        </>
    )
};

export default Effects;
