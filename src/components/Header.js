/**
 * header
 */
'use strict'

import './less/header.less'
import React from 'react'
import Icon from './Icon'
import Util from '../Util'

export default class Header extends React.Component {

    static defaultProps = {
        prev: '',
        back: false,
        title: null,
        prefix: 'weui'
    }

    onBackClick = () => {
        if (this.props.prev) {
            location.assign(this.props.prev)
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

    render = () => {
        //只有微信pc版显示header,微信手机端不显示header
        if (Util.os.wechat && Util.os.ios) {
            return null
        }
        if (Util.os.wechat && Util.os.android) {
            return null
        }

        const prefix = this.props.prefix
        return <div className={prefix+'-header '+this.props.className}>
            <div className={prefix+'-header-wrap'}>
                {this.props.back ? <Icon type="back" className="cursor" onClick={this.onBackClick}/> : null}
                {this.props.children}
            </div>
        </div>
    }
}
