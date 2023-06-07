function hello(name){ 
    return "Hello " + (name || "there") + "!"; 
} 
function press(){ 
    var in = document.getElementById("input").value; 
    var out = hello(in); 
    document.getElementById("output").innerHTML = out; 
} 
