'use strict'

import './less/confirm.less'
import React from 'react'
import Mask from './Mask'
import Button from './Button'

export default class Confirm extends React.Component {
    static defaultProps = {
        title: '',
        top: '40%',
        prefix: 'zui',
        visible: false,
        onCancel: ()=> {

        },
        onSubmit: () => {

        }
    }

    state = {
        visible: false
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({visible: nextProps.visible})
    }

    render = () => {
        const prefix = this.props.prefix
        const visible = this.state.visible
        return visible ? <div className={prefix+'-confirm'}>
            <Mask/>
            <div className={prefix+'-confirm-wrap'} style={{top: this.props.top}}>
                <div className={prefix+'-confirm-header'}>
                    {this.props.title}
                </div>
                <div className={prefix+'-confirm-content'}>
                    {this.props.children}
                </div>
                <div className={prefix+'-confirm-footer clear'}>
                    <Button type="plain" className={prefix+'-confirm-button'} onClick={()=>{
                        this.setState({visible: false})
                        this.props.onCancel()
                    }}>取消</Button>
                    <Button className={prefix+'-confirm-button'} onClick={()=>{
                        this.setState({visible: false})
                        this.props.onSubmit()
                    }}>确认</Button>
                </div>
            </div>
        </div> : null
    }
}