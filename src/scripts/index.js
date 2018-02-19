(function () {
    function sayHiES5(greeting){
        return greeting;
    }
    console.log(sayHiES5('Hello ES5!'));

    const sayHiES6 = greeting => greeting
    console.log(sayHiES6('Hello ES6!'));
})();
