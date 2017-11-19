/**
 * Created by jf on 15/12/10.
 */

"use strict"

import './less/radio.less'
import React from 'react'

export default class Radio extends React.Component {

    static defaultProps = {
        data: [],
        value: '',
        prefix: 'zui'
    }

    render = () => {
        const prefix = this.props.prefix
        return <div className={prefix+"-radio"}>
            {this.props.data.map((item, key) => {
                const cls = item == this.props.value ? 'active' : ''
                return <label className={prefix+'-radio-item '+cls} key={key} onClick={()=>{
                    this.props.onChange(item)
                }}>
                    <span className={prefix+"-radio-item-circle"}>
                        <i className="inner"></i>
                    </span>
                    <span className={prefix+"-radio-item-content"}>
                        {item}
                    </span>
                </label>
            })}
        </div>
    }
}