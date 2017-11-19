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

require('./less/qr-code.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _qrcodeGenerator = require('qrcode-generator');

var _qrcodeGenerator2 = _interopRequireDefault(_qrcodeGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Qrcode = function (_React$Component) {
    (0, _inherits3.default)(Qrcode, _React$Component);

    function Qrcode() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Qrcode);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Qrcode.__proto__ || (0, _getPrototypeOf2.default)(Qrcode)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            if (!_this.props.text) {
                return null;
            }

            var typeNumber = 8;
            var errorCorrectionLevel = 'L';
            var qr = (0, _qrcodeGenerator2.default)(typeNumber, errorCorrectionLevel);
            qr.addData(_this.props.text);
            qr.make();
            return _react2.default.createElement('div', { className: 'zui-qr-code', dangerouslySetInnerHTML: {
                    __html: qr.createImgTag(4, 10)
                } });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Qrcode;
}(_react2.default.Component); /**
                               *二维码图片组件
                               */

exports.default = Qrcode;