//submit JS file

function generate(){
    document.getElementById("outputHeader").style.display="block";
    document.getElementById("output").style.display="block";
    document.getElementById("output").innerHTML = (
        "<code>"+
        "##########################<br>#<br>"+
        "# - HTCondor Submit File -<br>#<br>"+
        ""+
        "</code>"
        
    );
    window.scrollTo(0,document.body.scrollHeight);
}