function makeBold() {
    var Text=document.getElementById("Text");
    if(Text.style.fontWeight!="bold"){
    Text.style.fontWeight="bold";
}
    else{
        Text.style.fontWeight="normal";
    }
}

function makeItalic() {
    var Text=document.getElementById("Text");
    if(Text.style.fontStyle!="italic"){
    Text.style.fontStyle="italic";

}
    else{
        Text.style.fontStyle="normal";
    }
}    

function makeUnderline() {
    var Text=document.getElementById("Text");
    if(Text.style.textDecoration!="underline"){
    Text.style.textDecoration="underline";
    }
    else{
        Text.style.textDecoration="none";
    }
}

function changeSize() {
    var Text=document.getElementById("Text");
    var userSize=document.getElementById("Size").value;
    console.log(userSize);
    Text.style.fontSize=userSize;

}

function changePolice() {
    var Text=document.getElementById("Text");
    var userPolice=document.getElementById("police").value;
    console.log(userPolice);
    Text.style.fontFamily=userPolice;
}

