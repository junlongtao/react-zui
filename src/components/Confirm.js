'use strict'

import './less/confirm.less'
import React from 'react'
import Mask from './Mask'
import Button from './Button'

export default class Confirm extends React.Component {
    static defaultProps = {
        prefix: 'weui',
        visible: false,
        onCancel: ()=> {

        },
        onSubmit: () => {

        }
    }

    render = () => {
        const prefix = this.props.prefix
        return this.props.visible ? <div className={prefix+'-confirm'}>
            <Mask/>
            <div className={prefix+'-confirm-wrap'}>
                <div className={prefix+'-confirm-content'}>
                    {this.props.children}
                </div>
                <div className={prefix+'-confirm-footer clear'}>
                    <Button plain className={prefix+'-confirm-button'} onClick={this.props.onCancel}>取消</Button>
                    <Button className={prefix+'-confirm-button'} onClick={this.props.onSubmit}>确认</Button>
                </div>
            </div>
        </div> : null
    }
}