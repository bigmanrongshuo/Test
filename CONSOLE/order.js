/**
 * 打印顺序问题
 */


/**
 * es6 系列
 */
function es6() {
  async function async1() {
    console.log("async1 start");
    await  async2();
    console.log("async1 end");
  
  }
  async  function async2() {
   console.log( 'async2');
  }
  console.log("script start");
  setTimeout(function () {
    console.log("settimeout");
  },0);
  async1();
  new Promise(function (resolve) {
    console.log("promise1");
    resolve();
  }).then(function () {
    console.log("promise2");
  });
  console.log('script end');
}

// es6()
