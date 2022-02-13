const satisfied = true;

function starter() {
    console.log("Start with starter");
    if (satisfied) {
        const promise = new Promise((resolve, reject) => {
            if (satisfied) {
                setTimeout(function () {
                    resolve()
                }, 1000)
            }
            else {
                reject("Skip meal")
            }

        })

        return promise;
    }
}

function mainCourse() {
    console.log("Start main course");
    const promise = new Promise((resolve, reject) => {
        if (satisfied) {
            setTimeout(() => {
                resolve()
            }, 2000)
        }
        else {
            reject("Skip meal")
        }

    })
    return promise;
}


function desert() {
    console.log("start desert");
    const promise = new Promise((resolve, reject) => {
        if (satisfied) {
            setTimeout(() => {
                resolve()
            }, 2000)
        }
        else {
            reject("Skip meal")
        }


    })
    return promise;
}

starter().then(mainCourse).then(desert).catch((err) => {
    console.log(err);
})