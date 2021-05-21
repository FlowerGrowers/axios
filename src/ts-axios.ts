// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
export default class DummyClass {
  constructor() {
    this.init()
  }

  init() {
    console.log('hello')
  }
}

new DummyClass()
