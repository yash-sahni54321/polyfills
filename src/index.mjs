import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>All polyfills for Frontend interview!</h1>
`;

// polyfill for map

function polyfillForMap(arr, fn) {
  if (!Array.isArray(arr)) {
    throw new Error("myMap take array only");
  }
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    res[i] = fn(arr[i], i);
  }

  return res;
}

// polyfill for forEach

function polyfillForEach(arr, fn) {
  if (!Array.isArray(arr)) {
    throw new Error("myMap take array only");
  }
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i);
  }

  return undefined;
}

// polyfill for promise.all

function polyfillForPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let res = [];
    let n = 0;
    if (!Array.isArray(promises)) {
      reject(new TypeError("The input you gave should be array of promise"));
    }

    if (promises.length === 0) {
      resolve(res);
    }

    promises.forEach(() => {
      Promise.resolve(promises)
        .then((val) => {
          res[n++] = val;

          if (n === promises.length) {
            resolve(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

// polyfill for promise.race

function polyfillForPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new TypeError("The input you gave should be array of promise"));
    }

    if (promises.length === 0) {
      resolve();
    }

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((val) => {
          resolve(val);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

// polyfill for filter

function polyfillForFilter(arr, fn) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      res.push(arr[i]);
    }
  }

  return res;
}

// polyfill for reduce

function polyfillForReduce(arr, cb, initialValue) {
  let startIndex = 0;
  if (initialValue === undefined) {
    initialValue = arr[0];
    startIndex = 1;
    if (arr.length === 0) {
      throw new Error("Array is empty");
    }
  }
  let accumulatedValue = initialValue;
  for (let i = startIndex; i < arr.length; i++) {
    accumulatedValue = cb(accumulatedValue, arr[i], i, arr);
  }

  return accumulatedValue;
}

// polyfill for call

function polyfillForCall(context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this, " should be a function.");
  }

  // Assign the function (that calls `myCall`) to the context with the unique symbol as the key
  context.fn = this;

  // Call the function with the provided context and arguments
  context.fn(...args);
}

// polyfill for apply

// check where the args is an array or not.

// polyfill for bind

function polyfillForBind(context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this, " should be a function.");
  }

  // Assign the function (that calls `myCall`) to the context with the unique symbol as the key
  context.fn = this;

  // return  the function with the provided context and arguments

  return function () {
    return context.fn(...args);
  };
}

// polyfill for debounce

function debouce(fn, timeDiff) {
  let timer;

  clearTimeout(timer);
  return function (...args) {
    timer = setTimeout(() => {
      fn(...args);
    }, [timeDiff * 1000]);
  };
}

// polyfill for throttle

function throttle(fn, delay) {
  let last = 0;

  return function (...args) {
    let currTime = new Date().getTime();

    if (currTime - last > delay) {
      last = currTime;
      return fn(...args);
    } else {
      return;
    }
  };
}
