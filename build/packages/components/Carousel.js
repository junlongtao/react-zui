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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Swipe = require('./Swipe');

var _Swipe2 = _interopRequireDefault(_Swipe);

var _Util = require('../Util');

var _Util2 = _interopRequireDefault(_Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 轮播组件
 */
var Carousel = function (_React$Component) {
    (0, _inherits3.default)(Carousel, _React$Component);

    function Carousel() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Carousel);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Carousel.__proto__ || (0, _getPrototypeOf2.default)(Carousel)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
            var swipeOptions = _this.props.swipeOptions;

            _this.swipe = (0, _Swipe2.default)(_this.refs.container, swipeOptions);
        }, _this.componentWillUnmount = function () {
            _this.swipe.kill();
            _this.swipe = void 0;
        }, _this.renderItems = function () {
            var items = _this.props.items;
            return items.map(function (item, key) {
                return _react2.default.createElement(
                    'div',
                    { className: 'carousel-item', key: key },
                    item
                );
            });
        }, _this.render = function () {
            return _react2.default.createElement(
                'div',
                { ref: 'container', className: 'react-swipe-container ' + _this.props.className },
                _react2.default.createElement(
                    'div',
                    { className: 'wrapper' },
                    _this.renderItems()
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Carousel;
}(_react2.default.Component);

Carousel.propTypes = {
    swipeOptions: _react2.default.PropTypes.shape({
        startSlide: _react2.default.PropTypes.number, // initial picture index
        speed: _react2.default.PropTypes.number, // transition duration
        easing: _react2.default.PropTypes.string, // transition time function
        interval: _react2.default.PropTypes.number, // time for swipe to next picture
        dots: _react2.default.PropTypes.bool, // show dots ? true -> show : false -> not, default = true
        autoPlay: _react2.default.PropTypes.bool, // true -> auto swipe, default = true
        continuous: _react2.default.PropTypes.bool, // true -> continuous swipe, default = true
        disableScroll: _react2.default.PropTypes.bool, // false -> ignore swipe, default = true
        swiping: _react2.default.PropTypes.func, // function when swiping
        callback: _react2.default.PropTypes.func, // function for swipe to next picture
        transitionEnd: _react2.default.PropTypes.func // function for transition end. valid or invalid swipe
    }),
    className: _react2.default.PropTypes.string,
    items: _react2.default.PropTypes.array
};
Carousel.defaultProps = {
    swipeOptions: {
        autoPlay: false,
        disableScroll: false
    },
    items: [],
    className: ''
};
exports.default = Carousel;
module.exports = exports['default'];