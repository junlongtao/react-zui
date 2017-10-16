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

var _Util = require('../Util');

var _Util2 = _interopRequireDefault(_Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = function (_React$Component) {
    (0, _inherits3.default)(Link, _React$Component);

    function Link() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Link);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function () {
            if (_this.props.href.indexOf('tel:') != -1) {
                return false;
            }
            if (_this.props.href.indexOf('mailto:') != -1) {
                return false;
            }

            _Util2.default.assign(_this.props.href);
        }, _this.renderHref = function () {
            if (_this.props.href.indexOf('tel:') != -1) {
                return _this.props.href;
            }
            if (_this.props.href.indexOf('mailto:') != -1) {
                return _this.props.href;
            }

            return 'javascript:;';
        }, _this.render = function () {
            var prefix = _this.props.prefix;
            return _react2.default.createElement(
                'a',
                { href: _this.renderHref(), className: prefix + '-link ' + _this.props.className, onClick: _this.onClick },
                _this.props.children
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Link;
}(_react2.default.Component);

Link.defaultProps = {
    prefix: 'weui',
    href: '',
    className: ''
};
exports.default = Link;
module.exports = exports['default'];