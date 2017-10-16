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

var Paragraph = function (_React$Component) {
    (0, _inherits3.default)(Paragraph, _React$Component);

    function Paragraph() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Paragraph);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Paragraph.__proto__ || (0, _getPrototypeOf2.default)(Paragraph)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var prefixCls = _this.props.prefixCls;
            var children = _Util2.default.replaceWrap(_this.props.children);
            var text = _this.props.max ? _Util2.default.maxLength(children, _this.props.max) : children;
            return _react2.default.createElement('p', { className: prefixCls + '-paragraph ' + _this.props.className, dangerouslySetInnerHTML: {
                    __html: text
                } });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Paragraph;
}(_react2.default.Component);

Paragraph.defaultProps = {
    prefixCls: 'weui',
    className: '',
    max: ''
};
exports.default = Paragraph;
module.exports = exports['default'];