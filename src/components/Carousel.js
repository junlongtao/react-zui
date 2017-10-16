/**
 * 轮播组件
 */
import './less/carousel.less'
import React from 'react'
import Swipe from './Swipe'
import Util from '../../Util'

export default class Carousel extends React.Component {
    static propTypes = {
        swipeOptions: React.PropTypes.shape({
            startSlide: React.PropTypes.number, // initial picture index
            speed: React.PropTypes.number, // transition duration
            easing: React.PropTypes.string, // transition time function
            interval: React.PropTypes.number, // time for swipe to next picture
            dots: React.PropTypes.bool, // show dots ? true -> show : false -> not, default = true
            autoPlay: React.PropTypes.bool, // true -> auto swipe, default = true
            continuous: React.PropTypes.bool, // true -> continuous swipe, default = true
            disableScroll: React.PropTypes.bool, // false -> ignore swipe, default = true
            swiping: React.PropTypes.func, // function when swiping
            callback: React.PropTypes.func, // function for swipe to next picture
            transitionEnd: React.PropTypes.func  // function for transition end. valid or invalid swipe
        }),
        className: React.PropTypes.string,
        items: React.PropTypes.array
    }

    static defaultProps = {
        swipeOptions: {
            autoPlay: false,
            disableScroll: false,
        },
        items: [],
        className: ''
    }

    componentDidMount = () => {
        const { swipeOptions } = this.props
        this.swipe = Swipe(this.refs.container, swipeOptions)
    }

    componentWillUnmount = () => {
        this.swipe.kill()
        this.swipe = void 0
    }

    renderItems = () => {
        const items = this.props.items
        return items.map((item, key) => {
            return (
                <div className="carousel-item" key={key}>
                    {item}
                </div>
            )
        })
    }

    render = () => {
        return <div ref="container" className={`react-swipe-container ${this.props.className}`}>
            <div className="wrapper">
                {this.renderItems()}
            </div>
        </div>
    }
}
