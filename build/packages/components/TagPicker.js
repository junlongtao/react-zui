/**
 * 标签选择
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

require('./less/tag-picker.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Picker = require('./Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TagPicker = function (_React$Component) {
    (0, _inherits3.default)(TagPicker, _React$Component);

    function TagPicker() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, TagPicker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TagPicker.__proto__ || (0, _getPrototypeOf2.default)(TagPicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            category: ''
        }, _this.renderCategoryList = function () {
            var categoryList = [];
            for (var i in _this.props.data) {
                categoryList.push(i);
            }

            var prefix = _this.props.prefix;
            return categoryList.map(function (item, key) {
                var cls = item === _this.state.category ? 'active' : '';
                return _react2.default.createElement(
                    'li',
                    { className: prefix + '-tag-picker-category-item ' + cls, key: key, onClick: function onClick() {
                            _this.setState({ category: item });
                        } },
                    item
                );
            });
        }, _this.renderTagList = function () {
            var value = (0, _util.parsejson)(_this.props.value);
            var valueTags = value[_this.state.category] || [];
            var categoryTags = _this.props.data[_this.state.category] || [];

            var prefix = _this.props.prefix;
            return categoryTags.map(function (item, key) {
                var cls = valueTags.indexOf(item) === -1 ? '' : 'active';
                return _react2.default.createElement(
                    'li',
                    { className: prefix + '-tag-picker-tag-item ' + cls, key: key, onClick: function onClick() {
                            if (valueTags.indexOf(item) === -1) {
                                valueTags.push(item);
                            } else {
                                valueTags.splice(valueTags.indexOf(item), 1);
                            }
                            value[_this.state.category] = valueTags;
                            _this.props.onChange((0, _stringify2.default)(value));
                        } },
                    item
                );
            });
        }, _this.render = function () {
            var prefix = _this.props.prefix;
            var status = _this.props.status;
            return _react2.default.createElement(
                _Picker2.default,
                { className: prefix + '-tag-picker', status: status, onBackClick: _this.props.onBackClick },
                _react2.default.createElement(
                    'ul',
                    { className: prefix + '-tag-picker-category-list' },
                    _this.renderCategoryList()
                ),
                _react2.default.createElement(
                    'ul',
                    { className: prefix + '-tag-picker-tag-list' },
                    _this.renderTagList()
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return TagPicker;
}(_react2.default.Component);

TagPicker.defaultProps = {
    status: '',
    prefix: 'zui',
    name: '请选择标签',
    multiCategory: false,
    data: {
        '技术': ['技术总监', 'CTO', '项目经理', '测试', '架构师', '微信开发', '前端开发', '后端开发', '运维', '硬件研发', 'AR/VR', '算法', 'Android', 'iOS', 'Java', 'PHP', 'C/C++', 'HTML5', '.NET/C#', 'unity3d'],
        '产品': ['产品总监', '产品经理', '数据产品经理', '游戏策划', '需求疏理', '产品顾问'],
        '设计': ['设计总监', 'UI设计', 'UE/UX', '平面设计师', '动画设计', '工业设计', '结构设计'],
        '运营': ['运营总监', 'COO', '用户运营', '产品运营', '数据运营', '新媒体运营', '文案策划', '内容编辑', 'SEO'],
        '市场与销售': ['市场总监', '销售总监', '市场策划', '市场推广', '地面推广', 'BD', '品牌建设', '渠道资源'],
        '其他': ['创业教练', '创业导师', '法律', '融资辅导', '融资顾问', '招聘', '财务', '其他']
    },
    onChange: function onChange() {},
    onBackClick: function onBackClick() {}
};
exports.default = TagPicker;