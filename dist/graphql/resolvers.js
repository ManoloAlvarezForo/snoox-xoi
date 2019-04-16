"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var AuthenticationResolver = _interopRequireWildcard(require("../resolvers/authentication"));
var UserResolver = _interopRequireWildcard(require("../resolvers/user"));
var ApplicantResolver = _interopRequireWildcard(require("../resolvers/applicant"));
var RouteResolver = _interopRequireWildcard(require("../resolvers/route"));
var EventResolver = _interopRequireWildcard(require("../resolvers/event"));function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj.default = obj;return newObj;}}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Authorized message.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */
var AUTHORIZED_MESSAGE = 'You are not authorized!';

/**
                                                     * Evaluates if the user authenticated exists.
                                                     * 
                                                     * @param {User to be evaluated} user 
                                                     */
var validateAuthentication = function validateAuthentication(user) {
  // if (!user) throw new Error(AUTHORIZED_MESSAGE)
};

var resolvers = {
  Query: {
    users: function users(_, args, context) {
      validateAuthentication(context.user);
      return UserResolver.getUsers();
    },
    applicants: function applicants(_, args, context) {
      // validateAuthentication(context.user);
      return ApplicantResolver.getApplicants();
    },
    applicantById: function applicantById(_, args, context) {
      // validateAuthentication(context.user);
      return ApplicantResolver.getApplicantById(args.id);
    },
    events: function events(_, __, context) {
      return EventResolver.getEvents();
    },
    eventById: function eventById(_, _ref, context) {var id = _ref.id;
      return EventResolver.getEventById(id);
    },
    eventsByDate: function eventsByDate(_, args, context) {
      return EventResolver.getEventsByDate(args.from, args.to);
    },
    calendarEventsByMonth: function calendarEventsByMonth(_, _ref2, context) {var month = _ref2.month,year = _ref2.year,locale = _ref2.locale;
      return EventResolver.getCalendarEventsByMonth(month, year, locale);
    },
    applicantsByFilter: function applicantsByFilter(_, _ref3, context) {var query = _ref3.query,properties = _ref3.properties;
      return ApplicantResolver.getApplicantsByFilter(query, properties);
    } },

  Mutation: {
    signup: function signup(_, args) {
      return AuthenticationResolver.signup(args);
    },
    login: function login(_, args) {
      return AuthenticationResolver.login(args);
    },
    addApplicant: function addApplicant(_, _ref4, context) {var applicant = _ref4.applicant;
      validateAuthentication(context);
      return ApplicantResolver.addApplicant(applicant);
    },
    updateApplicant: function updateApplicant(_, _ref5, context) {var applicantToUpdate = _ref5.applicantToUpdate;
      validateAuthentication(context);
      return ApplicantResolver.updateApplicantById(applicantToUpdate);
    },
    addRoute: function addRoute(_, _ref6, context) {var route = _ref6.route;
      validateAuthentication(context);
      return RouteResolver.addRoute(route);
    },
    addEvent: function addEvent(_, _ref7, context) {var event = _ref7.event;
      return EventResolver.addEvent(event);
    } } };var _default =



resolvers;exports.default = _default;