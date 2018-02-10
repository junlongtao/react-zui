import './less/icon.less'
import React from 'react'
import BasePage from './BasePage'
import {List, Icon} from '../../build/packages'

export default class ExamplePage extends React.Component {
    render = () => {
        return <BasePage title="图标" className="example-page">
            <div className="icon-list">
                <Icon type="bianji"/>
                <Icon type="message"/>
                <Icon type="haoyou"/>
                <Icon type="unionpay"/>
                <Icon type="female"/>
                <Icon type="male"/>
                <Icon type="email"/>
                <Icon type="manage"/>
                <Icon type="chat"/>
                <Icon type="hr"/>
                <Icon type="resume"/>
                <Icon type="edit"/>
                <Icon type="password"/>
                <Icon type="identity"/>
                <Icon type="invoice"/>
                <Icon type="job"/>
                <Icon type="girl"/>
                <Icon type="boy"/>
                <Icon type="report"/>
            </div>
            <List>
                <List.Header>
                    使用说明
                </List.Header>
                <List.PreItem>{`
Icon组件，基于www.iconfont.cn字体库，更换为自己的字体库，配置如下字体类型:
@font-face {
    font-family: 'iconfont';
    src: url('//at.alicdn.com/t/font_168822_hmy96dh54qvndn29.eot');
    src: url('//at.alicdn.com/t/font_168822_hmy96dh54qvndn29.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_168822_hmy96dh54qvndn29.woff') format('woff'),
    url('//at.alicdn.com/t/font_168822_hmy96dh54qvndn29.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_168822_hmy96dh54qvndn29.svg#iconfont') format('svg');
}
                `}</List.PreItem>

                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {Icon} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <Icon type="edit"/>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item extra="类型">
                    type
                </List.Item> 
            </List>

            <List>
                <List.Header>
                    事件
                </List.Header>
                <List.Item extra="点击事件">
                    onClick()
                </List.Item>
            </List>
        </BasePage>
    }
}