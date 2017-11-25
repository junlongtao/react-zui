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

require('./less/text-tip.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextTip = function (_React$Component) {
    (0, _inherits3.default)(TextTip, _React$Component);

    function TextTip() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, TextTip);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TextTip.__proto__ || (0, _getPrototypeOf2.default)(TextTip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            visible: false
        }, _this.render = function () {
            var prefix = _this.props.prefix;
            return _react2.default.createElement(
                'a',
                { href: 'javascript: void(0)', className: prefix + "-text-tip" },
                _react2.default.createElement(
                    'span',
                    { onClick: function onClick() {
                            _this.setState({ visible: true });
                        } },
                    _this.props.title
                ),
                _this.state.visible ? _react2.default.createElement(
                    'div',
                    { className: prefix + "-text-tip-content" },
                    _react2.default.createElement(
                        'div',
                        { className: prefix + '-text-tip-title' },
                        _this.props.title,
                        _react2.default.createElement(_Icon2.default, { type: 'close', onClick: function onClick() {
                                _this.setState({ visible: false });
                            } })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: prefix + '-text-tip-details' },
                        _this.props.children
                    )
                ) : null
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return TextTip;
}(_react2.default.Component);

TextTip.defaultProps = {
    prefix: 'zui'
};
exports.default = TextTip;