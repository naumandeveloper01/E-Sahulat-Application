/*
================================================ 
    Now we design our touch mobile
    With fully functional(
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

// mainscreen is this billoption
let billoption = document.querySelector(".billoption")
// console.log(billoption);

// console.log(androidScreen);

// parent element of the space class and childern of the switchbox
let tooglebox = document.querySelector(".tooglebtn");

// circle area where the circle button is toggle 
let Circlearea = document.querySelector(".space");

// Switch btn for the password enable/disable and other properties
let inputpassword = document.querySelector("#password");


// circle is selected here
let circle = document.querySelector(".circle");

// icon to click it to show the dropdown box
let companyselect = document.querySelector(".down");

// icon to click it to show the dropdown box
let mobilenumberbox = document.querySelector(".down2");

// bil lunique number for paying the exact bill
let consumernumberinput = document.querySelector("#consumernumber");

// user enter the mobile number
let mobilenumberinput = document.querySelector("#mobilenb");

// click for submit your bill for paying now
let paybillbtn = document.querySelector(".paybill");

//mobile provider text selected 
let mobilecompanyboxtext = document.querySelectorAll(".text");

// new page screen after andriodScreen paybillscreen
let paybillscreen = document.querySelector(".paybillscreen");

// new page screen input field
// input field

let consumervalue = document.querySelector("#consumervalue");
let consumerdetail_1 = document.querySelector("#consumerdetail");
let consumerfather = document.querySelector("#consumerfather");
let duebill = document.querySelector("#duebill");
let latebill = document.querySelector("#latebill");
let duebilldate = document.querySelector("#duebilldate");

// pay bill button payit classname
let billpaynow = document.querySelector(".payit");
let billprint = document.querySelector(".printbill");

// pay bill button payit classname
let billpaid = document.querySelector(".billpaid");

// pay bill button payit classname
let billcomplete = document.querySelector(".complete");

// let billprint = document.querySelector(".printbill");


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

// let selectoption = document.querySelector(".selectcmpy");
// let companyselect = selectoption.querySelector(".company");
let accountNumber = [{
    name: "Nauman",
    fathername: "M Yousaf",
    duedate: "31/08/22",
    duebill: "5000",
    latebill: "5500",
    number: "03011216608",

}]
companyselect.addEventListener("click", () => {
    if (companybox.parentElement.classList.contains("none")) {
        companybox.parentElement.classList.remove("none");
        companybox.parentElement.classList.add("show");
        // console.log(companybox.parentElement.classList.contains("none"));
    }
    for (let i = 3; i < companybox.parentElement.children.length; i++) {
        companybox.parentElement.children[i].addEventListener("click", () => {
            if ((companybox.parentElement.children[i].classList.contains("p-5")) || (companybox.parentElement.children[i].classList.contains("p-10"))) {
                let txtq = companybox.parentElement.children[i].innerText;
                // console.log(txt);
                mobilecompanyboxtext[0].innerText = txtq;
                companybox.parentElement.classList.remove("show");
                companybox.parentElement.classList.add("none");
            }
        });
    }
});

mobilenumberbox.addEventListener("click", () => {
    if (mobileNetwork.parentElement.classList.contains("none")) {
        mobileNetwork.parentElement.classList.remove("none");
        mobileNetwork.parentElement.classList.add("show");
        // console.log(mobileNetwork.parentElement.classList.contains("none"));
    }
    for (let i = 2; i < mobileNetwork.parentElement.children.length; i++) {
        mobileNetwork.parentElement.children[i].addEventListener("click", () => {
            if ((mobileNetwork.parentElement.children[i].classList.contains("p-5")) || (mobileNetwork.parentElement.children[i].classList.contains("p-10"))) {
                let txt = mobileNetwork.parentElement.children[i].innerText;
                // console.log(txt);
                mobilecompanyboxtext[1].innerText = txt;
                mobileNetwork.parentElement.classList.remove("show");
                mobileNetwork.parentElement.classList.add("none");
            }
        });
    }
});



let companybox = document.querySelector(".selected")
let mobileNetwork = document.querySelector(".selectednumber")

companybox.addEventListener("click", () => {
    if (companybox.parentElement.classList.contains("show")) {
        companybox.parentElement.classList.remove("show");
        companybox.parentElement.classList.add("none");
    }
});
mobileNetwork.addEventListener("click", () => {
    if (mobileNetwork.parentElement.classList.contains("show")) {
        mobileNetwork.parentElement.classList.remove("show");
        mobileNetwork.parentElement.classList.add("none");
    }
});

// addEventListener on the tooglebox
circle.addEventListener("click", () => {
    circle.classList.toggle("move");
    Circlearea.classList.toggle("bg");

    if (inputpassword.attributes.length == 5) {
        inputpassword.removeAttribute("value");
        inputpassword.style.background = "gray!important";
    }
    else if (inputpassword.attributes.length == 4) {
        inputpassword.setAttribute("value", accountNumber[0].number);
    }
    else {
        // console.log(inputpassword.attributes.length);
    }
});

paybillbtn.addEventListener("click", () => {
    if (consumernumberinput.value.length > 0) {
        if (consumernumberinput.value.length == 15) {
            if (inputpassword.value.length == 11) {
                if (mobilenumberinput.value.length == 11) {
                    // previous billoption screen will be removed after this condition will true
                    billoption.remove();
                    // androidscreen ma appendchild next paybillscreen
                    androidScreen.appendChild(paybillscreen);
                    // agar paybillscreen class ma none class mojude ho to
                    if (paybillscreen.classList.contains("none")) {
                        paybillscreen.classList.remove("none")
                        paybillscreen.classList.add("block")
                        paybillscreen.setAttribute("style", "width: 265px; height: 453px;padding: 20px;")

                    } else {
                        alert('Please enter the character at least 11.');
                    }
                } else {
                    alert('Please enter the mobile number character at least 11.');
                }
            } else {
                alert("Please enter the account number 11 numeric character at least.");
            }
        } else {
            alert("Please enter the consumer number15 character at least");
        }
    } else {
        alert("Please enter the consumer number15 character at least");
    }
})
/*
===========================
    For style the element
===========================
 */
