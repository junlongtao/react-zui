
import React from 'react'
import BasePage from './BasePage'
import {List, ReturnTop} from '../../build/packages'

export default class ExamplePage extends React.Component {
    state = {}

    render = () => {
        return <BasePage title="返回顶部">
            <div style={{height: '1000px', textAlign: 'center'}}>
                测试内容....<br/>
                滚动至底部时,自动显示返回顶部
            </div>
            <ReturnTop/>
            <List>
                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {ReturnTop} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <ReturnTop/>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item>
                    暂无
                </List.Item>
            </List>

            <List>
                <List.Header>
                    事件
                </List.Header>
                <List.Item>
                    暂无
                </List.Item>
            </List>
        </BasePage>
    }
}