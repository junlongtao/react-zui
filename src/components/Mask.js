
import './less/mask.less'
import React from 'react'

export default class Mask extends React.Component {

    static defaultProps = {
        prefix: 'zui'
    }

    render = () => {
        const prefix = this.props.prefix
        return <div className={prefix+"-mask"}></div>
    }
}