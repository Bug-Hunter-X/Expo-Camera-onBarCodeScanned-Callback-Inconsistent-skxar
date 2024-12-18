# Expo Camera onBarCodeScanned Callback Inconsistency

This repository demonstrates a bug in the Expo Camera API where the `onBarCodeScanned` callback is not reliably triggered.  The issue appears to be related to the frequency of barcode scans and/or lighting conditions.  The provided `bug.js` file reproduces the problem.  A potential solution is offered in `bugSolution.js`, although a more robust fix from Expo might be needed.

## Setup

1.  Clone the repository.
2.  Run `npm install`.
3.  Run `expo start`.  

Test by scanning barcodes under varying conditions.  Notice that the console logging in `bug.js` may be inconsistent, while `bugSolution.js` offers a workaround.