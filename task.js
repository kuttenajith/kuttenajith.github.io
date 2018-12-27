var car = [{
        type: "suv",
        model: "500",
        color: "red",
        brand: "suzuki",
        fueltype: "petrol",
        yearofmanufacture: "2016",
        enginepower: "200",
        geartype: "auto",
        dateoflaunch: "04/03/2016",
        mileage: "20",
        KMrunned: "500",
        fuelcapacity: "10"
    },
    {
        type: "sedan",
        model: "400",
        color: "black",
        brand: "TATA",
        fueltype: "petrol",
        yearofmanufacture: "2018",
        enginepower: "300",
        geartype: "manual",
        dateoflaunch: "04/03/2016",
        mileage: "40",
        KMrunned: "100",
        fuelcapacity: "60"
    }, {
        type: "mini",
        model: "300",
        color: "yellow",
        brand: "NANO",
        fueltype: "petrol",
        yearofmanufacture: "2018",
        enginepower: "100",
        geartype: "auto",
        dateoflaunch: "04/03/2016",
        mileage: "50",
        KMrunned: "200",
        fuelcapacity: "40"

    }
];
var addnewCar = {
    type: "sedan",
    model: "6",
    color: "blue",
    brand: "Dizer",
    fueltype: "disel",
    yearofmanufacture: "2076",
    enginepower: "300",
    geartype: "auto",
    dateoflaunch: "04/03/2016",
    mileage: "20",
    KMrunned: "0",
    carsold: "2",
    rearcamera: "true",
    fuelcapacity: "40",
};



newproperty();
filterByyom();
//CompareDate(); 
countType();
countType1();
countType2();
geartype();
geartype1();
//sort();
concatarrays();
//launchedbetween();




function filterByyom() {
    var l = car.length;
    for (var i = 0; i < l; i++) {
        if (car[i].yearofmanufacture < "2010") {
            console.log("CAR TYPE MANUFACTURED BEFORE 2010");
            console.log(car[i].type + " " + car[i].model + " " + car[i].yearofmanufacture);

        }
    }
}

function newproperty() {

    car.push(addnewCar);
    console.log("NEW PROPERTY ADDED");
    for (var i = 0; i < car.length; i++) {

        console.log((i + 1) + ": " + car[i].type + " ," + car[i].modelno + " ," + car[i].color + " ," + car[i].brand + " ," + car[i].fueltype + " , " + car[i].yearofmanufacture + " ," + car[i].enginepower + " ," + car[i].geartype + " ," + car[i].dateoflaunch + " ," + car[i].mileage + " ," + car[i].KMrunned + " ," + car[i].carsold + " , " + car[i].rearcamera + " ," + car[i].fuelcapacity);
    }
}

function countType() {
    var count = 0;
    car.forEach(function (e) {
        if (e.type == "suv") {
            count++;
        }

    });
    console.log("suv" + " " + count);

}

function countType1() {
    var count = 0;
    car.forEach(function (e) {
        if (e.type == "sedan") {
            count++;
        }

    });
    console.log("sedan" + " " + count);

}

function countType2() {
    var count = 0;
    car.forEach(function (e) {
        if (e.type == "mini") {
            count++;
        }

    });
    console.log("mini" + " " + count);

}

// function launchedbetween() {
//     for (var i = 0; i <= car.length; i++) {
//         if ((car[i].dateoflaunch > "04/01/2016") && (car[i].dateoflaunch < "04/01/2018")) {
//             console.log(car[i].type + " " + car[i].model + " " + car[i].dateoflaunch);
//         }
//     }

// }

function geartype() {
    var count = 0;
    car.forEach(function (e) {
        if (e.geartype == "auto") {
            count++;
        }

    });
    console.log("auto" + " " + count);

}

function geartype1() {
    var count = 0;
    car.forEach(function (e) {
        if (e.geartype == "manual") {
            count++;
        }

    });
    console.log("manual" + " " + count);

}

function CompareDate() {

    for (var i = 0; i <= car.length; i++) {
        var dateOne = new Date(2016 - 04 - 01); //Year, Month, Date  
        var dateTwo = new Date(2018 - 04 - 01); //Year, Month, Date  
        if ((car.dateoflaunch > dateOne) && ((car.dateoflaunch < dateTwo))) {
            console.log(car[i].type + " " + car[i].model + " " + car[i].dateoflaunch);
        }
    }
}



var removeIndex = car.map(function (item) {
    return item.type;
}).indexOf("mini");
car.splice(removeIndex, 1);
console.log("ALL THE CARS IN MINI TYPE WAS DELETED")
console.log(car);



function concatarrays() {
    var concat = car.concat(addnewCar);
    console.log(concat);
}
// function sort(){
//     car.forEach(function (e) {
//         if (e.yearofmanufacture == "2018") {
//             car.sort(function(a,b){
//                 var c = new Date(a.date);
//                 var d = new Date(b.date);
//                 return c-d;
//                 });
//         }

//     });
// }
