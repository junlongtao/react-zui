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

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _checkbox_checked = require('./checkbox_checked.png');

var _checkbox_checked2 = _interopRequireDefault(_checkbox_checked);

var _checkbox_uncheck = require('./checkbox_uncheck.png');

var _checkbox_uncheck2 = _interopRequireDefault(_checkbox_uncheck);

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
                checked: _this.props.checked
            });
        }, _this.toggleCheck = function () {
            var checked = !_this.state.checked;
            _this.setState({
                checked: checked
            });
            _this.props.onChange(checked);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Checkbox, [{
        key: 'render',
        value: function render() {
            var checkImg = this.state.checked ? _checkbox_checked2.default : _checkbox_uncheck2.default;
            return _react2.default.createElement(
                'div',
                { className: 'weui_checkbox', onClick: this.toggleCheck },
                _react2.default.createElement('img', { src: checkImg })
            );
        }
    }]);
    return Checkbox;
}(_react2.default.Component);

exports.default = Checkbox;
module.exports = exports['default'];