import React from 'react';
import {
    BlurMask,
    Circle,
    Group, Image,
    Oval,
    RadialGradient,
    Skia,
    SweepGradient,
    useImage,
    vec
} from "@shopify/react-native-skia";
import {useWindowDimensions} from "react-native";

const UsingSvg = (props) => {
    const {height, width, scale, fontScale} = useWindowDimensions();
    const center = vec(width / 2, height / 2)
    const rct = {x: center.x - 90, y: center.y - 50, width: 180, height: 100}
    const mzd = useImage(require('./assets/mzd.jpg'))
    const star = Skia.Path.MakeFromSVGString(
        "M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z"
    );
    return (
        <>
            <Group origin={center} style={"stroke"} strokeWidth={10}>

                {mzd && <Image image={mzd}
                               clip={star}
                               x={0}
                               y={0}
                               fit={"contain"}
                               width={200}
                               height={200}
                />}

            </Group>
        </>

    );
}

export default UsingSvg;
