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

// Identifies the current hour
var currentHour = moment().hour();

// Highlights the current hour block light red
var currentHourBlock = $('#task-' + currentHour);
currentHourBlock.css('background-color', 'lightRed');

// Highlights future hour blocks light green
for (var i = 1; i < 9; i++) {
    $('#task-' + currentHour + i).css('background-color', 'lightGreen');
}

// ALTERNATE INCOMPLETE SOLUTION COMMENTED BELOW:

// // Selects all text areas to possibly be highlighted
// var hourBlock = $('.description')

// // Current hour variable
// var currentHour = moment().hour();

// // Highlights hour blocks depending on the current hour
// hourBlock.each(function() {
//     var hourDisplay = parseInt( $(this).data('hour') );

//     if ( hourDisplay < currentHour ) {
//         hourBlock.css('background-color', 'lightGrey');
    
//     } else if ( hourDisplay === currentHour ) {
//         hourBlock.css('background-color', 'lightRed');
    
//     } else {
//         hourBlock.css('background-color', 'lightGreen');
//     }

// });