/**
 * 倒计时组件
 */
"use strict";

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

require('./less/countdown.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Countdown = function (_React$Component) {
    (0, _inherits3.default)(Countdown, _React$Component);

    function Countdown() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Countdown);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Countdown.__proto__ || (0, _getPrototypeOf2.default)(Countdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            leftsec: 0
        }, _this.componentDidMount = function () {
            window.clearInterval(window.countdownInterval);
            window.countdownInterval = window.setInterval(function () {
                var current = new Date().getTime();
                current = parseInt(current / 1000);
                var leftsec = _this.props.endtime - current;
                _this.setState({
                    leftsec: leftsec < 0 ? 0 : leftsec
                });
            }, 1000);
        }, _this.componentWillUnmount = function () {
            window.clearInterval(window.countdownInterval);
        }, _this.render = function () {
            var day = void 0,
                hour = void 0,
                minute = void 0,
                second = void 0;
            var leftsecond = _this.state.leftsec;
            if (leftsecond < 0) {
                day = hour = minute = second = 0;
            } else {
                day = Math.floor(leftsecond / (60 * 60 * 24));
                hour = Math.floor((leftsecond - day * 24 * 60 * 60) / 3600);
                minute = Math.floor((leftsecond - day * 24 * 60 * 60 - hour * 3600) / 60);
                second = Math.floor(leftsecond - day * 24 * 60 * 60 - hour * 3600 - minute * 60);
            }

            var prefix = _this.props.prefix;
            return _react2.default.createElement(
                'span',
                { className: prefix + "countdown " + _this.props.className },
                (0, _util.preZero)(day),
                '\u5929 ',
                (0, _util.preZero)(hour),
                ':',
                (0, _util.preZero)(minute),
                ':',
                (0, _util.preZero)(second)
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Countdown;
}(_react2.default.Component);

Countdown.defaultProps = {
    prefix: 'zui'
};
exports.default = Countdown;