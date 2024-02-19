import "./foo/index.scss";

import { Foo } from "./foo/index";

function main(a) {
  const f = new Foo(a);

  const b = f.getFoo();
  console.log(b);
}

main("A");
