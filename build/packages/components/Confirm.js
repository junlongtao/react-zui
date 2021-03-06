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

require('./less/confirm.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Mask = require('./Mask');

var _Mask2 = _interopRequireDefault(_Mask);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Confirm = function (_React$Component) {
    (0, _inherits3.default)(Confirm, _React$Component);

    function Confirm() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Confirm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Confirm.__proto__ || (0, _getPrototypeOf2.default)(Confirm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            visible: false
        }, _this.componentWillReceiveProps = function (nextProps) {
            _this.setState({ visible: nextProps.visible });
        }, _this.render = function () {
            var prefix = _this.props.prefix;
            var visible = _this.state.visible;
            return visible ? _react2.default.createElement(
                'div',
                { className: prefix + '-confirm' },
                _react2.default.createElement(_Mask2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: prefix + '-confirm-wrap', style: { top: _this.props.top } },
                    _this.props.title && _react2.default.createElement(
                        'div',
                        { className: prefix + '-confirm-header' },
                        _this.props.title
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: prefix + '-confirm-content' },
                        _this.props.children
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: prefix + '-confirm-footer clear' },
                        _react2.default.createElement(
                            _Button2.default,
                            { type: 'plain', className: prefix + '-confirm-button', onClick: function onClick() {
                                    _this.setState({ visible: false });
                                    _this.props.onCancel();
                                } },
                            _this.props.cancelText
                        ),
                        _react2.default.createElement(
                            _Button2.default,
                            { className: prefix + '-confirm-button', onClick: function onClick() {
                                    _this.setState({ visible: false });
                                    _this.props.onSubmit();
                                } },
                            _this.props.submitText
                        )
                    )
                )
            ) : null;
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Confirm;
}(_react2.default.Component);

Confirm.defaultProps = {
    title: '',
    top: '40%',
    prefix: 'zui',
    visible: false,
    cancelText: '取消',
    submitText: '确认',
    onCancel: function onCancel() {},
    onSubmit: function onSubmit() {}
};
exports.default = Confirm;