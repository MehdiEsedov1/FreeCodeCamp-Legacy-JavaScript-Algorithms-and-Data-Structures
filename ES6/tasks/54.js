function myLocalScope() {
  var myVar = "test";

  console.log("inside myLocalScope", myVar);
}

myLocalScope();

console.log("outside myLocalScope", myVar);
