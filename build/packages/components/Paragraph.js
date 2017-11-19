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

require('./less/paragraph.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('../util');

var _util2 = _interopRequireDefault(_util);

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
            var prefix = _this.props.prefix;
            return _react2.default.createElement('p', { className: prefix + '-paragraph ' + _this.props.className, dangerouslySetInnerHTML: {
                    __html: _this.props.children.replace(/(\r)*\n/g, "<br/>")
                } });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Paragraph;
}(_react2.default.Component);

Paragraph.defaultProps = {
    prefix: 'zui',
    className: '',
    children: ''
};
exports.default = Paragraph;