function createcar(u, v) {
        this.brand = "skoda",
        this.model_no = "kk10",
        this.type = "sedan",
        this.gear = "neutral",
        this.rearcamera = u,
        this.direction = v
        this.gear_type = "manual",
        this.color = "brown",
        this.fuel = "diesel",
        this.engine_power = "900",
        this.fuel_capacity = "9",
        this.mileage = "20",
        this.gear_type = "manual",
        this.no_of_cars_sold = "500",
        this.killometers_runned = "1500",
        this.date_of_launch = "June 18, 2010",
        this.year_of_manufacture = "2010"
}




var mycar = new createcar("false", "right")
console.log(mycar);

console.log("*******************************");
console.log("car status right now");


var car1 = new createcar();
console.log("car brandname :" + car1.brand + "," + " car type :" + car1.type + "," + " car model :" + car1.model_no + "," + " car color :" + car1.color + ".");
console.log("car fuel :" + car1.fuel + "," + " car gear type :" + car1.gear_type + "," + " car fuel capacity :" + car1.fuel_capacity + "," + " car No of cars sold :" + car1.no_of_cars_sold + ".");



// gearchangeneutral();
// gearchangereverse();
// geardown1();
// gearup1();
// gearup2();


// function gearup1() {
//     createcar.forEach(function (e) {
//     if (e.gear == "1") {
//     var a = createcar.KMrunned + 100;
    
//     }
//     });
//     }
    
//     function gearup2() {
//     createcar.forEach(function (e) {
//     if (e.gear == "2") {
//     var b = a + 200;
    
//     }
//     });
//     }
    
    
//     function gearchangeneutral() {
//     createcar.forEach(function (e) {
//     if (e.gear == "neutral") {
//     var c = createcar.KMrunned;
    
//     }
//     });
//     }
    
//     function gearchangereverse() {
//     createcar.forEach(function (e) {
//     if (e.gear == "reverse") {
//     var d = b - 150;
    
//     }
//     });
//     }
    
//     function geardown1() {
//     createcar.forEach(function (e) {
//     if (e.gear == "1") {
//     var e = b - 200;
//     }
//     });
//     }