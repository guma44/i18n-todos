import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import Task from '../api/classes/task';

import './task.html';

Template.task.helpers({
  isOwner() {
    return this.owner === Meteor.userId();
  },
});

Template.task.events({
  'click .delete'() {
    task = Task.find({_id: this._id});
    task.delete();
  },
});
