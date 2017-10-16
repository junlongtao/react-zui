/**
 * 范围下拉列表组件
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RangeSelect = function (_React$Component) {
    (0, _inherits3.default)(RangeSelect, _React$Component);

    function RangeSelect() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RangeSelect);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RangeSelect.__proto__ || (0, _getPrototypeOf2.default)(RangeSelect)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            valueMin: 0,
            valueMax: 0
        }, _this.componentWillReceiveProps = function (nextProps) {
            _this.setState({
                valueMin: nextProps.valueMin,
                valueMax: nextProps.valueMax
            });
        }, _this.onValueMinChange = function (e) {
            var valueMin = parseInt(e.target.value);
            var valueMax = 0;
            if (valueMin >= parseInt(_this.state.valueMax)) {
                if (valueMin + _this.props.step > _this.props.max) {
                    valueMax = _this.props.max;
                } else {
                    valueMax = valueMin + _this.props.step;
                }
            } else {
                valueMax = _this.state.valueMax;
            }
            _this.setState({
                valueMin: valueMin,
                valueMax: valueMax
            });
            _this.props.onChange(valueMin, valueMax);
        }, _this.onValueMaxChange = function (e) {
            var valueMax = parseInt(e.target.value);
            var valueMin = 0;
            if (parseInt(_this.state.valueMin) >= valueMax) {
                if (valueMax - _this.props.step < _this.props.min) {
                    valueMin = _this.props.min;
                } else {
                    valueMin = valueMax - _this.props.step;
                }
            } else {
                valueMin = _this.state.valueMin;
            }
            _this.setState({
                valueMin: valueMin,
                valueMax: valueMax
            });
            _this.props.onChange(valueMin, valueMax);
        }, _this.renderMinOptions = function () {
            var min = _this.props.min;
            var max = _this.props.max;
            var step = _this.props.step;
            var options = [];
            for (var i = min; i < max; i += step) {
                options.push(_react2.default.createElement(
                    'option',
                    { key: i, value: i },
                    i
                ));
            }
            return options;
        }, _this.renderMaxOptions = function () {
            var min = _this.props.min;
            var max = _this.props.max;
            var step = _this.props.step;
            var options = [];
            for (var i = min + step; i < max; i += step) {
                options.push(_react2.default.createElement(
                    'option',
                    { key: i, value: i },
                    i
                ));
            }
            options.push(_react2.default.createElement(
                'option',
                { key: max },
                max
            ));
            return options;
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RangeSelect, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'children']);

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                weui_range_select: true
            }, className, className));
            var unit = this.props.unit ? _react2.default.createElement(
                'span',
                { className: 'unit' },
                this.props.unit
            ) : null;
            return _react2.default.createElement(
                'div',
                { className: cls },
                _react2.default.createElement(
                    'select',
                    { onChange: this.onValueMinChange, value: this.state.valueMin, dir: 'rtl',
                        className: 'min' },
                    this.renderMinOptions()
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'symbol' },
                    '~'
                ),
                _react2.default.createElement(
                    'select',
                    { onChange: this.onValueMaxChange, value: this.state.valueMax, dir: 'rtl',
                        className: 'max' },
                    this.renderMaxOptions()
                ),
                unit
            );
        }
    }]);
    return RangeSelect;
}(_react2.default.Component);

RangeSelect.propTypes = {
    min: _react2.default.PropTypes.number,
    valueMin: _react2.default.PropTypes.number,
    max: _react2.default.PropTypes.number,
    valueMax: _react2.default.PropTypes.number,
    step: _react2.default.PropTypes.number,
    onChange: _react2.default.PropTypes.func
};
exports.default = RangeSelect;
;
module.exports = exports['default'];