/**
 * 按钮组件
 */
"use strict"
import './less/button.less'
import React from 'react'

export default class Button extends React.Component {
    static defaultProps = {
        padding: '',
        className: '',
        prefix: 'zui',
        size: 'normal',
        type: 'primary',
        width: 'fullfill',
        onClick: e=>{},
    }

    onClick = e => {
        if(this.props.type==='disabled'){
            return false
        }else{
            this.props.onClick(e)
        }
    }

    render = () => {
        const type = this.props.type
        const style = this.props.style
        const prefix = this.props.prefix
        const padding = this.props.padding
        const className = this.props.className
        const widthCls = this.props.width==='auto'?'width-auto':''
        const cls = `${prefix}-button ${type} ${className} ${widthCls}`
        return <div  className={cls} onClick={this.onClick} style={{padding: padding}}>
            <button>
                {this.props.children}
            </button>
            {this.props.onFileChange?<input type="file" className={prefix+'-button-input'} onChange={e=>{
                this.props.onFileChange(e.target.files[0])
            }}/>:null}
        </div>
    }
}
