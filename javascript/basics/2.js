var x = 1;
a();
b();

console.log(x);

function a(){
    var x = 10; // independent variable from global x.
    console.log(x);
}

function b(){
    var x = 100; // independent variable from global x.
    console.log(x);
}

