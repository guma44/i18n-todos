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
        text: {
            type: String
        },
        type: {
            type: String,
            default: "Task"
        },
        i18n: {
            type: Object,
            default() {
                return {};
            }
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
        translateTo(language, translationData) {
            this.i18n[language] = translationData;
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
