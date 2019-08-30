class Foo {
    constructor(bar) {
        this.bar = bar;
    }
    getFoo() {
        return this.bar;
    }
}

module.exports = bar => new Foo(bar);