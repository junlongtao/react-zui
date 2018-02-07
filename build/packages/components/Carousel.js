/**
 * 头像组件
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

require('./less/carousel.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CarouselItem = function (_React$Component) {
    (0, _inherits3.default)(CarouselItem, _React$Component);

    function CarouselItem() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CarouselItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CarouselItem.__proto__ || (0, _getPrototypeOf2.default)(CarouselItem)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var prefix = _this.props.prefix;
            var className = _this.props.className;
            return _react2.default.createElement(
                'div',
                { className: prefix + '-carousel-item ' + className, style: {
                        width: document.body.clientWidth,
                        maxWidth: _this.props.width
                    }, onClick: _this.props.onClick },
                _this.props.children
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return CarouselItem;
}(_react2.default.Component);

CarouselItem.defaultProps = {
    prefix: 'zui',
    width: 'auto',
    height: 'auto',
    className: '',
    onClick: function onClick() {}
};

var Carousel = function (_React$Component2) {
    (0, _inherits3.default)(Carousel, _React$Component2);

    function Carousel() {
        var _ref2;

        var _temp2, _this2, _ret2;

        (0, _classCallCheck3.default)(this, Carousel);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Carousel.__proto__ || (0, _getPrototypeOf2.default)(Carousel)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {
            left: 0,
            activeIndex: 0,
            transition: 'left .5s ease'
        }, _this2.componentDidMount = function () {
            var children = _react2.default.Children.toArray(_this2.props.children);
            var index = _this2.props.activeIndex || 1;
            index = index > children.length ? children.length : index;
            _this2.slideToIndex(index, 'none');
        }, _this2.componentWillUnmount = function () {
            clearInterval(_this2.intervalId);
        }, _this2.slideToIndex = function (index) {
            var transition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'left ' + _this2.props.interval + 's ease';

            var children = _react2.default.Children.toArray(_this2.props.children);
            if (children.length <= 1) {
                return false;
            }

            var left = 0;
            var items = _this2.refs.carousel.childNodes;
            Array.prototype.slice.call(items, 0, index).map(function (item, key) {
                left += item.clientWidth;
            });
            _this2.setState({
                left: -left,
                activeIndex: index,
                transition: transition
            });
            if (index === items.length - 1) {
                setTimeout(function () {
                    return _this2.slideToIndex(1, 'none');
                }, 500);
                return false;
            }
            if (index === 0) {
                setTimeout(function () {
                    return _this2.slideToIndex(items.length - 2, 'none');
                }, 500);
                return false;
            }
            _this2.props.onChange(index);
        }, _this2.onTouchStart = function (e) {
            _this2.startX = e.targetTouches[0].pageX;
        }, _this2.onTouchMove = function (e) {
            _this2.endX = e.targetTouches[0].pageX;
            e.preventDefault();
        }, _this2.onTouchEnd = function (e) {
            var distanceX = _this2.endX - _this2.startX;
            if (distanceX < -30) {
                _this2.slideToIndex(_this2.state.activeIndex + 1);
            } else if (distanceX > 30) {
                _this2.slideToIndex(_this2.state.activeIndex - 1);
            }
        }, _this2.render = function () {
            var prefix = _this2.props.prefix;
            var children = _react2.default.Children.toArray(_this2.props.children);
            var className = _this2.props.className;
            var activeIndex = _this2.state.activeIndex;
            return _react2.default.createElement(
                'div',
                { className: prefix + '-carousel ' + className, style: {
                        width: document.body.clientWidth,
                        maxWidth: _this2.props.width,
                        height: _this2.props.height
                    } },
                _react2.default.createElement(
                    'div',
                    { className: prefix + '-carousel-list', ref: 'carousel', style: {
                            left: _this2.state.left,
                            transition: _this2.state.transition
                        }, onTouchStart: _this2.onTouchStart, onTouchMove: _this2.onTouchMove, onTouchEnd: _this2.onTouchEnd },
                    children.length > 1 && children[children.length - 1],
                    children.map(function (item, key) {
                        return _react2.default.createElement(
                            Carousel.Item,
                            { key: key, className: item.props.className, width: _this2.props.width, onClick: item.props.onClick },
                            item.props.children
                        );
                    }),
                    children[0]
                ),
                _react2.default.createElement(
                    'ul',
                    { className: prefix + '-carousel-pagination' },
                    children.map(function (item, key) {
                        var cls = activeIndex - 1 === key ? 'active' : '';
                        return _react2.default.createElement('li', { className: cls, key: key, onClick: function onClick() {
                                return _this2.slideToIndex(key + 1);
                            } });
                    })
                )
            );
        }, _temp2), (0, _possibleConstructorReturn3.default)(_this2, _ret2);
    }

    return Carousel;
}(_react2.default.Component);

Carousel.defaultProps = {
    prefix: 'zui',
    interval: '.5',
    activeIndex: 0,
    width: document.body.clientWidth,
    onChange: function onChange() {}
};


Carousel.Item = CarouselItem;
exports.default = Carousel;