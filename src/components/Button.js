/**
 * 按钮组件
 */
"use strict"
import '../style/widget/weui_button/weui_button.less';
import React from 'react';

export default class Button extends React.Component {
    static defaultProps = {
        disabled: false,
        type: 'primary',
        size: 'normal',
        padding: ''
    }

    componentDidMount = () => {
        var opacityCurve11 = mojs.easing.path('M0,0 C0,87 27,100 40,100 L40,0 L100,0');
        var scaleCurve11 = mojs.easing.path('M0,0c0,80,39.2,100,39.2,100L40-100c0,0-0.7,106,60,106');
        const el = this.refs.buttonElement
        this.timeline = new mojs.Timeline()
        this.tweens = [
            // ring animation
            new mojs.Shape({
                parent: el,
                radius: {0: 95},
                fill: 'transparent',
                stroke: '#C0C1C3',
                strokeWidth: {10: 0},
                opacity: 0.4,
                duration: 1000,
                delay: 100,
                easing: mojs.easing.bezier(0, 1, 0.5, 1)
            }),
            // ring animation
            new mojs.Shape({
                parent: el,
                radius: {0: 80},
                fill: 'transparent',
                stroke: '#C0C1C3',
                strokeWidth: {20: 0},
                opacity: 0.2,
                duration: 1800,
                delay: 300,
                easing: mojs.easing.bezier(0, 1, 0.5, 1)
            })
        ]
        this.tweens.map((item, key)=> {
            this.timeline.add(item)
        })
    }

    onClick = (e) => {
        this.timeline && this.timeline.replay()

        if (this.props.href) {
            if (this.props.href.indexOf('tel:') === -1) {
                location.assign(this.props.href)
            }
            return false
        }
        this.props.onClick && this.props.onClick(e)
    }

    render = () => {
        const {type, size, plain, className, children, disabled, padding, position, ...others} = this.props;
        const Component = this.props.href ? 'a' : 'button';
        const cls = classNames({
            weui_btn: true,
            cursor: true,

            weui_btn_primary: type === 'primary' && !plain,
            weui_btn_default: type === 'default' && !plain,
            weui_btn_warn: type === 'warn',
            weui_btn_disabled: disabled,

            weui_btn_plain_primary: type === 'primary' && plain,

            weui_btn_plain_default: type === 'default' && plain,

            weui_btn_mini: size === 'small',
            weui_btn_bottom: position === 'bottom',
        });
        if (padding) {
            return <div style={{'padding':this.props.padding}}>
                <Component ref="buttonElement" {...others} className={cls} onClick={this.onClick}>
                    {children}
                </Component>
            </div>
        } else {
            return <Component ref="buttonElement" {...others} className={cls} onClick={this.onClick}>
                {children}
            </Component>;
        }
    }
};
