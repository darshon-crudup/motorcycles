function Darshon (){
let introduction = prompt('What\'s your name?')
document.write('Hello '+ introduction)
}

function motorcycle(){
let likesyamaha = confirm("Would you like to buy a motorcycle?")

if (likesyamaha ===true){
    document.write("Great, I think I found what your looking for!")
} else {
    document.write('Not cool')
}
}

function ducati(){
let likesducati = confirm("Do you like this 2022 Ducati Diavel?")

if (likesducati ===true){
    document.write("Would you like to purchase it for $1?")
} else{
    document.write('I don\'t believe you')
}
function verify() {
	let verify = prompt("Verify your age!");

    console.log("verify", verify);

    if (!verify) {
        console.log("Do you have a license");
        verify = prompt("Please confirm if you are 18 to 21 years old" + "!"); + "!";
    }

    if (!verify) {
        console.log("You must have a valid license to test drive a motorcycle");
        alert("Denied Access" + "!")
    }
    else {
        document.write("Approved, schedule your test drive today " + verify + "!");
}

Darshon();
motorcycle();
ducati();
verify();
}
}
