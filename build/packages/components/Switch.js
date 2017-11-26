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

require('./less/switch.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Switch = function (_React$Component) {
    (0, _inherits3.default)(Switch, _React$Component);

    function Switch() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Switch);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Switch.__proto__ || (0, _getPrototypeOf2.default)(Switch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: 1
        }, _this.componentWillReceiveProps = function (nextProps) {
            _this.setState({ value: nextProps.value });
        }, _this.render = function () {
            var prefix = _this.props.prefix;
            var activeCls = _this.state.value == 1 ? 'active' : '';
            return _react2.default.createElement(
                'span',
                { className: prefix + '-switch ' + activeCls, onClick: function onClick() {
                        var value = _this.state.value ? 0 : 1;
                        _this.setState({ value: value });
                        _this.props.onChange && _this.props.onChange(value);
                    } },
                _react2.default.createElement('span', { className: prefix + '-switch-circle' })
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Switch;
}(_react2.default.Component);

Switch.defaultProps = {
    value: true,
    prefix: 'zui',
    onChange: null
};
exports.default = Switch;