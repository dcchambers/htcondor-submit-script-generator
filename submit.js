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
        "# - Information - <br>"+
        "universe = "+document.getElementsByName("universe")[0].value+"<br>"+
        "log = "+document.getElementsByName("log")[0].value+"<br>"+
        "executable = "+document.getElementsByName("executable")[0].value+"<br>"+
        "arguments = "+document.getElementsByName("arguments")[0].value+"<br>"+
        "output = "+document.getElementsByName("output")[0].value+"<br>"+
        "# TODO - Transfer File Section <br>"+
        "request_cpus = "+document.getElementsByName("request_cpus")[0].value+"<br>"+
        "request_memory = "+document.getElementsByName("request_memory")[0].value+"<br>"+
        "request_disk = "+document.getElementsByName("request_disk")[0].value+"<br>"+
        "# TODO - Queue <br>"+
        
        
        "</code>"
       
    );
    
    /***************************************
     * TODO - FIX THIS PART.
    var i;
    var text = "";
    var x = document.getElementById("form1");
    for (i=0; i < x.length; i++){
      
      //now we need to check if the element is "checked" in the form, and if
      //it is, we need to add it to the script that gets printed out.
	    document.getElementById("output").innerHTML += 
	      (						
	      text = x.elements[i].value +"<br>"
	      ); //why does this not advance through the list?
    }
    */
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


/*
 * DEBUG function.
 */
function debugFile(){
  document.getElementById('fileDisplayArea').style.display="block";
}

