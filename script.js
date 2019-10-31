var currentDay = moment().format('MMMM Do YYYY, h:mm A');
var day = moment().format('MMMM Do YYYY');
var currentHour = moment().format('h A');
var calRow = document.getElementsByClassName("textarea");
var calHour = document.getElementsByClassName("hour");
var textHour = "";




function definePresent() {
    for (i = 0; i < calHour.length; i++){ {
        textHour = calHour[i].textContent;
        console.log(textHour);
    }

   var now = moment(textHour).fromNow();
   console.log(now);

    if (diff_in_hour = 0) {
        $(calHour).removeClass( "hour" ).addClass( "present" );
    }
}
}

definePresent();