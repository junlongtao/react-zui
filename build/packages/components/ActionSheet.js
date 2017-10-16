'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _index = require('../mask/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionSheet = function (_React$Component) {
    (0, _inherits3.default)(ActionSheet, _React$Component);

    function ActionSheet() {
        (0, _classCallCheck3.default)(this, ActionSheet);
        return (0, _possibleConstructorReturn3.default)(this, (ActionSheet.__proto__ || (0, _getPrototypeOf2.default)(ActionSheet)).apply(this, arguments));
    }

    (0, _createClass3.default)(ActionSheet, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                show = _props.show,
                onRequestClose = _props.onRequestClose;

            var className = (0, _classnames2.default)({
                weui_actionsheet: true,
                weui_actionsheet_toggle: show
            });

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_index2.default, { style: { display: show ? 'block' : 'none' }, onClick: onRequestClose }),
                _react2.default.createElement(
                    'div',
                    { className: className },
                    _react2.default.createElement(
                        'div',
                        { className: 'weui_actionsheet_menu' },
                        this._renderMenuItem()
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui_actionsheet_action' },
                        this._renderActions()
                    )
                )
            );
        }
    }, {
        key: '_renderMenuItem',
        value: function _renderMenuItem() {
            return this.props.menus.map(function (menu, idx) {
                var label = menu.label,
                    others = (0, _objectWithoutProperties3.default)(menu, ['label']);

                var className = (0, _classnames2.default)({
                    weui_actionsheet_cell: true
                });

                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ key: idx }, others, { className: className }),
                    label
                );
            });
        }
    }, {
        key: '_renderActions',
        value: function _renderActions() {
            return this.props.actions.map(function (action, idx) {
                var label = action.label,
                    others = (0, _objectWithoutProperties3.default)(action, ['label']);

                var className = (0, _classnames2.default)({
                    weui_actionsheet_cell: true
                });

                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ key: idx }, others, { className: className }),
                    label
                );
            });
        }
    }]);
    return ActionSheet;
}(_react2.default.Component); /**
                               * Created by jf on 15/11/26.
                               */

ActionSheet.propTypes = {
    menus: _react2.default.PropTypes.array,
    actions: _react2.default.PropTypes.array,
    show: _react2.default.PropTypes.bool,
    onRequestClose: _react2.default.PropTypes.func
};
ActionSheet.defaultProps = {
    menus: [],
    actions: [],
    show: false,
    onRequestClose: function onRequestClose() {}
};
exports.default = ActionSheet;
;
module.exports = exports['default'];