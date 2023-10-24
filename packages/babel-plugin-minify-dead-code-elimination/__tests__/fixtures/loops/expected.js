while (true) {
  bar();
}

while (x) {
  baz();
} // for


for (var i = 0; i < 8; i++) {
  foo();
}

for (;;) {
  bar();
}

var j;

// do_while
do {
  foo();
} while (1);

{
  bar();
}

do {
  baz();
} while (a); // optimize confident do...while statements with break


function foo() {
  do {
    if (x) break;
  } while (false);

  bar1: do break bar1; while (false);

  bar2: do {
    if (y) break;
  } while (false);

  bar3: do {
    if (y) break bar3;
  } while (false);

  bar4: {
    while (baz()) {
      if (x) break;
    }
  }

  bar5: do {
    while (baz()) {
      if (x) break bar5;
    }
  } while (false);
} // confident do...while statements with continue


function foo() {
  do {
    if (x) continue;
  } while (false);

  do continue; while (false);

  bar0: do continue; while (false);

  bar1: do continue bar1; while (false);

  bar2: do {
    if (y) continue;
  } while (false);

  bar3: do {
    if (y) continue bar3;
  } while (false);

  bar4: {
    while (baz()) {
      if (x) continue;
    }
  }

  bar5: do {
    while (baz()) {
      if (x) continue bar5;
    }
  } while (false);
}