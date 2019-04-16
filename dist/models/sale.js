"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _mongoose = _interopRequireDefault(require("mongoose"));
var _moment = _interopRequireDefault(require("moment"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Schema = _mongoose.default.Schema;

/**
                                        * Product mongoose schema.
                                        */var _default =
_mongoose.default.model('sale', new Schema({
  date: String,
  time: String,
  clientId: String,
  nit: String,
  nitName: String,
  products: [String],
  totalPayed: String,
  createdDate: { type: String, default: (0, _moment.default)().format() } }));exports.default = _default;