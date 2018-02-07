
import './less/carousel.less'
import React from 'react'
import BasePage from './BasePage'
import {List, Carousel, Button, Message} from '../../build/packages'
import Carousel1 from './img/carousel1.jpg'
import Carousel2 from './img/carousel2.jpg'
import Carousel3 from './img/carousel3.jpg'
import Carousel4 from './img/carousel4.jpg'
import Carousel5 from './img/carousel5.jpg'
import Carousel6 from './img/carousel6.jpg'

export default class ExamplePage extends React.Component {

    state = {
        index: 3
    }

    render = () => {
        return <BasePage title="轮播图">
            <Carousel width="400px" height="175px" activeIndex={this.state.index} onChange={index=>this.setState({index: index})}>
                <Carousel.Item onClick={function(){
                    Message.info('click item one')
                }}>
                    <img src={Carousel1}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Carousel2}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Carousel3}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Carousel4}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Carousel5}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Carousel6}/>
                </Carousel.Item>
            </Carousel> 
            <Button padding="10px">activeIndex:{this.state.index}</Button>
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
import {Carousel, Message} from "react-zui"
export default class Example extends React.Component {
    render = () => {
        return <Carousel>
            <Carousel.Item onClick={function(){
                Message.info('click item one')
            }}>
                <img src={Carousel1}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Carousel2}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Carousel3}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Carousel4}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Carousel5}/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Carousel6}/>
            </Carousel.Item>
        </Carousel>
    }
}
                    `}
                </List.PreItem>
            </List>

            <List>
                <List.Header>
                    属性
                </List.Header>
                <List.Item extra="className">
                    className
                </List.Item>
                <List.Item extra="当前索引">
                    activeIndex
                </List.Item>  
            </List>

            <List>
                <List.Header>
                    事件
                </List.Header>
                <List.Item extra="activeIndex改变时的回调">
                    onChange(activeIndex)
                </List.Item>
                <List.Item extra="Carousel.Item的点击事件">
                    Carousel.Item.onClick(e)
                </List.Item>
            </List>
        </BasePage>
    }
}