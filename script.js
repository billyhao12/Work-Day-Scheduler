// Displays the current date at the top of the page
$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));

// Sets a variable for all save buttons
var saveBtn = $('.save');

// Retrieves previously saved tasks from localStorage and stores them in the tasks object
var tasks = JSON.parse(localStorage.getItem('tasks')) || {};

// Populates text fields with previously saved text
saveBtn.each(function() {
    var buttonHour = $(this).data('hour');
    var taskInput = $('#task-' + buttonHour);

    taskInput.val( tasks['task' + buttonHour]);
});

// Saves user's input into local storage upon clicking a save button
saveBtn.on('click', function (event) {

    var buttonHour = $(this).data('hour');
    var taskInput = $('#task-' + buttonHour);
    var taskValue = taskInput.val();

    tasks['task' + buttonHour] = taskValue;

    localStorage.setItem('tasks', JSON.stringify(tasks));

});
