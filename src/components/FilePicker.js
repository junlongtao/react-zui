'use strict'

import './less/file-picker.less'
import React from 'react'

export default class FilePicker extends React.Component {
    static defaultProps = {
        prefix: 'weui'
    }

    render = () => {
        const prefix = this.props.prefix
        return <input type="file" className={prefix+'-file-picker'}/>
    }
}