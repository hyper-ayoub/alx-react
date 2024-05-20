// Import jQuery
import $ from 'jquery';

// Function to add paragraphs to the body
function addParagraphs() {
    // Add paragraphs to the body
    $("body").append("<p>Dashboard data for the students</p>");
    $("body").append("<p>Holberton Dashboard</p>");
    $("body").append("<p>Copyright - Holberton School</p>");
}

// Call the function when the document is ready
$(document).ready(function() {
    addParagraphs();
});

