
# 🔧 JavaScript Polyfills for Interviews

This repository contains hand-written polyfills for common JavaScript methods, often asked in frontend interviews. Great for deepening JS knowledge and interview preparation.

---

## 🚀 Why Polyfills?

Writing polyfills helps reinforce:
- Core JavaScript concepts
- Functional programming
- Prototype and async behavior
- Confidence during interviews

---

## 📦 Included Polyfills

### `map` — `polyfillForMap`

```js
function polyfillForMap(arr, fn) {
  if (!Array.isArray(arr)) {
    throw new Error("myMap takes an array only");
  }
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res[i] = fn(arr[i], i);
  }
  return res;
}
```

---
### `filter` — `polyfillForFilter`

```js
function polyfillForFilter(arr, fn) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      res.push(arr[i]);
    }
  }
  return res;
}
```

---
### `forEach` — `polyfillForForEach`

```js
function polyfillForEach(arr, fn) {
  if (!Array.isArray(arr)) {
    throw new Error("myForEach takes an array only");
  }
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i);
  }
  return undefined;
}
```

---
### `reduce` — `polyfillForReduce`

```js
function polyfillForReduce(arr, cb, initialValue) {
  let startIndex = 0;
  if (initialValue === undefined) {
    if (arr.length === 0) throw new Error("Array is empty");
    initialValue = arr[0];
    startIndex = 1;
  }
  let accumulatedValue = initialValue;
  for (let i = startIndex; i < arr.length; i++) {
    accumulatedValue = cb(accumulatedValue, arr[i], i, arr);
  }
  return accumulatedValue;
}
```

---

### `Promise.all` — `polyfillForPromiseAll`

```js
function polyfillForPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let res = [];
    let count = 0;
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Input must be an array of promises"));
    }

    if (promises.length === 0) return resolve(res);

    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then((val) => {
          res[i] = val;
          count++;
          if (count === promises.length) {
            resolve(res);
          }
        })
        .catch(reject);
    });
  });
}
```

---

### `Promise.race` — `polyfillForPromiseRace`

```js
function polyfillForPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Input must be an array of promises"));
    }

    for (let p of promises) {
      Promise.resolve(p).then(resolve).catch(reject);
    }
  });
}
```

---

### `Function.prototype.call` — `polyfillForCall`

```js
function polyfillForCall(context = {}, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(this + " is not callable");
  }
  context.fn = this;
  return context.fn(...args);
}
```

---

### `Function.prototype.apply` — `polyfillForApply`

```js
function polyfillForApply(context = {}, args = []) {
  if (typeof this !== "function") {
    throw new TypeError(this + " is not callable");
  }
  if (!Array.isArray(args)) {
    throw new TypeError("Arguments must be an array");
  }
  context.fn = this;
  return context.fn(...args);
}
```

---

### `Function.prototype.bind` — `polyfillForBind`

```js
function polyfillForBind(context = {}, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(this + " is not callable");
  }
  const fn = this;
  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
}
```

---

### `debounce` — `debounce`

```js
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
```

---

### `throttle` — `throttle`

```js
function throttle(fn, delay) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last > delay) {
      last = now;
      fn(...args);
    }
  };
}
```

---

## 📂 How to Use

Clone the repo:

```bash
git clone https://github.com/yash-sahni54321/polyfills.git
cd js-polyfills
```

Then import and test polyfills in Node.js or browser console.

---

## 👨‍💻 Contributing

Pull requests are welcome! Feel free to add new polyfills, improve performance, or suggest changes.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Support & Follow

If you found this helpful, please give the repo a ⭐️ and follow me for more awesome content!

<a href="https://www.linkedin.com/in/yash-sahni-42b0731b0/" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-Yash%20Sahni-blue?logo=linkedin" alt="LinkedIn Badge" />
</a>

<a href="https://github.com/yash-sahni54321" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-yash--sahni54321-333?logo=github" alt="GitHub Badge" />
</a>

---

Happy Coding! 💻🔥
