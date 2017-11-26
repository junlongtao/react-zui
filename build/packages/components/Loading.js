/**
 * loading组件
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

require('./less/loading.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function (_React$Component) {
    (0, _inherits3.default)(Loading, _React$Component);

    function Loading() {
        (0, _classCallCheck3.default)(this, Loading);
        return (0, _possibleConstructorReturn3.default)(this, (Loading.__proto__ || (0, _getPrototypeOf2.default)(Loading)).apply(this, arguments));
    }

    (0, _createClass3.default)(Loading, [{
        key: 'render',
        value: function render() {
            var prefix = this.props.prefix;
            var display = this.props.visible ? 'block' : 'none';
            return _react2.default.createElement(
                'div',
                { className: prefix + "-loading", id: this.props.id, style: { display: display } },
                _react2.default.createElement(
                    'div',
                    { className: 'loading' },
                    _react2.default.createElement('div', { className: 'dot white' }),
                    _react2.default.createElement('div', { className: 'dot' }),
                    _react2.default.createElement('div', { className: 'dot' }),
                    _react2.default.createElement('div', { className: 'dot' }),
                    _react2.default.createElement('div', { className: 'dot' })
                )
            );
        }
    }]);
    return Loading;
}(_react2.default.Component);

Loading.defaultProps = {
    prefix: 'zui',
    visible: true
};
exports.default = Loading;