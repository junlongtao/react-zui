/**
 * page组件
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Notify = require('./Notify');

var _Notify2 = _interopRequireDefault(_Notify);

var _Loading = require('./Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _ReturnTop = require('./ReturnTop');

var _ReturnTop2 = _interopRequireDefault(_ReturnTop);

var _ConsultPatch = require('./ConsultPatch');

var _ConsultPatch2 = _interopRequireDefault(_ConsultPatch);

var _DownloadPatch = require('./DownloadPatch');

var _DownloadPatch2 = _interopRequireDefault(_DownloadPatch);

var _Util = require('../Util');

var _Util2 = _interopRequireDefault(_Util);

var _classnames = require('../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function (_React$Component) {
    (0, _inherits3.default)(Page, _React$Component);

    function Page() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Page);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            online: navigator.onLine,
            notifyData: '',
            notifyVisible: false
        }, _this.handleAppPushData = function (data) {
            _Util2.default.jsonlog(data);
            switch (data.msg_type) {
                case 'private_chat':
                    _Util2.default.slideIn('#workbench/private_chat?conversation_type=' + data.conversation_type + '&target_id=' + data.user_id);
                    break;

                case 'group_chat':
                    _Util2.default.slideIn('#workbench/group_chat?conversation_type=' + data.conversation_type + '&target_id=' + data.target_id);
                    break;
            }
        }, _this.registerPushListener = function () {
            window.registerPushListenerIntervalId = _Util2.default.setInterval(function () {
                if ((typeof api === 'undefined' ? 'undefined' : (0, _typeof3.default)(api)) == 'object') {
                    //注册小米推送,监听推送消息
                    api.require('mipush').registerPush({
                        appId: '2882303761517533099',
                        appKey: '5891753372099'
                    });
                    //设置消息监听
                    api.require('mipush').setListener(function (ret) {
                        var data = void 0;
                        if (ret['payload[user_id]']) {
                            data = {
                                content: ret['payload[content]'],
                                user_id: ret['payload[user_id]'],
                                msg_type: ret['payload[msg_type]'],
                                target_id: ret['payload[target_id]'],
                                message_type: ret['payload[message_type]'],
                                conversation_type: ret['payload[conversation_type]']
                            };
                        } else {
                            data = JSON.parse(ret.content);
                        }
                        if (_this.props.onReceiveAppPush) {
                            _this.props.onReceiveAppPush(data);
                            return false;
                        }
                        _this.setState({
                            notifyData: data,
                            notifyVisible: true
                        });
                    });
                    //监听通知点击事件
                    api.addEventListener({
                        name: 'appintent'
                    }, function (ret, err) {
                        if (ret.appParam.key_message) {
                            ret = ret.appParam.key_message.match(/content=\{(.*?)\},/);
                            _this.handleAppPushData(JSON.parse(ret[1]));
                        }
                    });
                    //移除interval
                    _Util2.default.clearInterval(window.registerPushListenerIntervalId);
                }
            }, 500);
        }, _this.componentDidMount = function () {
            //移除ajax loading
            _Util2.default.ajaxLoading(false);

            //监听网络状态
            window.addEventListener("online", function () {
                _this.setState({
                    online: true
                });
            }, false);
            window.addEventListener("offline", function () {
                _this.setState({
                    online: false
                });
            }, false);

            //回调跳转
            var wxrurl = _Util2.default.getStorage('wxrurl');
            if (wxrurl && _this.props.title != '绑定手机号' && _this.props.title != '设置密码' && _this.props.title !== '个人资料') {
                _Util2.default.removeStorage('wxrurl');
                _Util2.default.replace(wxrurl);
            }

            //滚动至顶部
            switch (true) {
                case location.href.indexOf('task/list') != -1:
                case location.href.indexOf('talent/list') != -1:
                    break;

                default:
                    window.scrollTo(0, 0);
            }

            //配置微信jssdk
            if (_Util2.default.os.wechat) {
                WeixinService.config();
            }

            //更新标题
            if (_this.props.title) {
                _this.updateTitle(_this.props.title);
            }

            //移除过期的interval
            _Util2.default.clearInterval();

            //清除talent_list, task_list内存中的数据
            _this.clearMemoryStorage();

            //监听App push消息
            if (_Util2.default.os.ios || _Util2.default.os.android) {
                _this.registerPushListener();
            }

            //友盟事件统计
            _czc.push(["_trackPageview", location.href, location.href]);

            //移除page_animate
            window.setTimeout(function () {
                _Util2.default.setStorage('page_animate', '');
            }, 1000);

            //更新login_at
            UserService.updateActiveAt({ loading: false });
        }, _this.clearMemoryStorage = function () {
            var hash = window.location.hash.split('?')[0];
            var excluded = ['#/task/list', '#/task/detail', '#/task/project_detail', '#/task/applicant'];
            if (excluded.indexOf(hash) === -1) {
                window.task_list = null;
            }
            excluded = ['#/talent/list', '#/talent/detail'];
            if (excluded.indexOf(hash) === -1) {
                window.talent_list = null;
            }
        }, _this.componentWillReceiveProps = function (nextProps) {
            _this.updateTitle(nextProps.title);
        }, _this.updateTitle = function (title) {
            if (title === document.title) {
                return false;
            }
            document.title = title;
            var iframeElement = document.createElement('iframe');
            iframeElement.setAttribute('src', './favicon.ico');
            iframeElement.style.display = 'none';
            var body = document.getElementsByTagName('body')[0];
            iframeElement.onload = function () {
                setTimeout(function () {
                    iframeElement.onload = null;
                    body.removeChild(iframeElement);
                }, 0);
            };
            body.appendChild(iframeElement);
        }, _this.renderHeader = function () {
            return _this.props.title ? _react2.default.createElement(_Header2.default, {
                title: _this.props.title,
                back: _this.props.back,
                shareContent: _this.props.appShareContent,
                prev: _this.props.prev
            }) : null;
        }, _this.render = function () {
            var _classNames;

            var className = _this.props.className;

            var pageAnimate = _Util2.default.getStorage('page_animate');
            var cls = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, className, className), (0, _defineProperty3.default)(_classNames, 'slide_in', pageAnimate === 'slide_in'), (0, _defineProperty3.default)(_classNames, 'slide_up', pageAnimate === 'slide_up'), (0, _defineProperty3.default)(_classNames, 'weui_page', true), (0, _defineProperty3.default)(_classNames, 'weui_page_no_header', _Util2.default.os.wechat && (_Util2.default.os.ios || _Util2.default.os.android)), (0, _defineProperty3.default)(_classNames, 'weui_page_not_app', _Util2.default.os.apicloud ? false : true), (0, _defineProperty3.default)(_classNames, 'weui_page_network_error', _this.state.online ? false : true), _classNames));

            if (!_this.state.online) {
                return _react2.default.createElement(
                    'div',
                    { className: cls },
                    _this.renderHeader(),
                    _react2.default.createElement(
                        'div',
                        { className: 'network_error' },
                        _react2.default.createElement('img', { src: networkimg }),
                        _react2.default.createElement(
                            'div',
                            { className: 'tip_text' },
                            '\u7F51\u7EDC\u4E0D\u53EF\u7528'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'tip_text small' },
                            '\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\u8FDE\u63A5'
                        ),
                        _react2.default.createElement(
                            _Button2.default,
                            { onClick: function onClick() {
                                    window.location.reload();
                                } },
                            '\u70B9\u51FB\u91CD\u8BD5'
                        )
                    )
                );
            }

            if (_this.props.blank) {
                return _react2.default.createElement(
                    'div',
                    { className: cls },
                    _this.renderHeader(),
                    _react2.default.createElement(
                        'div',
                        { className: 'loading_text' },
                        _react2.default.createElement(
                            'div',
                            { className: 'big clear' },
                            'ZHICHOU'
                        ),
                        _react2.default.createElement('div', { className: 'mask' }),
                        '\u79DF\u725B\u4EBA\u4E0A\u667A\u7B79'
                    )
                );
            }

            return _react2.default.createElement(
                'div',
                { className: cls },
                _this.renderHeader(),
                _this.props.children,
                _react2.default.createElement(_DownloadPatch2.default, null),
                _react2.default.createElement(_Loading2.default, { id: 'ajax_loading' }),
                _react2.default.createElement(_Notify2.default, { content: '\u60A8\u6536\u5230\u4E86\u4E00\u6761\u65B0\u6D88\u606F', data: _this.state.notifyData, visible: _this.state.notifyVisible,
                    onClick: _this.handleAppPushData }),
                _this.props.returnTop ? _react2.default.createElement(_ReturnTop2.default, null) : null
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Page;
}(_react2.default.Component);

Page.propTypes = {
    title: _react2.default.PropTypes.string
};
Page.defaultProps = {
    blank: false,
    onlyWx: false,
    returnTop: true,
    title: _Util2.default.conf('appName')
};
exports.default = Page;
module.exports = exports['default'];