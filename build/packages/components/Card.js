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

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Util = require('../Util');

var _Util2 = _interopRequireDefault(_Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 卡片组件
 */
var Card = function (_React$Component) {
    (0, _inherits3.default)(Card, _React$Component);

    function Card() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Card);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Card.__proto__ || (0, _getPrototypeOf2.default)(Card)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            collapseVisible: false,
            collapse: false
        }, _this.componentDidMount = function () {
            window.setTimeout(function () {
                _this.refs.weui_card_wrap && _this.setState({
                    collapse: _this.refs.weui_card_wrap.clientHeight <= 230 ? false : true,
                    collapseVisible: _this.refs.weui_card_wrap.clientHeight <= 230 ? false : true
                });
            }, 1000);
        }, _this.toggleCollapse = function () {
            _this.setState({
                collapse: !_this.state.collapse
            });
        }, _this.render = function () {
            var collapseCls = _this.state.collapse ? '' : 'uncollapse';
            var arrowCls = _this.props.arrow == 'horizontal' ? 'arrow' : '';
            if (!_this.props.collapsable) {
                return _react2.default.createElement(
                    'div',
                    { className: "weui_card uncollapse " + arrowCls + " " + _this.props.className,
                        onClick: _this.props.onClick },
                    _react2.default.createElement(
                        'div',
                        { ref: 'weui_card_wrap', className: 'wrap' },
                        _this.props.triangle == 1 ? _react2.default.createElement('div', { className: 'triangle' }) : null,
                        _this.props.arrow == 'horizontal' ? _react2.default.createElement(_Icon2.default, { type: 'right', className: 'arrow' }) : null,
                        _this.props.children
                    )
                );
            }
            return _react2.default.createElement(
                'div',
                { className: "weui_card " + collapseCls + ' ' + arrowCls + ' ' + _this.props.className,
                    onClick: _this.props.onClick },
                _react2.default.createElement(
                    'div',
                    { ref: 'weui_card_wrap', className: 'wrap' },
                    _this.props.triangle ? _react2.default.createElement('div', { className: 'triangle' }) : null,
                    _this.props.arrow == 'horizontal' ? _react2.default.createElement(_Icon2.default, { type: 'right', className: 'arrow' }) : null,
                    _this.props.children
                ),
                _this.state.collapseVisible ? _react2.default.createElement(_Icon2.default, { type: 'xiala', className: 'cursor', onClick: _this.toggleCollapse }) : null
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Card;
}(_react2.default.Component);

Card.defaultProps = {
    arrow: '',
    triangle: true,
    collapsable: false
};
exports.default = Card;
module.exports = exports['default'];