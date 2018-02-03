/**
 * 头像组件
 */
'use strict'

import './less/carousel.less'
import React from 'react' 

class CarouselItem extends React.Component{
    static defaultProps = {
        prefix: 'zui',
        width: 'auto',
        height: 'auto',
        className: ''
    }

    render = () => {
        const prefix = this.props.prefix
        const className = this.props.className
        return <div className={prefix+'-carousel-item '+className} style={{
            width: document.body.clientWidth,
            maxWidth: this.props.width
        }}>
            {this.props.children}
        </div>
    }
}

class Carousel extends React.Component {

    static defaultProps = { 
        prefix: 'zui',
        interval: '.5', 
        activeIndex: 0,
        width: document.body.clientWidth,
        onChange(){}
    } 

    state = {
        left: 0,
        activeIndex: 0,
        transition: 'left .5s ease'
    }   

    componentDidMount = () => {
        this.slideToIndex(this.props.activeIndex||1, 'none')
    }

    componentWillUnmount = () => {
        clearInterval(this.intervalId)
    } 

    slideToIndex = (index, transition=('left '+this.props.interval+'s ease')) => {
        let left = 0
        const items = this.refs.carousel.childNodes
        Array.prototype.slice.call(items, 0, index).map((item, key)=>{
            left += item.clientWidth
        }) 
        this.setState({
            left: -left,
            activeIndex: index,
            transition: transition
        }) 
        if(index===items.length-1){ 
            setTimeout(()=>this.slideToIndex(1, 'none'), 500) 
            return false 
        }
        if(index===0){
            setTimeout(()=>this.slideToIndex(items.length-2, 'none'), 500)
            return false
        }
        this.props.onChange(index) 
    }

    onTouchStart = e => { 
        this.startX = e.targetTouches[0].pageX
    }

    onTouchMove = e => {
        this.endX = e.targetTouches[0].pageX
        e.preventDefault()
    }

    onTouchEnd = e => {
        var distanceX= this.endX-this.startX
        if(distanceX<-30){
            this.slideToIndex(this.state.activeIndex+1)
        }else if(distanceX>30){
            this.slideToIndex(this.state.activeIndex-1)
        }
    }

    render = () => {
        const prefix = this.props.prefix  
        const children = this.props.children
        const className = this.props.className
        const activeIndex = this.state.activeIndex 
        return <div className={prefix+'-carousel '+className} style={{ 
            width: document.body.clientWidth,
            maxWidth: this.props.width,
            height: this.props.height
        }}>
            <div className={prefix+'-carousel-list'} ref="carousel" style={{
                left: this.state.left,
                transition: this.state.transition
            }} onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd}>
                {children[children.length-1]}
                {children.map((item, key)=>{
                    return <Carousel.Item key={key} className={item.props.className} width={this.props.width}>
                        {item.props.children}
                    </Carousel.Item>
                })}
                {children[0]}
            </div>
            <ul className={prefix+'-carousel-pagination'}>
                {children.map((item, key)=>{
                    const cls = activeIndex-1===key?'active':''
                    return <li className={cls} key={key} onClick={()=>this.slideToIndex(key+1)}></li>
                })}
            </ul>
        </div>
    }
}

Carousel.Item = CarouselItem
export default Carousel