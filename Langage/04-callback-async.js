setTimeout(() => {
  console.log('callback A');
}, Math.random() * 1000);

setTimeout(() => {
  console.log('callback B');
}, Math.random() * 1000);

setTimeout(() => {
  console.log('1s');
  setTimeout(() => {
    console.log('2s');
    setTimeout(() => {
      console.log('3s');
      setTimeout(() => {
        console.log('4s');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);




console.log('fin');


// pile d'appels
// ^
// |
// |
// |
// |
// |
// |                    idle  cl      cl      cl-st      cl-st    cl-st
// |st-st-st-cl('fin') ...... cbB ... cbA ... cb1s  .... cb1s ... cb1s ...
// +------------------------------------------------------------------------------> temps
//                                            1s         2s       3s
// event queue :


