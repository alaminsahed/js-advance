//A callback is a function passed as an argument to another function

const satisfied = true;

function starter(callback) { //need function not calling function
    console.log(callback); //() => { // mainCourse(desert)//  }
    if (satisfied) {
        console.log("starter is good");
        setTimeout(function () {
            callback() // call main course
        }, 1000)
    }
    else {
        console.log("skip meal");
    }

}


function mainCourse(callback) {
    if (satisfied) {
        console.log("main course is emmy");
        setTimeout(function () {
            callback() // call desert
        }, 2000)
    }
    else {
        console.log("skip meal");
    }
}

function desert(callback) {
    if (satisfied) {
        console.log("desert is emmy");
        setTimeout(function () {
            callback() // call desert
        }, 3000)
    }
    else {
        console.log("skip meal");
    }

}

function juice() {
    console.log("drink complete");
}

starter(() => {
    mainCourse(() => { desert(juice) })
});


