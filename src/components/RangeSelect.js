/**
 * 范围下拉列表组件
 */
"use strict"
import './less/range_select.less'
import React from 'react'
import classNames from '../utils/classnames'

export default class RangeSelect extends React.Component {
    static propTypes = {
        min: React.PropTypes.number,
        valueMin: React.PropTypes.number,
        max: React.PropTypes.number,
        valueMax: React.PropTypes.number,
        step: React.PropTypes.number,
        onChange: React.PropTypes.func
    }
    state = {
        valueMin: 0,
        valueMax: 0,
    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({
            valueMin: nextProps.valueMin,
            valueMax: nextProps.valueMax,
        })
    }
    onValueMinChange = (e) => {
        const valueMin = parseInt(e.target.value)
        let valueMax =0
        if (valueMin >= parseInt(this.state.valueMax)) {
            if (valueMin + this.props.step > this.props.max) {
                valueMax = this.props.max
            }else {
                valueMax = valueMin + this.props.step
            }
        }else {
            valueMax = this.state.valueMax
        }
        this.setState({
            valueMin: valueMin,
            valueMax: valueMax
        })
        this.props.onChange(valueMin, valueMax)
    }
    onValueMaxChange = (e) => {
        const valueMax = parseInt(e.target.value)
        let valueMin = 0
        if (parseInt(this.state.valueMin) >= valueMax) {
            if (valueMax - this.props.step < this.props.min) {
                valueMin = this.props.min
            }else {
                valueMin = valueMax - this.props.step
            }
        }else {
            valueMin = this.state.valueMin
        }
        this.setState({
            valueMin: valueMin,
            valueMax: valueMax
        })
        this.props.onChange(valueMin, valueMax)
    }
    renderMinOptions = () => {
        const min = this.props.min
        const max = this.props.max
        const step = this.props.step
        let options = []
        for (let i = min; i < max; i += step) {
            options.push(<option key={i} value={i}>{i}</option>)
        }
        return options;
    }
    renderMaxOptions = () => {
        const min = this.props.min
        const max = this.props.max
        const step = this.props.step
        let options = []
        for (let i = min+step; i < max; i += step) {
            options.push(<option key={i} value={i}>{i}</option>)
        }
        options.push(<option key={max}>{max}</option>)
        return options;
    }
    render() {
        const {className, children, ...others} = this.props
        const cls = classNames({
            weui_range_select: true,
            [className]: className
        });
        const unit = this.props.unit ? <span className="unit">{this.props.unit}</span> : null
        return <div className={cls}>
            <select onChange={this.onValueMinChange} value={this.state.valueMin} dir="rtl"
                    className="min">
                {this.renderMinOptions()}
            </select>
            <span className="symbol">~</span>
            <select onChange={this.onValueMaxChange} value={this.state.valueMax} dir="rtl"
                    className="max">
                {this.renderMaxOptions()}
            </select>
            {unit}
        </div>
    }
};
