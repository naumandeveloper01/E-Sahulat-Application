/*
================================================ 
    Now we design our touch mobile
    With fully functional
================================================ 
*/



/*
======================================================= 
    .mainbtn was initialize in the tournmobileOnBtn
=======================================================  

1. After click turn on feature add to this android mobile

 */
// Turn mobile on button initialize here
let tournmobileOnBtn = document.querySelector(".mainbtn");

// Android screen where we perform all action
let androidScreen = document.querySelector(".andriodScreen");
/*
============================
    Dashboard Start here
============================
 */
// Dashboard select here is the main screen
let dashboard = document.querySelector(".dashboard");

// Dynamicaly add username to the accountinfo
let username = document.querySelector(".name");

// Dynamicaly add currentaccount Balance to the accountinfo
let userbalance = document.querySelector(".currentbalance");

// Dbillboxynamicaly add last view your account to the accountinfo
let lastview = document.querySelector(".lastview");

// Select the bill class that is the children of the .part2
let billPayment = document.querySelector("#bill");

// Select the bill class that is the children of the .firstpart .billboxpart2
let billbox = document.querySelector(".box");

// Select the bill class that is the children of the .firstpart .billboxpart2
let cancelbtn = document.querySelector(".cancel");

// Select the bill class that is the children of the .firstpart .billboxpart2
let processbtn = document.querySelector(".process");
// select after clicking the bill payment option it will show the option
// the first is this singbill
let singlebill = document.querySelector("#singlebill");
// the second is this bulkbill
let bulkbill = document.querySelector("#bulkbill");
/*
=====================================
       All Database Data is here 
=====================================
 */
let user = [{
    name: "Nauman",
    phoneno: "03011216608",
    password: "09876",
    balance: "50000",
    date: "26/8/22"
},];

/*
=========================================================
       All Dynamicaly show values store in the database 
=========================================================
 */

username.innerHTML = user[0].name;
userbalance.innerHTML = user[0].balance;
lastview.innerHTML = user[0].date;

/*
=====================================
       All addEventListener List here 
=====================================
 */

tournmobileOnBtn.addEventListener("click", () => {
    mobileonsign();
    dashboardscreen();
    // billPayment.addEventListener("click", () => {
    //     billbox.classList.add("block");
    // })
    // 
    tournmobileOnBtn.addEventListener("dblclick", () => {
        Mobileoffscreen();
        mobileoffsign();
    });
});

// billPayment.addEventListener("click", () => {
//     billbox.classList.add("block");
// });

billPayment.addEventListener("click", () => {
    if (billbox.classList.contains("none")) {
        billbox.classList.remove("none")
    } else {
        billbox.classList.add("block");
        console.log(billbox);
    }
});
// cancelbtn of the billpayment request
cancelbtn.addEventListener("click", () => {
    billbox.classList.add("none");
});

// processbtn of the billpayment request
processbtn.addEventListener("click", () => {
    // if (singlebill.selected || bulkbill.selected) {
    window.location.href = "../billpayment/billoption.html";
    // } else {
    //     alert('no one is selected.');
    // }
});


/*
========================================================= 
  The function run on default 
=========================================================
*/





/*
========================================================= 
  All Function are make there for the full functional
=========================================================
*/

// Mobile on sign as a light on on the androidScreen
function mobileonsign() {
    let mobileonlight = document.querySelector(".androidonofflight");
    mobileonlight.style.background = "skyblue";
}

// Mo bile off sign as a light off on the androidScreen
function mobileoffsign() {
    let mobileonlight = document.querySelector(".androidonofflight");
    mobileonlight.style.background = "white";
}

// Mobile Dashboard display block set here
function dashboardscreen() {
    androidScreen.appendChild(dashboard);
    dashboard.style.display = "block";
}

// Create Home screen children dynamically


// Mobile off button on dblclick this function will call
function Mobileoffscreen() {

    // Here We remove the mobileonintroVideo element from the parentElement androidScreen
    // mobileonintroVideo.remove();
    // Here We remove the mobile homescreen element from the parentElement androidScreen
    dashboard.remove();

}
