// new Promise((resolve, reject) => {
//   resolve(value);
//   reject(err);
// });


class MyPromise {
  constructor(cb) {
    try {
      cb(this.#onSuccess, this.#onFail);
    } catch(err) {
      this.onFail(err);
    }
  }
  #onSuccess(value) {

  }

  #onFail(value) {

  }
}

const p = new MyPromise();
p