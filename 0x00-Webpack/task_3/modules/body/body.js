import $ from "jquery";
import _ from 'lodash';
import './body.css';
$('body').append('<p id="count"></p>');
const button = $('<button>Click here to get started</button>');
$('body').append(button);
let count = 0; // count start with 0 //

const updateCounter = () => { // function with lodash //
	count++;
	$('#count').text(`${count} clicks on the button`);
};

$('#startBtn').on('click', _.debounce(updateCounter, 500))
