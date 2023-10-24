function bar() {
  return function () {
    return boo();
  };
}

function baz() {
  return function wow() {
    return wow();
  };
} // shadowed


function foo() {
  return function wow() {
    var wow = foo;
    wow();
    return wow;
  };
} // setters


function foo() {
  var x = {
    set a(b) {}

  };
  return new class {
    set c(d) {
      x.a = 5;
    }

  }();
}