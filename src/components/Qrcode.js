/**
 *二维码图片组件
 */

import './less/qr-code.less'
import React from 'react'
import qrcode from 'qrcode-generator'

export default class QRCode extends React.Component {

    static defaultProps = {
        text: '',
        prefix: 'zui',
        className: '',
    }

    render = () => {
        var qr = qrcode(8, 'L');
        qr.addData(this.props.text);
        qr.make();

        const prefix = this.props.prefix
        return this.props.text ? <div className={prefix+"-qr-code "+this.props.className} dangerouslySetInnerHTML={{
            __html: qr.createImgTag(4, 10)
        }}></div> : null
    }

}