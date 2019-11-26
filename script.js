$(document).ready(function() {
    $(".saveBtn").on("click", function() {
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    });
    function  hourUpdater(){
        $.each($(".time-block"), function (index) {
            var blockHour = moment($(this).children(".hour")[0].innerText, "HH:mm A").format("HH");
            var currentHour = moment().format("HH");
            if (blockHour > currentHour) {
                $(this).children(".description").addClass("future");
            }
            else if (blockHour < currentHour) {
                $(this).children(".description").removeClass("future");
                $(this).children(".description").addClass("past");
            }
            else {
                $(this).children(".description").removeClass("future");
                $(this).children(".description").removeClass("past");
                $(this).children(".description").addClass("present");
            }
        }
        );    
    }
  
    hourUpdater()
  });
  