'use strict';

var Todo = require('./models/todo');

var todos = [
	'Plant a shrubbery',
	'Learn all the code',
	'Water your repo'
];

todos.forEach(function (todo, index) {
  Todo.find({ 'name': todo }, function(err, todos) {
  	if (!err && !todos.length) {
      Todo.create({ completed: false, name: todo });
  	}
  });
});
