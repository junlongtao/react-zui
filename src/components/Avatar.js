/**
 * 头像组件
 */
'use strict'

import './less/avatar.less'
import React from 'react'
import AvatarMale from './img/avatar-male.svg'
import AvatarFemale from './img/avatar-female.svg'

export default class Avatar extends React.Component {

    static defaultProps = {
        src: '',
        style: {},
        sex: 'male',
        prefix: 'zui',
        width: '70px',
        className: '',
        onClick: () => {
        }
    }

    state = {
        src: ''
    }

    componentDidMount(){
        this.renderExamSrc(this.props.src)
    }

    componentWillReceiveProps(nextProps){
        this.renderExamSrc(nextProps.src)
    }

    renderExamSrc(src){
        const img = document.createElement('img')
        img.onload = () => {
            this.setState({src: src})
            document.body.removeChild(img)
        }
        img.onerror = function(){
            document.body.removeChild(img)
        }
        img.src = src
        img.style = 'opacity: 0;'
        document.body.appendChild(img)
    }

    renderSrc = () => {
        if(this.state.src){
            return this.state.src
        }

        return this.props.sex==='male'?AvatarMale:AvatarFemale
    }

    render = () => {
        const prefix = this.props.prefix
        const cls = `${prefix}-avatar ${this.props.className} ${this.props.sex}` 
        return <img className={cls}
                    src={this.renderSrc()} 
                    style={this.props.style}
                    width={this.props.width} 
                    height={this.props.width||this.props.height} 
                    onClick={this.props.onClick}/>
    }
}
