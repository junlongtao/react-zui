/**
 *侧边栏下载App和关注公账号二维码
 */
import './download_patch.less'
import React from 'react'
import Util from '../../Util'

export default class DownloadPatch extends React.Component {

    render = () => {
        if (Util.os.android || Util.os.iPhone) {
            return null
        }
        return <div className="download_patch">
            <p>智筹APP正式上线</p>
            <p>装在口袋里的人才/任务库, 不来试试么?</p>
            <img className="qr_code" src='/static/assets/download_qr_code.jpg'/>
            <p>关注智筹公众号</p>
            <p>最新人才/任务推荐, 每周一发布</p>
            <img className="qr_code" src='/static/assets/follow_qr_code.jpg'/>
            <img className="long_logo" src="/static/assets/long_logo.png"/>
            <p className="slogan">互联网高级人才一站式直租平台</p>
        </div>
    }
}