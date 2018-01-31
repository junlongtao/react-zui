
import './less/avatar.less'
import React from 'react'
import BasePage from './BasePage'
import {List, Avatar} from '../../build/packages'
export default class ExamplePage extends React.Component {
    render = () => {
        return <BasePage title="头像">
            <List>
                <List.Item extra={
                    <Avatar src="http://img5.imgtn.bdimg.com/it/u=1922355689,2789722564&fm=27&gp=0.jpg" width="60px"/>
                }>
                    头像加载成功,正常显示图片
                    </List.Item>
                <List.Item extra={
                    <Avatar src="Unknown img src" width="60px"/>
                }>
                    头像加载失败,显示默认头像
                </List.Item>
                <List.Item extra={
                    <Avatar sex="female" width="60px"/>
                }>
                    女生默认头像
                </List.Item> 


                <List.Header>
                    使用说明
                </List.Header>
                <List.Item>
                    当加载的图片不存在时会显示默认头像
                </List.Item>
                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {Avatar} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <Avatar src="user avatar img src value"
            width="60px" style={{display: 'block', margin: '50px auto'}}/>
    }
}
                    `}
                </List.PreItem>


                <List.Header>
                    属性
                </List.Header>
                <List.Item extra="图片地址">
                    src
                </List.Item>
                <List.Item extra="图片宽度">
                    width
                </List.Item>
                <List.Item extra="样式表">
                    style
                </List.Item>
                <List.Item extra="性别(male/female),默认为male">
                    sex
                </List.Item>

                
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