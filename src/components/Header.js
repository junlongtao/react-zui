/**
 * header
 */
'use strict'

import './less/header.less'
import React from 'react'
import Icon from './Icon'
import Util from '../../Util'

import 'antd-mobile/lib/action-sheet/style'
import ActionSheet from 'antd-mobile/lib/action-sheet'

export default class Header extends React.Component {

    static defaultProps = {
        prev: '',
        shareContent: {}
    }

    state = {
        wechatInstalled: false
    }

    componentDidMount = () => {
        ActionSheet.close()
        Util.wechatInstalled((installed) => {
            this.setState({
                wechatInstalled: installed
            })
        })
    }

    onBackClick = () => {
        if (this.props.prev) {
            Util.assign(this.props.prev)
        } else {
            history.back()
        }
    }

    showShareActionSheet = () => {
        const icons = [
            {iconName: 'icon iconfont icon-weixin', title: '微信好友'},
            {iconName: 'icon iconfont icon-pengyouquan', title: '朋友圈'}
        ]
        ActionSheet.showShareActionSheetWithOptions({
            options: icons,
            message: '分享',
            cancelButtonText: '取消'
        }, (buttonIndex) => {
            this.setState({clicked1: buttonIndex > -1 ? icons[buttonIndex].title : 'cancel'})
            if ((typeof api == 'object') && !this.state.wechatInstalled) {
                Util.toast('您未安装微信,暂时无法使用微信分享')
                return false
            }
            if (typeof api == "object") {
                const wx = api.require('wx')
                const content = this.props.shareContent
                wx.shareWebpage({
                    scene: buttonIndex == 0 ? 'session' : 'timeline',
                    title: content.title,
                    description: content.desc,
                    thumb: content.imgUrl,
                    contentUrl: content.link
                }, (ret, err) => {
                    if (ret.status) {
                        Util.toast('分享成功', 1);
                    } else if (err.code == 2) {
                        Util.toast('取消分享', 1)
                    } else {
                        Util.errorTip('分享失败:' + err.code + ', 请稍后再试');
                    }
                });
            }
        });
    }

    renderTitle = () => {
        return this.props.title
    }

    renderBack = () => {
        return this.props.back ? <div onClick={this.onBackClick} className="back_wrap cursor">
            <Icon type="pullleft" width="10" height="20"/>
        </div> : null
    }

    renderShare = () => {
        return (this.props.shareContent.link && Util.os.apicloud && this.state.wechatInstalled) ?
            <div onClick={this.showShareActionSheet} className="share_wrap">
                <Icon type="fenxiang" width="10" height="20"/>
            </div> : null
    }

    render = () => {
        if (Util.os.wechat && Util.os.ios) {
            return null
        }
        if (Util.os.wechat && Util.os.android) {
            return null
        }
        window.headerSlideDownCount = (window.headerSlideDownCount || 0) + 1
        const cls = window.headerSlideDownCount > 1 ? '' : 'slide_down'
        return <div className='weui_header'>
            <div className={"wrap "+cls}>
                {this.renderBack()}
                {this.renderTitle()}
                {this.renderShare()}
            </div>
        </div>
    }
}
