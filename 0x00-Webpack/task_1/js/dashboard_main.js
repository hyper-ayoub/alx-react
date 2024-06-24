import $ from 'jquery';
import _ from 'lodash';

// Initialize counter //
let count = 0;

// updateCounter function //
const updateCounter = () => {
    count++;
    $('#count').text(`${count} clicks on the button`);
};

// jquery here //
$(document).ready(function() {
    // Add a button with id startBtn to the body
    $('body').append('<button id="startBtn">Click me</button>');
    // Add a paragraph with id count to the body
    $('body').append('<p id="count">0 clicks on the button</p>');

    // Attach the debounced updateCounter function to the button click event
    $('#startBtn').on('click', _.debounce(updateCounter, 500));
});
