var gF = "foo module's global var gF";

export class Foo {
  bar;
  constructor(bar) {
    this.bar = bar;
  }
  getFoo() {
    return this.bar;
  }
}
