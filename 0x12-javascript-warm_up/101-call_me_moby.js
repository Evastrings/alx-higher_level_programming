#!/usr/bin/node
const callMeMoby = (k, theFunction) => {
  for (let y = 0; y < k; y++) {
    theFunction();
  }
};
module.exports = { callMeMoby };
