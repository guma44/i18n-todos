import { Meteor } from 'meteor/meteor';
import Task from './classes/task';


if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('tasks', function() {
    return Task.find();
  });
}
