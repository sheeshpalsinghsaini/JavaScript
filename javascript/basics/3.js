
(function(){
    console.log("Immediately Invoked Function Expression")
})()


for(var i=1; i<=3; i++){
    (function(x){
        console.log(x)
    })(i)
}