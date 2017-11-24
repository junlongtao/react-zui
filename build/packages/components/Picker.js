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

require('./less/picker.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Picker = function (_React$Component) {
    (0, _inherits3.default)(Picker, _React$Component);

    function Picker() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Picker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Picker.__proto__ || (0, _getPrototypeOf2.default)(Picker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            status: ''
        }, _this.componentWillReceiveProps = function (nextProps) {
            _this.setState({ status: nextProps.status });
        }, _this.onBackClick = function () {
            _this.setState({ status: 'close' });
            _this.props.onBackClick();
        }, _this.render = function () {
            var status = _this.state.status;
            var prefix = _this.props.prefix;
            var className = _this.props.className;
            return _react2.default.createElement(
                'div',
                { className: prefix + '-picker ' + className + ' ' + status },
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-picker-name" },
                    _react2.default.createElement(_Icon2.default, { type: 'back', onClick: _this.onBackClick }),
                    _this.props.name
                ),
                _react2.default.createElement(
                    'div',
                    { className: prefix + "-picker-content" },
                    _this.props.children
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Picker;
}(_react2.default.Component);

Picker.defaultProps = {
    status: '',
    prefix: 'zui',
    name: '请选择',
    onChange: function onChange() {},
    onBackClick: function onBackClick() {}
};
exports.default = Picker;