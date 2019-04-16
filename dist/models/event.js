"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _mongoose = _interopRequireDefault(require("mongoose"));
var _moment = _interopRequireDefault(require("moment"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Schema = _mongoose.default.Schema;

/**
                                        * User mongoose schema.
                                        */
var eventSchema = new Schema({
  title: String,
  date: String,
  timeFrom: String,
  timeTo: String,
  location: String,
  participants: [{ type: Schema.Types.ObjectId, ref: 'applicant' }],
  description: String,
  createdDate: { type: String, default: (0, _moment.default)().format() } });var _default =


_mongoose.default.model('event', eventSchema);exports.default = _default;;