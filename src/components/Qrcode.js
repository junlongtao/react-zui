/**
 *二维码图片组件
 */

import './less/qr-code.less'
import React from 'react'
import qrcode from 'qrcode-generator'

export default class Qrcode extends React.Component {

    render = () => {
        if(!this.props.text){
            return null
        }
        
        var typeNumber = 8;
        var errorCorrectionLevel = 'L';
        var qr = qrcode(typeNumber, errorCorrectionLevel);
        qr.addData(this.props.text);
        qr.make();
        return <div className="zui-qr-code" dangerouslySetInnerHTML={{
            __html: qr.createImgTag(4, 10)
        }}></div>
    }

}