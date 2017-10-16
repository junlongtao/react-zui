/**
 * page组件
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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Util = require('../Util');

var _Util2 = _interopRequireDefault(_Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notify = function (_React$Component) {
    (0, _inherits3.default)(Notify, _React$Component);

    function Notify() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Notify);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Notify.__proto__ || (0, _getPrototypeOf2.default)(Notify)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            visible: false
        }, _this.componentWillReceiveProps = function (nextProps) {
            _this.setState({
                visible: nextProps.visible
            });
        }, _this.onCloseClick = function () {
            _this.setState({
                visible: false
            });
        }, _this.onClick = function () {
            _this.props.onClick(_this.props.data);
        }, _this.render = function () {
            var top = _this.state.visible ? '0' : '-100px';
            var visibility = _this.state.visible ? 'visible' : 'hidden';
            return _react2.default.createElement(
                'div',
                { className: 'weui_notify', style: { top: top, visibility: visibility } },
                _react2.default.createElement(_Icon2.default, { type: 'notice', className: 'fade_in' }),
                _react2.default.createElement(_Icon2.default, { type: 'close', className: 'fade_in cursor', onClick: _this.onCloseClick }),
                _react2.default.createElement(
                    'div',
                    { onClick: _this.onClick },
                    _this.props.content
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Notify;
}(_react2.default.Component);

exports.default = Notify;
module.exports = exports['default'];