/**
 * Created by jf on 15/12/10.
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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioItem = function (_React$Component) {
    (0, _inherits3.default)(RadioItem, _React$Component);

    function RadioItem() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RadioItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RadioItem.__proto__ || (0, _getPrototypeOf2.default)(RadioItem)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var prefix = _this.props.prefix;
            var cls = _this.props.active ? 'active' : '';
            return _react2.default.createElement(
                'div',
                { className: prefix + '-item cursor ' + cls, onClick: function onClick() {
                        _this.props.onChange(_this.props.value);
                    } },
                _react2.default.createElement(
                    'span',
                    { className: 'circle' },
                    _react2.default.createElement('i', { className: 'inner' })
                ),
                _this.props.children
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return RadioItem;
}(_react2.default.Component);

RadioItem.defaultProps = {
    prefix: 'weui-radio',
    onChange: function onChange() {},
    value: ''
};

var Radio = function (_React$Component2) {
    (0, _inherits3.default)(Radio, _React$Component2);

    function Radio() {
        var _ref2;

        var _temp2, _this2, _ret2;

        (0, _classCallCheck3.default)(this, Radio);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Radio.__proto__ || (0, _getPrototypeOf2.default)(Radio)).call.apply(_ref2, [this].concat(args))), _this2), _this2.render = function () {
            var prefix = _this2.props.prefix;
            var value = _this2.props.value || _this2.props.children[0].props.value;
            return _react2.default.createElement(
                'div',
                { className: prefix + '-radio clear' },
                _this2.props.children.map(function (item, key) {
                    var active = value === item.props.value ? true : false;
                    return _react2.default.createElement(
                        Radio.Item,
                        { key: key,
                            active: active,
                            value: item.props.value,
                            onChange: _this2.props.onChange },
                        item.props.children
                    );
                })
            );
        }, _temp2), (0, _possibleConstructorReturn3.default)(_this2, _ret2);
    }

    return Radio;
}(_react2.default.Component);

Radio.defaultProps = {
    children: [],
    prefix: 'weui',
    value: ''
};


Radio.Item = RadioItem;
exports.default = Radio;
module.exports = exports['default'];