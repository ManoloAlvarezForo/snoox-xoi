"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _mongoose = _interopRequireDefault(require("mongoose"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Schema = _mongoose.default.Schema;

/**
                                        * User mongoose schema.
                                        */
var routeSchema = new Schema({
  owner: String,
  points: [{ lat: Number, lng: Number, _id: false }],
  direction: String,
  routeNumber: String });var _default =


_mongoose.default.model('route', routeSchema);exports.default = _default;;