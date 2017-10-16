/**
 * header
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Util = require('../Util');

var _Util2 = _interopRequireDefault(_Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_React$Component) {
    (0, _inherits3.default)(Header, _React$Component);

    function Header() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Header);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call.apply(_ref, [this].concat(args))), _this), _this.onBackClick = function () {
            if (_this.props.prev) {
                location.assign(_this.props.prev);
            } else {
                history.back();
            }
        }, _this.showShareActionSheet = function () {
            var icons = [{ iconName: 'icon iconfont icon-weixin', title: '微信好友' }, { iconName: 'icon iconfont icon-pengyouquan', title: '朋友圈' }];
            ActionSheet.showShareActionSheetWithOptions({
                options: icons,
                message: '分享',
                cancelButtonText: '取消'
            }, function (buttonIndex) {
                _this.setState({ clicked1: buttonIndex > -1 ? icons[buttonIndex].title : 'cancel' });
                if ((typeof api === 'undefined' ? 'undefined' : (0, _typeof3.default)(api)) == 'object' && !_this.state.wechatInstalled) {
                    _Util2.default.toast('您未安装微信,暂时无法使用微信分享');
                    return false;
                }
                if ((typeof api === 'undefined' ? 'undefined' : (0, _typeof3.default)(api)) == "object") {
                    var wx = api.require('wx');
                    var content = _this.props.shareContent;
                    wx.shareWebpage({
                        scene: buttonIndex == 0 ? 'session' : 'timeline',
                        title: content.title,
                        description: content.desc,
                        thumb: content.imgUrl,
                        contentUrl: content.link
                    }, function (ret, err) {
                        if (ret.status) {
                            _Util2.default.toast('分享成功', 1);
                        } else if (err.code == 2) {
                            _Util2.default.toast('取消分享', 1);
                        } else {
                            _Util2.default.errorTip('分享失败:' + err.code + ', 请稍后再试');
                        }
                    });
                }
            });
        }, _this.render = function () {
            //只有微信pc版显示header,微信手机端不显示header
            if (_Util2.default.os.wechat && _Util2.default.os.ios) {
                return null;
            }
            if (_Util2.default.os.wechat && _Util2.default.os.android) {
                return null;
            }

            var prefix = _this.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + '-header ' + _this.props.className },
                _react2.default.createElement(
                    'div',
                    { className: prefix + '-header-wrap' },
                    _this.props.back ? _react2.default.createElement(_Icon2.default, { type: 'back', className: 'cursor', onClick: _this.onBackClick }) : null,
                    _this.props.children
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Header;
}(_react2.default.Component);

Header.defaultProps = {
    prev: '',
    back: false,
    title: null,
    prefix: 'weui'
};
exports.default = Header;
module.exports = exports['default'];