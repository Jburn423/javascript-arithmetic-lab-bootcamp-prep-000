var a,b,n;

//Part 1
function add(a,b){
  return a + b ;
}add (9,2);

//Part 2
function subtract(a,b){
  return a-b;
}subtract(2,7);

//Part 3
function multiply(a,b){
  return a * b;
}multiply(4,2);

//Part 4
function divide(a,b){
  return a/b;
}divide(a,b);

//Part 5
function inc(n){
  return n+=1;
}inc(4156);

//Part 6
function dec(n){
  return n-=1;
}dec(28)

//Part 7
// the makeInt function takes predefined var n and the parameter base (which I have not predefined)
function makeInt(n, base){
  // local variable p represents the parseInt function using base 10
  var p = parseInt(n, 10);
  return p;
}
//This line calls the function to convert string '22' into an integer
makeInt('22');