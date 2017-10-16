/**
 * 返回顶部组件
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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Util = require('../Util');

var _Util2 = _interopRequireDefault(_Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReturnTop = function (_React$Component) {
    (0, _inherits3.default)(ReturnTop, _React$Component);

    function ReturnTop() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ReturnTop);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ReturnTop.__proto__ || (0, _getPrototypeOf2.default)(ReturnTop)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            cls: '',
            visible: false

            //滚动条在Y轴上的滚动距离
        }, _this.getScrollTop = function () {
            var scrollTop = 0,
                bodyScrollTop = 0,
                documentScrollTop = 0;
            if (document.body) {
                bodyScrollTop = document.body.scrollTop;
            }
            if (document.documentElement) {
                documentScrollTop = document.documentElement.scrollTop;
            }
            scrollTop = bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop;
            return scrollTop;
        }, _this.componentDidMount = function () {
            _Util2.default.onScrollBottom('setReturnTopVisible', function () {
                var visible = _this.getScrollTop() > 500 ? true : false;
                _this.setState({
                    visible: visible
                });
            });
        }, _this.onClick = function () {
            _this.setState({
                cls: 'fly_out'
            });

            var timer = setInterval(function () {
                var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
                window.scrollTo(0, currentPosition - 200);
            }, 1);
            setTimeout(function () {
                window.scrollTo(0, 0);
                clearInterval(timer);
                _this.setState({
                    visible: false,
                    cls: ''
                });
            }, 1000);
        }, _this.render = function () {
            return _react2.default.createElement(
                'div',
                { id: 'return_top', className: "weui_return_top cursor " + _this.state.cls,
                    style: { display: _this.state.visible ? 'block' : 'none' }, onClick: _this.onClick },
                _react2.default.createElement(_Icon2.default, { type: 'rocket' })
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return ReturnTop;
}(_react2.default.Component);

exports.default = ReturnTop;
module.exports = exports['default'];