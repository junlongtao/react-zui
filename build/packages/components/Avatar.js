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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import defaultAvatar from './avatar_default.png'

var Avatar = function (_React$Component) {
    (0, _inherits3.default)(Avatar, _React$Component);

    function Avatar() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Avatar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Avatar.__proto__ || (0, _getPrototypeOf2.default)(Avatar)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var src = _this.props.src || defaultAvatar;
            if (src == 'http://zcrun.com/images/head.png') {
                src = defaultAvatar;
            }
            var width = _this.props.width || '70px';
            var style = {
                width: width,
                height: width
            };
            return _react2.default.createElement('img', { className: "weui_avatar " + _this.props.className, style: style,
                onClick: _this.props.onClick, src: src });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Avatar;
}(_react2.default.Component);

exports.default = Avatar;
module.exports = exports['default'];