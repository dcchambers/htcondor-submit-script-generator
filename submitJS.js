//submit JS file

function generateScript(){
    document.getElementById("outputHeader").style.display="block";
    document.getElementById("output").style.display="block";
    document.getElementById("copy-button").style.display="block";
    document.getElementById("dlButton").style.display="block";
    document.getElementById("output").innerHTML = (
        "<code>"+
        "##########################<br>#<br>"+
        "# - HTCondor Submit File -<br>#<br>"+
        ""+
        "</code>"
        
    );
    window.scrollTo(0,document.body.scrollHeight);
}


function readConfigFile(){
    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        // Great success! All the File APIs are supported.
    } else {
        alert('File APIs not supported with this browser. Cannot load the form config file.');
    }
    
    var fileDisplayArea = document.getElementById('fileDisplayArea');
    //var formDisplayArea = document.getElementById('form');
    var oFrame = document.getElementById("frmFile");
    var strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
    
    while (strRawContents.indexOf("\r") >= 0){
        strRawContents = strRawContents.replace("\r", "");
    }
        
    var arrLines = strRawContents.split("\n");
    fileDisplayArea.innerText +="File " + oFrame.src + " has " + arrLines.length + " lines."+"\n\n";
    for (var i = 0; i < arrLines.length; i++) {
        var curLine = arrLines[i];
        //alert("Line #" + (i + 1) + " is: '" + curLine + "'");
        //fileDisplayArea.innerText += curLine+"\n";
        generateForm(curLine);
    }
    
}

function generateForm(textLine){
  fileDisplayArea.innerText += textLine+"\n"; //DEBUG
  document.getElementById('form').innerHTML += 
    "<input type=\"checkbox\" name=\"ArchINTEL\" value=\"INTEL\">32 Bit<br>"; //formDisplayArea.innerHTML wasn't working right.
  
  
}

