import React from 'react'
import BasePage from './BasePage'
import {List, ListLoading} from '../../build/packages'

export default class ExamplePage extends React.Component {
    render = () => {
        return <BasePage title="列表加载中">
            <ListLoading hasMore={true}/>
            <List>
                <List.Header>
                    使用说明
                </List.Header>
                <List.Item>
                    暂无
                </List.Item>

                <List.Header>
                    代码演示
                </List.Header>
                <List.PreItem>
                    {`
import React from 'react'
import {ListLoading} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <ListLoading hasMore={true}/>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item extra="列表是否还有数据, 为false时显示'没有更多了'">
                    hasMore
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