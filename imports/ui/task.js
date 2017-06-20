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
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    task = Task.findOne({_id: this._id});
    task.setChecked(!this.checked);
  },
  'click .delete'() {
    task = Task.findOne({_id: this._id});
    task.delete();
  },
  'click .toggle-private'() {
    task = Task.findOne({_id: this._id});
    task.setPrivate(!this.private);
  },
});
