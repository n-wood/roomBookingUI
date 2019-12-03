
var users = [    
     "0006430735--Lettuce Wynn",
     "0013288566--Victor Hee",
     "0006876599--Toby Larone",
     "0006878220--Mike Rowave",
     "0013269560--Chan Pions",
     "0013305664--Penn Gwynn",
     "0008388587--Sue Flay",
     "0011050925--Fred O'Barr",
     "0013254195--Warren Peace",
     "0013300769--Rhoda Camel"
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
     document.getElementById('confirmationBox').innerHTML = detail;
}

function simulate(mode)
{
    if (mode == "occupied")
    {
        document.getElementById('roomStatus').classList.remove('green'); 
        document.getElementById('roomStatus').classList.remove('amber');        
        document.getElementById('roomStatus').classList.add('red'); 
        document.getElementById('roomAvailableSatus').innerHTML = "<p id='status' class='statusBox'>This room is current occupied by:</p><p id='hostsName' class='statusBox'>Nathan Wood</p>"
    }
    else if (mode== "available")
    {   
        document.getElementById('roomStatus').classList.remove('red'); 
        document.getElementById('roomStatus').classList.remove('amber');   
        document.getElementById('roomStatus').classList.add('green');
        document.getElementById('roomAvailableSatus').innerHTML = "<p id='status' class='statusBox'>This room is available for booking"
 
    }
    else {
        document.getElementById('roomStatus').classList.remove('green'); 
        document.getElementById('roomStatus').classList.remove('red');   
        document.getElementById('roomStatus').classList.add('amber');
        document.getElementById('roomAvailableSatus').innerHTML = "<p id='status' class='statusBox'>This room is booked but not yet occupied by:</p><p id='hostsName' class='statusBox'>Nathan Wood</p>"
 
    }
}

