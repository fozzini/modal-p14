"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = _interopRequireDefault(require("react-fontawesome"));

require("./modal.css");

var Modal = function Modal(props) {
  var closeModal = props.closeModal;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.default, {
    name: "times",
    onClick: closeModal,
    className: "icon"
  }), props.children));
};

var _default = Modal;
exports.default = _default;