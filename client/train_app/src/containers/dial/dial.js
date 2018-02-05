// @flow

// $FlowFixMe - Flow doesn't know about Fragment yet.
import React, {Component, Fragment} from 'react';

import {circle, fatArc, polarToCartesian, text} from '../../util/svg-util';

import './dial.css';

export type RingType = {
    className: string,
    iconUrl?: string,
    min: number,
    max: number,
    name: string
};

type PropsType = {
    max: number,
    min: number,
    rings: RingType[],
    tickMajor: number,
    tickMinor: number,
    title: string,
    value: number
};

const MAX_ANGLE = -60;
const MIN_ANGLE = 240;
const NEEDLE_LENGTH_PERCENT = 0.69;
const RADIUS = 100;
const RING_WIDTH = 12;

const SIZE = RADIUS * 2 + 6;
const CENTER = {x: SIZE / 2, y: SIZE / 2};

function dialArc({className, label, startAngle, endAngle}) {
    return fatArc({
        center: CENTER,
        className,
        innerRadius: RADIUS - RING_WIDTH,
        label,
        outerRadius: RADIUS,
        startAngle,
        endAngle
    });
}

function tick(value, angle, isMajor) {
    const r1 = RADIUS * 0.86;
    const r2 = RADIUS * (isMajor ? 0.78 : 0.83);
    const r3 = RADIUS * 0.7;
    const p1 = polarToCartesian(CENTER, r1, angle);
    const p2 = polarToCartesian(CENTER, r2, angle);
    const p3 = polarToCartesian(CENTER, r3, angle);
    const d = `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`;

    const label = isMajor
        ? text({text: String(value), center: p3, dy: 3, fill: 'white', fontSize: 8})
        : null;

    //TODO: Why do Fragments require keys when they are stripped out?
    return (
        <Fragment key={`${isMajor ? 'major' : 'minor'}-fragment-${angle}`}>
            <path
                className="tick"
                key={`${isMajor ? 'major' : 'minor'}-tick-${angle}`}
                d={d}
            />
            {label}
        </Fragment>
    );
}

class Dial extends Component<PropsType> {
    anglePerValue = 0;

    dialNeedle = (value: number) => {
        const angle = this.valueToAngle(value);
        const radius = RADIUS * NEEDLE_LENGTH_PERCENT;
        const point = polarToCartesian(CENTER, radius, angle);
        const needleWidth = RADIUS * 0.07;
        const baseLeft = polarToCartesian(CENTER, needleWidth, angle + 90);
        const baseRight = polarToCartesian(CENTER, needleWidth, angle - 90);

        const leftNeedle = `
      M ${point.x} ${point.y}
      L ${baseLeft.x} ${baseLeft.y}
      L ${CENTER.x} ${CENTER.y}
      L ${point.x} ${point.y}
    `;
        const rightNeedle = `
      M ${point.x} ${point.y}
      L ${CENTER.x} ${CENTER.y}
      L ${baseRight.x} ${baseRight.y}
      L ${point.x} ${point.y}
    `;
        return (
            <Fragment>
                <path className="needle-left" d={leftNeedle} />;
                <path className="needle-right" d={rightNeedle} />;
            </Fragment>
        );
    };

    getIcon = () => {
        const {rings, value} = this.props;
        const ring = rings.find(ring => ring.min <= value && value <= ring.max);
        return ring ? <image className="icon" href={ring.iconUrl} /> : null;
    };

    tickMarks = () => {
        const {max, min, tickMajor, tickMinor} = this.props;
        const {anglePerValue} = this;

        const ticks = [];

        let value = min;
        while (value <= max) {
            const angle = MIN_ANGLE + (value - min) * anglePerValue;
            ticks.push(tick(value, angle, false));
            value += tickMinor;
        }

        value = min;
        while (value <= max) {
            const angle = MIN_ANGLE + (value - min) * anglePerValue;
            ticks.push(tick(value, angle, true));
            value += tickMajor;
        }

        return ticks;
    };

    valueToAngle = (value: number) =>
        MIN_ANGLE + (value - this.props.min) * this.anglePerValue;

    render() {
        const {max, min, rings, title, value} = this.props;
        this.anglePerValue = (MAX_ANGLE - MIN_ANGLE) / (max - min);

        const dialRings = rings.map(ring => {
            const startAngle = this.valueToAngle(ring.max);
            const endAngle = this.valueToAngle(ring.min);
            return dialArc({
                className: ring.className,
                label: ring.name,
                startAngle,
                endAngle
            });
        });

        return (
            <svg className="dial">
                <defs>
                    <radialGradient id="bg-gradient">
                        <stop className="stop1" offset="75%" />
                        <stop className="stop2" offset="100%" />
                    </radialGradient>
                </defs>

                {circle({
                    className: 'dial-background',
                    center: CENTER,
                    radius: RADIUS + 1
                })}
                {dialRings}
                {text({className: 'title', text: title})}
                {this.tickMarks()}
                {this.getIcon()}
                {this.dialNeedle(value)}
                {circle({
                    center: CENTER,
                    className: 'dial-button',
                    radius: 8
                })}
            </svg>
        );
    }
}

export default Dial;
