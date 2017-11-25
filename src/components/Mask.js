import './less/mask.less'
import React from 'react'

export default class Mask extends React.Component {

    static defaultProps = {
        prefix: 'zui',
        onClick: ()=> {
        }
    }

    render = () => {
        const prefix = this.props.prefix
        return <div className={prefix+"-mask"} onClick={this.props.onClick}></div>
    }
}