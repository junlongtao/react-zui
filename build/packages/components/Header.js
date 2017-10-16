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

require('antd-mobile/lib/action-sheet/style');

var _actionSheet = require('antd-mobile/lib/action-sheet');

var _actionSheet2 = _interopRequireDefault(_actionSheet);

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

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            wechatInstalled: false
        }, _this.componentDidMount = function () {
            _actionSheet2.default.close();
            _Util2.default.wechatInstalled(function (installed) {
                _this.setState({
                    wechatInstalled: installed
                });
            });
        }, _this.onBackClick = function () {
            if (_this.props.prev) {
                _Util2.default.assign(_this.props.prev);
            } else {
                history.back();
            }
        }, _this.showShareActionSheet = function () {
            var icons = [{ iconName: 'icon iconfont icon-weixin', title: '微信好友' }, { iconName: 'icon iconfont icon-pengyouquan', title: '朋友圈' }];
            _actionSheet2.default.showShareActionSheetWithOptions({
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
        }, _this.renderTitle = function () {
            return _this.props.title;
        }, _this.renderBack = function () {
            return _this.props.back ? _react2.default.createElement(
                'div',
                { onClick: _this.onBackClick, className: 'back_wrap cursor' },
                _react2.default.createElement(_Icon2.default, { type: 'pullleft', width: '10', height: '20' })
            ) : null;
        }, _this.renderShare = function () {
            return _this.props.shareContent.link && _Util2.default.os.apicloud && _this.state.wechatInstalled ? _react2.default.createElement(
                'div',
                { onClick: _this.showShareActionSheet, className: 'share_wrap' },
                _react2.default.createElement(_Icon2.default, { type: 'fenxiang', width: '10', height: '20' })
            ) : null;
        }, _this.render = function () {
            if (_Util2.default.os.wechat && _Util2.default.os.ios) {
                return null;
            }
            if (_Util2.default.os.wechat && _Util2.default.os.android) {
                return null;
            }
            window.headerSlideDownCount = (window.headerSlideDownCount || 0) + 1;
            var cls = window.headerSlideDownCount > 1 ? '' : 'slide_down';
            return _react2.default.createElement(
                'div',
                { className: 'weui_header' },
                _react2.default.createElement(
                    'div',
                    { className: "wrap " + cls },
                    _this.renderBack(),
                    _this.renderTitle(),
                    _this.renderShare()
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Header;
}(_react2.default.Component);

Header.defaultProps = {
    prev: '',
    shareContent: {}
};
exports.default = Header;
module.exports = exports['default'];