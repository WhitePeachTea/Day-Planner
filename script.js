$(document).ready(function() {
        $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    
        /* Update color of input field based on time of day */
        for (i = 1; i < 10; i++) {
            $("#text-" + i).val(localStorage.getItem(i));
            if ((i+8) < moment().format("k")) {
                $("#text-" + i).css("background-color", "red");
            }
            else if ((i+8) == moment().format("k")) {
                $("#text-" + i).css("background-color", "green");
            }
            else {
                $("#text-" + i).css("background-color", "blue");
            }
        }
        
        $(".saveBtn").click(function(){
            for (i = 1; i < 10; i++) {
                localStorage.setItem(i, document.getElementById("text-" + i).value);
            }  
        });
    });
  