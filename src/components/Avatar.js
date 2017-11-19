/**
 * 头像组件
 */
'use strict'

import './less/avatar.less'
import React from 'react'
import AvatarMale from './img/avatar-male.svg'
import AvatarFemale from './img/avatar-female.svg'
import AvatarDefault from './img/avatar-default.png'

export default class Avatar extends React.Component {

    static defaultProps = {
        sex: '',
        style: {},
        prefix: 'zui',
        width: '70px',
        className: '',
        src: AvatarDefault,
        onClick: () => {
        }
    }

    renderSrc = () => {
        if(this.props.src){
            return this.props.src
        }
        if(this.props.sex==='male'){
            return AvatarMale
        }
        if(this.props.sex==='female'){
            return AvatarFemale
        }

        return AvatarDefault
    }

    render = () => {
        const prefix = this.props.prefix 
        return <img src={this.renderSrc()} 
                    style={this.props.style}
                    width={this.props.width} 
                    height={this.props.width||this.props.height} 
                    className={prefix+"-avatar "+this.props.className}
                    onClick={this.props.onClick} />
    }
}
