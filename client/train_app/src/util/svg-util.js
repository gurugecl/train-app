// @flow

// $FlowFixMe - Flow doesn't know about Fragment yet.
import React, {Fragment} from 'react';

const DEGREES_TO_RADIANS = Math.PI / 180;

export type PointType = {
    x: number,
    y: number
};

type ArcOptionsType = {
    center: PointType,
    clockwise?: boolean,
    endAngle: number,
    radius: number,
    startAngle: number,
    stroke?: string,
    strokeWidth?: number
};

type CircleOptionsType = {
    center: PointType,
    className?: string,
    fill?: string,
    radius: number,
    stroke?: string,
    strokeWidth?: number
};

type FatArcOptionsType = {
    center: PointType,
    className?: string,
    clockwise?: boolean,
    endAngle: number,
    fill?: string,
    innerRadius: number,
    label?: string,
    outerRadius: number,
    startAngle: number,
    stroke?: string,
    strokeWidth?: number
};

type RectOptionsType = {
    fill?: string,
    height: number,
    stroke?: string,
    strokeWidth?: number,
    width: number,
    x: number,
    y: number
};

type TextOptionsType = {
    center?: PointType,
    className?: string,
    dx?: number,
    dy?: number,
    fill?: string,
    fontFamily?: string,
    fontSize?: number,
    stroke?: string,
    text: string,
    transform?: string
};

export function arcPath(descriptor: ArcOptionsType) {
    const {stroke = 'red', strokeWidth = 1} = descriptor;
    const d = arc(descriptor);
    return (
        <path d={d} fill="transparent" stroke={stroke} strokeWidth={strokeWidth} />
    );
}

// This assumes already positioned at start.x, start.y.
export function arc(descriptor: ArcOptionsType) {
    const {center, radius, startAngle, endAngle, clockwise = false} = descriptor;
    let start = polarToCartesian(center, radius, startAngle);
    let end = polarToCartesian(center, radius, endAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
    if (clockwise) [start, end] = [end, start]; // swaps values
    return [
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        clockwise ? 1 : 0,
        end.x,
        end.y
    ].join(' ');
}

export function circle(descriptor: CircleOptionsType) {
    const {
        center,
        className,
        fill = 'black',
        radius = 1,
        stroke = 'none',
        strokeWidth = 0
    } = descriptor;
    return (
        <circle
            className={className}
            cx={center.x}
            cy={center.y}
            r={radius}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
        />
    );
}

export function fatArc(descriptor: FatArcOptionsType) {
    const {
        center,
        className,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill = 'transparent',
        label,
        stroke = 'none',
        strokeWidth = 1
    } = descriptor;
    const d = fatArcPath({
        center,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle
    });

    let labelText = null;
    if (label) {
        const radius = (innerRadius + outerRadius) / 2;
        const angle = (startAngle + endAngle) / 2;
        const labelLoc = polarToCartesian(center, radius, angle);
        const transform = `rotate(${90 - angle} ${labelLoc.x} ${labelLoc.y})`;
        const deltaAngle = endAngle - startAngle;
        if (deltaAngle >= 25) {
            labelText = text({
                center: labelLoc,
                dy: 4,
                fontSize: 10,
                text: label,
                transform
            });
        }
    }

    return (
        <Fragment key={label}>
            <path
                className={className}
                d={d}
                fill={fill}
                stroke={stroke}
                strokeWidth={strokeWidth}
            />
            {labelText}
        </Fragment>
    );
}

export function fatArcPath(descriptor: FatArcOptionsType) {
    const {center, innerRadius, outerRadius, startAngle, endAngle} = descriptor;
    const innerStart = polarToCartesian(center, innerRadius, endAngle);
    const outerStart = polarToCartesian(center, outerRadius, startAngle);
    const innerArc = arc({
        center,
        radius: innerRadius,
        endAngle,
        startAngle,
        clockwise: true
    });
    const outerArc = arc({
        center,
        radius: outerRadius,
        startAngle,
        endAngle
    });
    return `
    ${move(innerStart)}
    ${innerArc}
    ${line(outerStart)}
    ${outerArc}
    ${line(innerStart)}
  `;
}

export const line = (point: PointType) => `L ${point.x} ${point.y}`;

export const move = (point: PointType) => `M ${point.x} ${point.y}`;

export function polarToCartesian(
    center: PointType,
    radius: number,
    angleInDegrees: number
): PointType {
    const angleInRadians = angleInDegrees * DEGREES_TO_RADIANS;
    return {
        x: center.x + radius * Math.cos(angleInRadians),
        y: center.y - radius * Math.sin(angleInRadians)
    };
}

export function rect(descriptor: RectOptionsType) {
    const {
        x,
        y,
        width,
        height,
        fill = 'transparent',
        stroke = 'black',
        strokeWidth = 1
    } = descriptor;
    return (
        <rect
            x={x}
            y={y}
            width={width}
            height={height}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
        />
    );
}

export function text(descriptor: TextOptionsType) {
    const {
        center,
        className,
        dx = 0,
        dy = 0,
        fill = 'black',
        fontFamily = '',
        fontSize = '',
        stroke = 'none',
        text = '',
        transform = ''
    } = descriptor;
    const props = center ? {...center} : {};
    if (transform) props.transform = transform;
    return (
        <text
            className={className}
            dx={dx}
            dy={dy}
            fill={fill}
            fontFamily={fontFamily}
            fontSize={fontSize}
            stroke={stroke}
            textAnchor="middle"
            {...props}
        >
            {text}
        </text>
    );
}
