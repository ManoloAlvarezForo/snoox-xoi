"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.getStartAndEndDateFromMonth = void 0;var _moment = _interopRequireDefault(require("moment"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var DEAFAULT_DAYS_PER_MONTH = 35;

var getStartAndEndDateFromMonth = function getStartAndEndDateFromMonth(month, year, locale) {var daysPerMonth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEAFAULT_DAYS_PER_MONTH;
  var now = (0, _moment.default)();
  now.locale(locale);
  now.set('month', month);
  now.set('year', year);
  var myMoment = now.clone().set({ 'date': 1 });
  var daysInMonth = myMoment.daysInMonth();
  var weekDay = parseInt(myMoment.format('d'));
  var startDate = myMoment.subtract(weekDay, 'days');
  var otherMoment = now.set({ 'date': daysInMonth });
  var endDate = otherMoment.add(daysPerMonth - daysInMonth - weekDay, 'days');

  return {
    startDate: startDate,
    endDate: endDate };

};exports.getStartAndEndDateFromMonth = getStartAndEndDateFromMonth;