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

require('./less/radio.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radio = function (_React$Component) {
    (0, _inherits3.default)(Radio, _React$Component);

    function Radio() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Radio);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Radio.__proto__ || (0, _getPrototypeOf2.default)(Radio)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var prefix = _this.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + "-radio" },
                _this.props.data.map(function (item, key) {
                    var cls = item == _this.props.value ? 'active' : '';
                    return _react2.default.createElement(
                        'label',
                        { className: prefix + '-radio-item ' + cls, key: key, onClick: function onClick() {
                                _this.props.onChange(item);
                            } },
                        _react2.default.createElement(
                            'span',
                            { className: prefix + "-radio-item-circle" },
                            _react2.default.createElement('i', { className: 'inner' })
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: prefix + "-radio-item-content" },
                            item
                        )
                    );
                })
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Radio;
}(_react2.default.Component);

Radio.defaultProps = {
    data: [],
    value: '',
    prefix: 'zui'
};
exports.default = Radio;