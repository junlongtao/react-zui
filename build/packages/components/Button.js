/**
 * 按钮组件
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var Button = function (_React$Component) {
    (0, _inherits3.default)(Button, _React$Component);

    function Button() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Button);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
            var opacityCurve11 = mojs.easing.path('M0,0 C0,87 27,100 40,100 L40,0 L100,0');
            var scaleCurve11 = mojs.easing.path('M0,0c0,80,39.2,100,39.2,100L40-100c0,0-0.7,106,60,106');
            var el = _this.refs.buttonElement;
            _this.timeline = new mojs.Timeline();
            _this.tweens = [
            // ring animation
            new mojs.Shape({
                parent: el,
                radius: { 0: 95 },
                fill: 'transparent',
                stroke: '#C0C1C3',
                strokeWidth: { 10: 0 },
                opacity: 0.4,
                duration: 1000,
                delay: 100,
                easing: mojs.easing.bezier(0, 1, 0.5, 1)
            }),
            // ring animation
            new mojs.Shape({
                parent: el,
                radius: { 0: 80 },
                fill: 'transparent',
                stroke: '#C0C1C3',
                strokeWidth: { 20: 0 },
                opacity: 0.2,
                duration: 1800,
                delay: 300,
                easing: mojs.easing.bezier(0, 1, 0.5, 1)
            })];
            _this.tweens.map(function (item, key) {
                _this.timeline.add(item);
            });
        }, _this.onClick = function (e) {
            _this.timeline && _this.timeline.replay();

            if (_this.props.href) {
                if (_this.props.href.indexOf('tel:') === -1) {
                    location.assign(_this.props.href);
                }
                return false;
            }
            _this.props.onClick && _this.props.onClick(e);
        }, _this.render = function () {
            var _this$props = _this.props,
                type = _this$props.type,
                size = _this$props.size,
                plain = _this$props.plain,
                className = _this$props.className,
                children = _this$props.children,
                disabled = _this$props.disabled,
                padding = _this$props.padding,
                position = _this$props.position,
                others = (0, _objectWithoutProperties3.default)(_this$props, ['type', 'size', 'plain', 'className', 'children', 'disabled', 'padding', 'position']);

            var Component = _this.props.href ? 'a' : 'button';
            var cls = classNames({
                weui_btn: true,
                cursor: true,

                weui_btn_primary: type === 'primary' && !plain,
                weui_btn_default: type === 'default' && !plain,
                weui_btn_warn: type === 'warn',
                weui_btn_disabled: disabled,

                weui_btn_plain_primary: type === 'primary' && plain,

                weui_btn_plain_default: type === 'default' && plain,

                weui_btn_mini: size === 'small',
                weui_btn_bottom: position === 'bottom'
            });
            if (padding) {
                return _react2.default.createElement(
                    'div',
                    { style: { 'padding': _this.props.padding } },
                    _react2.default.createElement(
                        Component,
                        (0, _extends3.default)({ ref: 'buttonElement' }, others, { className: cls, onClick: _this.onClick }),
                        children
                    )
                );
            } else {
                return _react2.default.createElement(
                    Component,
                    (0, _extends3.default)({ ref: 'buttonElement' }, others, { className: cls, onClick: _this.onClick }),
                    children
                );
            }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Button;
}(_react2.default.Component);

Button.defaultProps = {
    disabled: false,
    type: 'primary',
    size: 'normal',
    padding: ''
};
exports.default = Button;
;
module.exports = exports['default'];