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
        onClick: ()=>{},
    }

    render = () => {
        const type = this.props.type
        const style = this.props.style
        const prefix = this.props.prefix
        const padding = this.props.padding
        const className = this.props.className
        return <div  className={prefix+'-button '+type+' '+className} onClick={()=>{
            if(this.props.type==='disabled'){
                return false
            }else{
                this.props.onClick()
            }
        }} style={{padding: padding}}>
            <button>
                {this.props.children}
            </button>
            {this.props.onFileChange?<input type="file" className={prefix+'-button-input'} onChange={e=>{
                this.props.onFileChange(e.target.files[0])
            }}/>:null}
        </div>
    }
}
