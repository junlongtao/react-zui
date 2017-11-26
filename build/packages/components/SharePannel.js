/**
 * 邀请页面
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

require('./less/share-pannel.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Mask = require('./Mask');

var _Mask2 = _interopRequireDefault(_Mask);

var _util = require('../util');

var _util2 = _interopRequireDefault(_util);

var _QRCode = require('./QRCode');

var _QRCode2 = _interopRequireDefault(_QRCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SharePannel = function (_React$Component) {
    (0, _inherits3.default)(SharePannel, _React$Component);

    function SharePannel() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, SharePannel);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SharePannel.__proto__ || (0, _getPrototypeOf2.default)(SharePannel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            maskVisible: false,
            qrVisible: false
        }, _this.onShareClick = function () {
            if (_util2.default.os.wechat) {
                _this.setState({
                    maskVisible: true
                });
            } else {
                _this.setState({
                    qrVisible: true
                });
            }
        }, _this.onCopyLinkClick = function () {
            _this.refs.link.select();
            document.execCommand("Copy");
            _util2.default.toast('链接已复制');
        }, _this.render = function () {
            var prefix = _this.props.prefix;
            return _this.props.visible ? _react2.default.createElement(
                'div',
                { className: prefix + '-share-pannel' },
                _react2.default.createElement(
                    'h4',
                    null,
                    _this.props.header,
                    _react2.default.createElement(_Icon2.default, { type: 'close', onClick: _this.props.onClose })
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                        'li',
                        { className: 'cursor', onClick: _this.onShareClick },
                        _react2.default.createElement(_Icon2.default, { type: 'weixin' }),
                        '\u5FAE\u4FE1'
                    ),
                    _react2.default.createElement(
                        'li',
                        { className: 'cursor', onClick: _this.onShareClick },
                        _react2.default.createElement(_Icon2.default, { type: 'pengyouquan' }),
                        '\u670B\u53CB\u5708'
                    ),
                    _util2.default.os.iPhone || _util2.default.os.android ? null : _react2.default.createElement(
                        'li',
                        { className: 'cursor', onClick: _this.onCopyLinkClick },
                        _react2.default.createElement(_Icon2.default, { type: 'link' }),
                        '\u590D\u5236\u94FE\u63A5'
                    )
                ),
                _this.state.maskVisible ? _react2.default.createElement(
                    'div',
                    { className: _this.props.prefix + "-share-pannel-mask" },
                    _react2.default.createElement(_Mask2.default, null),
                    _react2.default.createElement(_Icon2.default, { type: 'wanjiantou' }),
                    _react2.default.createElement(
                        'p',
                        null,
                        '\u70B9\u51FB\u53F3\u4E0A\u89D2\u5206\u4EAB\u7ED9\u597D\u53CB'
                    ),
                    _react2.default.createElement(_Icon2.default, { type: 'close', onClick: function onClick() {
                            _this.setState({ maskVisible: false });
                        } })
                ) : null,
                _this.state.qrVisible ? _react2.default.createElement(
                    'div',
                    { className: _this.props.prefix + "-share-pannel-mask" },
                    _react2.default.createElement(_Mask2.default, null),
                    _react2.default.createElement(_QRCode2.default, { text: _this.props.link }),
                    _react2.default.createElement(_Icon2.default, { type: 'close', onClick: function onClick() {
                            _this.setState({ qrVisible: false });
                        } })
                ) : null,
                _react2.default.createElement('textarea', { ref: 'link', style: { opacity: 0 }, value: _this.props.link, onChange: function onChange() {} })
            ) : null;
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return SharePannel;
}(_react2.default.Component);

SharePannel.defaultProps = {
    link: '',
    header: '分享至',
    prefix: 'zui',
    visible: false
};
exports.default = SharePannel;