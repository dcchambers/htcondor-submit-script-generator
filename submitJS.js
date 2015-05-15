//submit JS file

function generate(){
    document.getElementById("outputHeader").style.display="block";
    document.getElementById("output").style.display="block";
    document.getElementById("output").innerHTML = (
        "<code>test<br>"+
        "test</code>"
        
    );
    window.scrollTo(0,document.body.scrollHeight);
}