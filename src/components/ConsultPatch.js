/**
 * 悬浮咨询按钮
 */
"use strict"

import './less/consult_patch.less'
import React from 'react'
import Icon from './Icon'
import Util from '../Util'

export default class ConsultPatch extends React.Component {

    componentDidMount = () => {
        // const isMobile = Util.os.android||Util.os.iPhone
        // if(!isMobile){
        //     var tenantId='76965df13fc84a05a38d84fb7886ebd1';
        //     document.write(unescape("%3Cscript id='aikfWebMainJs' src='"+((window.location.protocol=="file:")?"http:":window.location.protocol)+"//www.aikf.com/ask/resources/app/ask/webMain.js?_="+Math.random()+"' type='text/javascript'%3E%3C/script%3E"))
        // }
    }

    render = () => {
        const isMobile = Util.os.android||Util.os.iPhone
        return isMobile ? <div className="weui_consult_patch" onClick={()=>{
            const url = (Util.os.android||Util.os.iPhone)?'http://www.aikf.com/ask/h5/bjzckjyxgs.htm':'http://www.aikf.com/ask/bjzckjyxgs.htm'
            Util.assign(url)
        }}>
            <Icon type="consult"/>
        </div>:null
    }
}
