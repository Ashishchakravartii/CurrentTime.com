// console.log("Hey this is a practice file");

function greet(name, bytext) {
    console.log("HEY ASHU... Good Morning Buddy" + " " + name + " " + bytext);
}


//  for(i=0;i<7;i++){
//     setTimeout(greet,5000);
// }
 //setTimeout(greet,1000,"Ashish",`Khyal Rkhna bhyiii`);
// let timeout = setTimeout(greet,1000);
// clearTimeout(timeout);

// let intervalId = setInterval(greet,1000,"ashu","bye");
// clearInterval(intervalId);

function displaytime(){
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}
// setTimeout(displaytime,1000);
setInterval(displaytime,1000);
