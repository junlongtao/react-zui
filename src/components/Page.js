/**
 * page组件
 */
"use strict"

import './less/page.less'
import React from 'react'
import Header from './Header'
import Button from './Button'
import Notify from './Notify'
import Loading from './Loading'
import ReturnTop from './ReturnTop'
import ConsultPatch from './ConsultPatch'
import DownloadPatch from './DownloadPatch'

import Util from '../Util'
import classNames from '../utils/classnames'

export default class Page extends React.Component {

    static propTypes = {
        title: React.PropTypes.string
    }

    static defaultProps = {
        blank: false,
        onlyWx: false,
        returnTop: true
    }

    state = {
        online: navigator.onLine,
        notifyData: '',
        notifyVisible: false,
    }

    handleAppPushData = (data)=> {
        Util.jsonlog(data)
        switch (data.msg_type) {
            case 'private_chat':
                Util.slideIn('#workbench/private_chat?conversation_type='
                    + data.conversation_type + '&target_id=' + data.user_id)
                break

            case 'group_chat':
                Util.slideIn('#workbench/group_chat?conversation_type='
                    + data.conversation_type + '&target_id=' + data.target_id)
                break
        }
    }

    registerPushListener = () => {
        window.registerPushListenerIntervalId = Util.setInterval(()=> {
            if (typeof api == 'object') {
                //注册小米推送,监听推送消息
                api.require('mipush').registerPush({
                    appId: '2882303761517533099',
                    appKey: '5891753372099'
                });
                //设置消息监听
                api.require('mipush').setListener((ret)=> {
                    let data
                    if (ret['payload[user_id]']) {
                        data = {
                            content: ret['payload[content]'],
                            user_id: ret['payload[user_id]'],
                            msg_type: ret['payload[msg_type]'],
                            target_id: ret['payload[target_id]'],
                            message_type: ret['payload[message_type]'],
                            conversation_type: ret['payload[conversation_type]'],
                        }
                    } else {
                        data = JSON.parse(ret.content)
                    }
                    if (this.props.onReceiveAppPush) {
                        this.props.onReceiveAppPush(data)
                        return false
                    }
                    this.setState({
                        notifyData: data,
                        notifyVisible: true
                    })
                });
                //监听通知点击事件
                api.addEventListener({
                    name: 'appintent'
                }, (ret, err)=> {
                    if (ret.appParam.key_message) {
                        ret = ret.appParam.key_message.match(/content=\{(.*?)\},/)
                        this.handleAppPushData(JSON.parse(ret[1]))
                    }
                })
                //移除interval
                Util.clearInterval(window.registerPushListenerIntervalId)
            }
        }, 500)
    }

    componentDidMount = () => {
        //移除ajax loading
        Util.ajaxLoading(false)

        //监听网络状态
        window.addEventListener("online", ()=> {
            this.setState({
                online: true
            })
        }, false)
        window.addEventListener("offline", ()=> {
            this.setState({
                online: false
            })
        }, false)

        //回调跳转
        const wxrurl = Util.getStorage('wxrurl')
        if (wxrurl && this.props.title != '绑定手机号'
            && this.props.title != '设置密码'
            && this.props.title !== '个人资料') {
            Util.removeStorage('wxrurl')
            Util.replace(wxrurl)
        }

        //滚动至顶部
        switch (true) {
            case location.href.indexOf('task/list') != -1:
            case location.href.indexOf('talent/list') != -1:
                break

            default:
                window.scrollTo(0, 0)
        }

        //配置微信jssdk
        if (Util.os.wechat) {
            WeixinService.config()
        }

        //更新标题
        if (this.props.title) {
            this.updateTitle(this.props.title)
        }

        //移除过期的interval
        Util.clearInterval()

        //清除talent_list, task_list内存中的数据
        this.clearMemoryStorage()

        //监听App push消息
        if (Util.os.ios || Util.os.android) {
            this.registerPushListener()
        }

        //友盟事件统计
        _czc.push(["_trackPageview", location.href, location.href])

        //移除page_animate
        window.setTimeout(()=> {
            Util.setStorage('page_animate', '')
        }, 1000)

        //更新login_at
        UserService.updateActiveAt({loading: false})

    }

    clearMemoryStorage = () => {
        const hash = window.location.hash.split('?')[0]
        let excluded = [
            '#/task/list',
            '#/task/detail',
            '#/task/project_detail',
            '#/task/applicant',
        ]
        if (excluded.indexOf(hash) === -1) {
            window.task_list = null
        }
        excluded = [
            '#/talent/list',
            '#/talent/detail'
        ]
        if (excluded.indexOf(hash) === -1) {
            window.talent_list = null
        }
    }

    componentWillReceiveProps = (nextProps) => {
        this.updateTitle(nextProps.title)
    }

    updateTitle = (title) => {
        if (title === document.title) {
            return false
        }
        document.title = title
        const iframeElement = document.createElement('iframe')
        iframeElement.setAttribute('src', './favicon.ico')
        iframeElement.style.display = 'none'
        const body = document.getElementsByTagName('body')[0]
        iframeElement.onload = function () {
            setTimeout(function () {
                iframeElement.onload = null
                body.removeChild(iframeElement)
            }, 0)
        }
        body.appendChild(iframeElement)
    }

    renderHeader = () => {
        return this.props.title ? <Header
            title={this.props.title}
            back={this.props.back}
            shareContent={this.props.appShareContent}
            prev={this.props.prev}
        /> : null
    }

    render = () => {
        const {className} = this.props
        const pageAnimate = Util.getStorage('page_animate')
        const cls = classNames({
            [className]: className,
            slide_in: pageAnimate === 'slide_in',
            slide_up: pageAnimate === 'slide_up',
            weui_page: true,
            weui_page_no_header: Util.os.wechat && (Util.os.ios || Util.os.android),
            weui_page_not_app: Util.os.apicloud ? false : true,
            weui_page_network_error: this.state.online ? false : true
        })

        if (!this.state.online) {
            return <div className={cls}>
                {this.renderHeader()}
                <div className="network_error">
                    <img src={networkimg}/>
                    <div className="tip_text">网络不可用</div>
                    <div className="tip_text small">请检查您的网络连接</div>
                    <Button onClick={()=>{window.location.reload()}}>点击重试</Button>
                </div>
            </div>
        }

        if (this.props.blank) {
            return <div className={cls}>
                {this.renderHeader()}
                <div className="loading_text">
                    <div className="big clear">
                        ZHICHOU
                    </div>
                    <div className="mask"></div>
                    租牛人上智筹
                </div>
            </div>
        }

        return <div className={cls}>
            {this.renderHeader()}
            {this.props.children}
            <DownloadPatch/>
            <Loading id="ajax_loading"/>
            <Notify content="您收到了一条新消息" data={this.state.notifyData} visible={this.state.notifyVisible}
                    onClick={this.handleAppPushData}/>
            {this.props.returnTop ? <ReturnTop/> : null}
        </div>
    }
}
