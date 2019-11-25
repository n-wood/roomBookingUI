
var users = [    
     "0--Nathan Wood",
     "1--Dan Gleeballs",
     "2--Toby Larone",
     "3--Mike Rowave",
     "4--James Rees",
     "5--Penn Gwynn",
     "6--Sue Flay",
     "7--Fred O'Barr"
]



var allPageIds = ["welcomePage","whoAreYouPage",,"confirmBookingPage"]

function hideAllPages()
{
    allPageIds.forEach(element => {
        document.getElementById(element).style.display = "none";
    });
}

function showPage(pageId)
{
    
    hideAllPages();

    switch (pageId) {
        case "welcomePage":
            document.getElementById(pageId).style.display = "block";
            break;
        case "whoAreYouPage":
            document.getElementById(pageId).style.display = "block";
            takeFocusForBadgeScanning();
            break;
        case "confirmBookingPage":
            document.getElementById(pageId).style.display = "block";
            break;
       


    }

}

function lookupUserName(userId)
{

    for (i = 0; i < users.length; i++) {
        if (users[i].startsWith(userId +"--"))
        {
            return users[i].split("--")[1];
        }
      }
    
    
}

function takeFocusForBadgeScanning()
{
    document.getElementById("userIdField").focus();
}

function captureUserId(e)
{

    var field = document.getElementById("userIdField");
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
       
        document.getElementById("hiddenUserId").value = field.value;
        document.getElementById("hiddenUserName").value = lookupUserName(field.value);  
        updateConfirmationPage();
        showPage("confirmBookingPage");
    }
}

function selectedTime(timeSlot)
{
    document.getElementById("hiddenSelectedTime").value = timeSlot;
    showPage('whoAreYouPage');
}

function updateConfirmationPage()
{
    var detail  = "<p>This room has been booked by <strong>" + 
     document.getElementById("hiddenUserName").value +
     "</strong> at <strong>" + 
     document.getElementById("hiddenSelectedTime").value +
     "</strong</p>" ;
     alert (detail);
    document.getElementById('confirmationBox').innerHTML = detail;
}

