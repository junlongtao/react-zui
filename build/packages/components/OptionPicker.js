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

require('./less/option-picker.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Picker = require('./Picker');

var _Picker2 = _interopRequireDefault(_Picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionPicker = function (_React$Component) {
    (0, _inherits3.default)(OptionPicker, _React$Component);

    function OptionPicker() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, OptionPicker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = OptionPicker.__proto__ || (0, _getPrototypeOf2.default)(OptionPicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            status: ''
        }, _this.componentWillReceiveProps = function (nextProps) {
            _this.setState({ status: nextProps.status });
        }, _this.render = function () {
            var prefix = _this.props.prefix;
            var status = _this.state.status;
            var value = _this.props.value;
            return _react2.default.createElement(
                _Picker2.default,
                { className: prefix + '-option-picker', name: '\u8BF7\u9009\u62E9', status: status },
                _react2.default.createElement(
                    'div',
                    { className: prefix + '-option-picker-option-list' },
                    _this.props.data.map(function (item, key) {
                        return _react2.default.createElement(
                            'div',
                            { key: key, className: prefix + "-option-picker-option-item", onClick: function onClick() {
                                    _this.props.onChange(item);
                                } },
                            item,
                            item == value ? _react2.default.createElement(_Icon2.default, { type: 'check' }) : null
                        );
                    })
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return OptionPicker;
}(_react2.default.Component);

OptionPicker.defaultProps = {
    data: [],
    status: '',
    prefix: 'zui',
    onChange: function onChange() {}
};
exports.default = OptionPicker;