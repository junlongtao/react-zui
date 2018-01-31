
import React from 'react'
import BasePage from './BasePage'
import {List, CheckList} from '../../build/packages'
export default class ExamplePage extends React.Component {
    render = () => {
        return <BasePage title="多选列表">
            <List>
                <List.Item>
                    <CheckList name="人才期望职位（最多同时选择2个）" max={2} data={[
                        '销售','JAVA','PHP','其他', 'kkk', 'jjj', 'ooo', 'jfkdjkdls', 'jkfldjfklds','jkfdjflksd'
                    ]}/>
                </List.Item>
            </List>
            <List>
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
import {CheckList, List} from "react-zui"
export default class Example extends React.Component {
    render(){
        return <List>
            <List.Item>
                <CheckList name="人才期望职位（最多同时选择2个）" data={[
                    '销售','JAVA','PHP','其他'
                ]}/>
            </List.Item>
        </List>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item extra="标题文字">
                    name
                </List.Item>
                <List.Item extra="选项数组">
                    data
                </List.Item>
                <List.Item extra="选中的选项值，array类型">
                    value
                </List.Item>
                <List.Item extra="最多可选中的数量，默认为Infinity">
                    max
                </List.Item>
            </List>

            <List>
                <List.Header>
                    事件
                </List.Header>
                <List.Item extra="value改变时的回调事件">
                    onChange(value)
                </List.Item>
            </List>
        </BasePage>
    }
}