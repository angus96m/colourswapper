const colours = ['red', 'green', 'blue']
let colorIndex = -1;
function myFunction(){
    colorIndex += 1;
    if (colorIndex > colours.length -1) colorIndex = 0;
    document.getElementById("btn").innerHTML = colours[colorIndex]
    document.getElementById("btn").style.width="9%";
}
let colorJindex = -1;
function myyFunction(){
    colorJindex += 1;
    if (colorJindex > colours.length -1) colorJindex = 0;
    document.body.style.backgroundColor = colours[colorJindex];
}

