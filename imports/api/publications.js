import { Meteor } from 'meteor/meteor';
import Tasks from './collections/tasks';
import Task from './classes/task';

TAPi18n.conf.supported_languages = ['en', 'pl'];

if (Meteor.isServer) {
  TAPi18n.publish('tasks', function() {
    return Tasks.i18nFind();
  });
}
