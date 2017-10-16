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

var DownloadPatch = function (_React$Component) {
    (0, _inherits3.default)(DownloadPatch, _React$Component);

    function DownloadPatch() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, DownloadPatch);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DownloadPatch.__proto__ || (0, _getPrototypeOf2.default)(DownloadPatch)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            if (_Util2.default.os.android || _Util2.default.os.iPhone) {
                return null;
            }
            return _react2.default.createElement(
                'div',
                { className: 'download_patch' },
                _react2.default.createElement(
                    'p',
                    null,
                    '\u667A\u7B79APP\u6B63\u5F0F\u4E0A\u7EBF'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    '\u88C5\u5728\u53E3\u888B\u91CC\u7684\u4EBA\u624D/\u4EFB\u52A1\u5E93, \u4E0D\u6765\u8BD5\u8BD5\u4E48?'
                ),
                _react2.default.createElement('img', { className: 'qr_code', src: '/static/assets/download_qr_code.jpg' }),
                _react2.default.createElement(
                    'p',
                    null,
                    '\u5173\u6CE8\u667A\u7B79\u516C\u4F17\u53F7'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    '\u6700\u65B0\u4EBA\u624D/\u4EFB\u52A1\u63A8\u8350, \u6BCF\u5468\u4E00\u53D1\u5E03'
                ),
                _react2.default.createElement('img', { className: 'qr_code', src: '/static/assets/follow_qr_code.jpg' }),
                _react2.default.createElement('img', { className: 'long_logo', src: '/static/assets/long_logo.png' }),
                _react2.default.createElement(
                    'p',
                    { className: 'slogan' },
                    '\u4E92\u8054\u7F51\u9AD8\u7EA7\u4EBA\u624D\u4E00\u7AD9\u5F0F\u76F4\u79DF\u5E73\u53F0'
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return DownloadPatch;
}(_react2.default.Component); /**
                               *侧边栏下载App和关注公账号二维码
                               */


exports.default = DownloadPatch;
module.exports = exports['default'];