/**
 * 按钮组件
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

require('./less/button.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function (_React$Component) {
    (0, _inherits3.default)(Button, _React$Component);

    function Button() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Button);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
            if (_this.props.type === 'disabled') {
                return false;
            } else {
                _this.props.onClick(e);
            }
        }, _this.render = function () {
            var type = _this.props.type;
            var style = _this.props.style;
            var prefix = _this.props.prefix;
            var padding = _this.props.padding;
            var className = _this.props.className;
            var widthCls = _this.props.width === 'auto' ? 'width-auto' : '';
            var cls = prefix + '-button ' + type + ' ' + className + ' ' + widthCls;
            return _react2.default.createElement(
                'div',
                { className: cls, onClick: _this.onClick, style: { padding: padding } },
                _react2.default.createElement(
                    'button',
                    null,
                    _this.props.children
                ),
                _this.props.onFileChange ? _react2.default.createElement('input', { type: 'file', className: prefix + '-button-input', onChange: function onChange(e) {
                        _this.props.onFileChange(e.target.files[0]);
                    } }) : null
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Button;
}(_react2.default.Component);

Button.defaultProps = {
    padding: '',
    className: '',
    prefix: 'zui',
    size: 'normal',
    type: 'primary',
    width: 'fullfill',
    onClick: function onClick(e) {}
};
exports.default = Button;