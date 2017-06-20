import {
    Class
} from 'meteor/jagi:astronomy';
import {
    Meteor
} from 'meteor/meteor';

import Tasks from '../collections/tasks';

function mustBeLoggedIn(e) {
  if (!e.trusted && !Meteor.userId()) {
    // Anonymous client is trying to create a conversation.
    throw new Meteor.Error(
      'must-be-logged-in',
      'You must have an account to create a new Conversation.'
    );
  }
}

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
            default: false
        },
        private: {
            type: Boolean,
            default: true
        }
    },
    events: {
        beforeInsert: mustBeLoggedIn,
        beforeUpdate: mustBeLoggedIn
    },
    meteorMethods: {
        create() {
            return this.save();
        },
        delete() {
            return this.remove();
        },
        setChecked(checked) {
            this.set('checked', checked);
            this.save();
        },
        setPrivate(priv) {
            this.set('private', priv);
            this.save();
        }
    }

});

export default Task;
