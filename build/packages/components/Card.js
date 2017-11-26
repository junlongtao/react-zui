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

require('./less/card.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            collapsed: false
        }, _this.componentDidMount = function () {
            _this.setState({
                collapsed: _this.props.collapsed
            });
        }, _this.render = function () {
            var prefix = _this.props.prefix;
            return _react2.default.createElement(
                'div',
                { className: prefix + "-card " + _this.props.className, onClick: _this.props.onClick },
                _this.props.title ? _react2.default.createElement(
                    'div',
                    { className: prefix + '-card-header' },
                    _this.props.title
                ) : null,
                _react2.default.createElement(
                    'div',
                    { className: prefix + '-card-content', style: { maxHeight: _this.state.collapsed ? '200px' : '10000px' } },
                    _this.props.children
                ),
                _this.props.collapseVisible ? _react2.default.createElement(_Icon2.default, { type: _this.state.collapsed ? 'xiala' : 'shouqi', className: 'cursor', onClick: function onClick() {
                        _this.setState({ collapsed: !_this.state.collapsed });
                    } }) : null
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Card;
}(_react2.default.Component); /**
                               * 卡片组件
                               */


Card.defaultProps = {
    prefix: 'zui'
};
exports.default = Card;