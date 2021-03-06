'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DispatchListener = function (_React$Component) {
  _inherits(DispatchListener, _React$Component);

  function DispatchListener() {
    _classCallCheck(this, DispatchListener);

    return _possibleConstructorReturn(this, (DispatchListener.__proto__ || Object.getPrototypeOf(DispatchListener)).apply(this, arguments));
  }

  _createClass(DispatchListener, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props;
      var name = _props.name;
      var type = _props.type;
      var handler = _props.handler;

      this.name = name;
      this.id = this.context.storeSet.addDispatchListener(this.name, function (action) {
        if (action.type === type) {
          handler(action);
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.context.storeSet.removeDispatchListener(this.name, this.id);
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return children || null;
    }
  }]);

  return DispatchListener;
}(_react2.default.Component);

DispatchListener.contextTypes = {
  storeSet: _react.PropTypes.object.isRequired
};
DispatchListener.defaultProps = {
  type: '*'
};
DispatchListener.propTypes = {
  name: _react.PropTypes.string.isRequired,
  type: _react.PropTypes.string.isRequired,
  handler: _react.PropTypes.func.isRequired
};
exports.default = DispatchListener;
//# sourceMappingURL=DispatchListener.js.map