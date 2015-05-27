//submit JS file


/* This function generates the Condor Submit Script based on the HTML
 * that the user fills out. It is called with a submit button on the page.
 */
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
    var i;
    var text = "";
    var x = document.getElementById("form1");
    for (i=0; i < x.length; i++){
	document.getElementById("output").innerHTML += (
            text = x.elements[i].value +"<br>"
	    
        );
    }
    
    window.scrollTo(0,document.body.scrollHeight);
}

/* The readConfigFile() function checks to make sure the browser supports reading
 * from a file, and then reads the config file (currently chtcrequirements.txt)
 * that will be used to create the HTML form.
 *
 */
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
    for (var i = 0; i < arrLines.length; i++) {
        var curLine = arrLines[i];
        if (curLine[0] != "#"){ //ignore comments.
	    generateForm(curLine);
	}
	
    }
    
}

/* generateForm(String) uses the config file to create the HTML form
 * that the user is presented with.
 *
 */
function generateForm(textLine){
  fileDisplayArea.innerText += textLine+"\n"; //DEBUG

  var splitLine = textLine.split(","); //split the line up by commas into an array.
  document.getElementById('form1').innerHTML += 
      "<input type=\"checkbox\" name=\"ARCH\" value=\"INTEL\">"+splitLine[2]+"<br>"; //formDisplayArea.innerHTML wasn't working right.  
}

