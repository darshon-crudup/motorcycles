//Age Verification

alert("Please verify your age for a test drive");

function verifyCheck() {
    let verify = prompt("Are you over 18? Yes or No");

    if (verify) {
        while (verify.toLowerCase() !=="yes") {
            verifyCheck();
            console.log(verify);
            return verify;
        }
    {else {
        verifyCheck();
    }
}
verifyCheck();
}
function Darshon (){
let introduction = prompt('What\'s your name?');
document.write('Hello '+ introduction)
}

function motorcycle(){
let likesyamaha = confirm("Would you like to buy a motorcycle?");

if (likesyamaha ===true){
    document.write("Great, I think I found what your looking for!");
} else {
    document.write('Not cool');
}

}
function ducati(){
let likesducati = confirm("Do you like this 2022 Ducati Diavel?");

if (likesducati ===true){
    document.write("Would you like to purchase it for $1?");
} else{
    document.write('I don\'t believe you');
}
function verify(){
	let verify = prompt("Verify your age!");
}

verifyCheck();
Darshon();
motorcycle();
ducati();
}
}
