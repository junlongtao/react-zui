/**
 * Created by jf on 15/12/10.
 */

"use strict"

import './less/radio.less'
import React from 'react'
import classNames from 'classnames'

class RadioItem extends React.Component {
    static defaultProps = {
        prefix: 'weui-radio',
        onChange: ()=> {
        },
        value: ''
    }

    render = () => {
        const prefix = this.props.prefix
        const cls = this.props.active ? 'active' : ''
        return <div className={prefix+'-item cursor '+cls} onClick={()=>{
            this.props.onChange(this.props.value)
        }}>
            <span className="circle"><i className="inner"></i></span>
            {this.props.children}
        </div>
    }
}

class Radio extends React.Component {
    static defaultProps = {
        children: [],
        prefix: 'weui',
        value: ''
    }

    render = () => {
        const prefix = this.props.prefix
        const value = this.props.value || this.props.children[0].props.value
        return <div className={prefix+'-radio clear'}>
            {this.props.children.map((item, key)=> {
                const active = value === item.props.value ? true : false
                return <Radio.Item key={key}
                                   active={active}
                                   value={item.props.value}
                                   onChange={this.props.onChange}>
                    {item.props.children}
                </Radio.Item>
            })}
        </div>
    }
}

Radio.Item = RadioItem
export default Radio