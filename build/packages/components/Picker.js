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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Picker = function (_React$Component) {
    (0, _inherits3.default)(Picker, _React$Component);

    function Picker() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Picker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Picker.__proto__ || (0, _getPrototypeOf2.default)(Picker)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var status = _this.props.status;
            var prefixCls = _this.props.prefixCls;
            var value = _this.props.value ? _this.props.value : _this.props.data[0];
            return _react2.default.createElement(
                'div',
                { className: prefixCls + '-picker ' + status },
                _react2.default.createElement(
                    'div',
                    { className: prefixCls + "-picker-name" },
                    _react2.default.createElement(_Icon2.default, { type: 'back', onClick: _this.props.onBackClick }),
                    _this.props.name
                ),
                _this.props.data.map(function (item, key) {
                    return _react2.default.createElement(
                        'div',
                        { key: key, className: prefixCls + "-picker-option", onClick: function onClick() {
                                _this.props.onChange(item);
                                _this.props.onBackClick();
                            } },
                        item,
                        item === value ? _react2.default.createElement(_Icon2.default, { type: 'xuanze' }) : null
                    );
                })
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Picker;
}(_react2.default.Component);

Picker.defaultProps = {
    prefixCls: 'weui',
    status: ''
};
exports.default = Picker;
module.exports = exports['default'];