
import './less/carousel.less'
import React from 'react'
import BasePage from './BasePage'
import {List, Carousel} from '../../build/packages'

export default class ExamplePage extends React.Component {
    render = () => {
        return <BasePage title="轮播图">
            <Carousel>
                <Carousel.Item className="red">item1</Carousel.Item>
                <Carousel.Item className="blue">item2</Carousel.Item>
                <Carousel.Item className="black">item3</Carousel.Item>
                <Carousel.Item className="black">item4</Carousel.Item>
                <Carousel.Item className="black">item5</Carousel.Item>
                <Carousel.Item className="black">item6</Carousel.Item>
            </Carousel>
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
import {Avatar} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <Avatar src="user avatar img src value"
            width="60px" style={{display: 'block', margin: '50px auto'}}/>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
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