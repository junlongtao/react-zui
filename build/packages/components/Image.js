/**
 * image组件
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = function (_React$Component) {
    (0, _inherits3.default)(Image, _React$Component);

    function Image() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Image);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Image.__proto__ || (0, _getPrototypeOf2.default)(Image)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            status: 'loading'
        }, _this.render = function () {
            var cls = "weui_image_" + _this.state.status + ' ' + _this.props.className;
            return _react2.default.createElement('img', { title: '\u52A0\u8F7D\u4E2D', className: cls, src: _this.props.src, onLoad: function onLoad() {
                    _this.setState({
                        status: 'done'
                    });
                }, onClick: _this.props.onClick });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Image;
}(_react2.default.Component);

exports.default = Image;
module.exports = exports['default'];