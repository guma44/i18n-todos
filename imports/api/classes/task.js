import {Class} from 'meteor/jagi:astronomy';
import {Meteor} from 'meteor/meteor';

import Tasks from '../collections/tasks';

const Task = Class.create({
  name: 'Task',
  collection: Tasks,
  fields: {
    owner: {
      type: String
    },
    username: {
      type: String
    },
    text: {
      type: String
    },
    checked: {
      type: Boolean,
      default: true
    }
  }

});

export default Task;
