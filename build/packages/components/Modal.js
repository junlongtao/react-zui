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

var _Mask = require('./Mask');

var _Mask2 = _interopRequireDefault(_Mask);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function (_React$Component) {
    (0, _inherits3.default)(Modal, _React$Component);

    function Modal() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Modal);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            status: ''
        }, _this.componentWillReceiveProps = function (nextProps) {
            _this.setState({
                status: nextProps.status
            });
        }, _this.render = function () {
            var cls = _this.props.className;
            var status = _this.state.status;
            var prefixCls = _this.props.prefixCls;
            return _react2.default.createElement(
                'div',
                { className: prefixCls + '-modal ' + cls + ' ' + status },
                _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-modal-content', ref: prefixCls + '-modal-content' },
                    _this.props.children,
                    _react2.default.createElement(
                        'div',
                        { className: prefixCls + '-modal-close', onClick: function onClick() {
                                _this.setState({
                                    status: 'close'
                                });
                            } },
                        _react2.default.createElement('div', { className: 'line' }),
                        _react2.default.createElement(_Icon2.default, { type: 'guanbi' })
                    )
                ),
                _react2.default.createElement(_Mask2.default, { onClick: function onClick() {
                        _this.setState({
                            status: 'close'
                        });
                    } })
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Modal;
}(_react2.default.Component);

Modal.defaultProps = {
    prefixCls: 'weui'
};
exports.default = Modal;
module.exports = exports['default'];