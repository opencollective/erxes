import { Mongo } from 'meteor/mongo';

const PunchCardData = new Mongo.Collection('punch_card');
const InsightData = new Mongo.Collection('integration');
const MainGraph = new Mongo.Collection('main_graph');
const UsersData = new Mongo.Collection('users_data');
const Summary = new Mongo.Collection('summary');

export { PunchCardData, InsightData, MainGraph, UsersData, Summary };