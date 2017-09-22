function run1() {
    var p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('异步任务1执行完成');
            resolve('数据1');
        }, 1000);
    });

    return p;
}

function run2() {
    var p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('异步任务2执行完成');
            resolve('数据2');
        }, 2000);
    });

    return p;
}

function run3() {
    var p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('异步任务3执行完成');
            resolve('数据3');
        }, 2000);
    });

    return p;
}

run1()
    .then(function (data) {
        console.log(data);
        return run2();
    })
    .then(function (data) {
        console.log(data);
        return run3();
    })
    .then(function (data) {
        console.log(data);
    });