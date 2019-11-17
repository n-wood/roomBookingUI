
var users = [    
     "0--Nathan Wood",
     "1--Dan Gleeballs"
]



var allPageIds = ["welcomePage","whoAreYouPage","whenPage",,"confirmBookingPage"]

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
        case "whenPage":
            document.getElementById(pageId).style.display = "block";
            break;
        case "myBookingsPage":
            document.getElementById(pageId).style.display = "block";
            break;
        case "confirmBookingPage":
            document.getElementById(pageId).style.display = "block";
            break;
        case "confirmCancellationPage":
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
        showPage("whenPage");
    }
}