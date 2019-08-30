require("../scss/index.scss");
const fooModule = require("./foo/foo");
let foo = fooModule("bar");
let fooElement = document.getElementById("foo");
fooElement.innerHTML = foo.getFoo();