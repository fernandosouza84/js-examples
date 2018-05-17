//sudo python -m SimpleHTTPServer 8888
function Person() {
    this.name = '';
    this.age = '';
    this.eyesColor = '';
    this.body = '';

    this.move = function(){

    };

    this.say = function(){

    };

    this.see = function(){

    };

}

var leonan = new Person();

console.log(typeof Person); //Function
console.log(typeof leonan); //Object

console.log(leonan);