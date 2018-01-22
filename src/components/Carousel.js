/**
 * 头像组件
 */
'use strict'

import './less/carousel.less'
import React from 'react' 

class CarouselItem extends React.Component{
    static defaultProps = {
        prefix: 'zui',
        className: ''
    }

    render = () => {
        const prefix = this.props.prefix
        const className = this.props.className
        return <div className={prefix+'-carousel-item '+className}>
            {this.props.children}
        </div>
    }
}

class Carousel extends React.Component {

    static defaultProps = { 
        prefix: 'zui',
        interval: 1000
    } 

    state = {
        left: 0,
        activeIndex: 0,
        transition: 'left .5s ease'
    }   

    componentDidMount = () => {
        this.slideToIndex(1, 'none')
    }

    componentWillUnmount = () => {
        clearInterval(this.intervalId)
    } 

    slideToIndex = (index, transition='left .5s ease') => {
        let left = 0
        const items = this.refs.carousel.childNodes
        if(index===items.length){
            this.slideToIndex(1, 'none')
            return false
        }
        if(index===-1){
            this.slideToIndex(items.length-2, 'none')
            return false
        }
        Array.prototype.slice.call(items, 0, index).map((item, key)=>{
            left += item.clientWidth
        })
        this.setState({
            left: -left,
            activeIndex: index,
            transition: transition
        })
    }

    render = () => {
        const prefix = this.props.prefix  
        const children = this.props.children
        const activeIndex = this.state.activeIndex
        return <div className={prefix+'-carousel'}>
            <div className={prefix+'-carousel-list'} ref="carousel" style={{
                left: this.state.left,
                transition: this.state.transition
            }} onTouchStart={e=>{
                var touch = e.targetTouches[0];
                  //滑动起点的坐标
                  this.startX = touch.pageX; 
            }} onTouchMove = {e=>{

                  var touch = e.targetTouches[0];
                  //手势滑动时，手势坐标不断变化，取最后一点的坐标为最终的终点坐标
                    this.endX = touch.pageX; 
            }} onTouchEnd = {e=>{ 

              var distanceX= this.endX-this.startX
              if(distanceX<-50){
                this.slideToIndex(this.state.activeIndex+1)
              }else if(distanceX>50){
                this.slideToIndex(this.state.activeIndex-1)
              }
            }}>
                {children[children.length-1]}
                {children.map((item, key)=>{
                    return <Carousel.Item key={key} className={item.props.className}>
                        {item.props.children}
                    </Carousel.Item>
                })}
                {children[0]}
            </div>
        </div>
    }
}

Carousel.Item = CarouselItem
export default Carousel