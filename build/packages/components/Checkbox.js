/**
 * 单选框组件
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

require('./less/checkbox.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function (_React$Component) {
    (0, _inherits3.default)(Checkbox, _React$Component);

    function Checkbox() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Checkbox);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Checkbox.__proto__ || (0, _getPrototypeOf2.default)(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillMount = function () {
            _this.setState({
                value: _this.props.value
            });
        }, _this.render = function () {
            var prefix = _this.props.prefix;
            return _react2.default.createElement(
                'span',
                { className: prefix + '-checkbox ' + _this.props.className, onClick: function onClick() {
                        _this.props.onChange(!_this.state.value);
                        _this.setState({ value: !_this.state.value });
                    } },
                _this.state.value ? _react2.default.createElement(_Icon2.default, { type: 'xuanze' }) : '■■'
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Checkbox;
}(_react2.default.Component);

Checkbox.defaultProps = {
    prefix: 'zui',
    value: false,
    onChange: function onChange() {}
};
exports.default = Checkbox;