let optionlist = document.querySelector(".optionlist");
let first = document.querySelector(".first");
let imgall = document.querySelectorAll("p");
let img = document.querySelectorAll("img");
for (let i = 0; i < img.length; i++) {
    img[i].setAttribute("style", "width: 50px;height:50px; margin:10px;")
    imgall[i].setAttribute("style", "color: white;")
    first.setAttribute("style", "margin:10px;")
    optionlist.setAttribute("style", "overflow: auto;")

}

/*
========================================================= 
  New paybill Screen 
=========================================================
*/

// New page Screen

consumervalue.setAttribute("value", accountNumber[0].number);
consumerdetail_1.setAttribute("value", accountNumber[0].name);
consumerfather.setAttribute("value", accountNumber[0].fathername);

duebill.setAttribute("value", accountNumber[0].duebill);
latebill.setAttribute("value", accountNumber[0].latebill);
duebilldate.setAttribute("value", accountNumber[0].duedate);

/*
========================================================= 
    new page screen events here
========================================================= 
 */

billpaynow.addEventListener("click", () => {

    if (billpaid.classList.contains("hide")) {
        billpaid.classList.remove("hide");
        billpaid.classList.add("visible");
    }
    billcomplete.addEventListener("click", () => {
        if (billpaid.classList.contains("visible")) {
            billpaid.classList.remove("visible");
            billpaid.classList.add("hide");
        }
        else {
            // alert("hello")
        }
    });
});


billprint.addEventListener("click", () => {
    window.print();
})


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

// Mobile off button on dblclick this function will call
function Mobileoffscreen() {

    // Here We remove the mobileonintroVideo element from the parentElement androidScreen
    // mobileonintroVideo.remove();
    // Here We remove the mobile homescreen element from the parentElement androidScreen
    androidScreen.remove();

}
