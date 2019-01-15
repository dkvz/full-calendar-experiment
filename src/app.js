import $ from 'jquery';
window.$ = $;
window.jQuery = $;
require('fullcalendar');
// Also import the CSS:
import 'fullcalendar/dist/fullcalendar.min.css';


$('#calendar').fullCalendar({
  header: { center: 'month,agendaWeek' }, // buttons for switching between views

  views: {
    month: { // name of view
      titleFormat: 'YYYY, MM, DD'
      // other view-specific options here
    }
  }
})

console.log('App. loaded.');