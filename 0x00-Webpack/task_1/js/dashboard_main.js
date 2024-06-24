import $ from 'jquery';
import _ from 'lodash';

// Initialize counter //
let count = 0;

// updateCounter function //
const updateCounter = () => {
    count++;
    $('#count').text(`${count} clicks on the button`);
};

$(document).ready(function(){
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    const button = $('<button>Click here to get started</button>');
    $('body').append(button);
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');
