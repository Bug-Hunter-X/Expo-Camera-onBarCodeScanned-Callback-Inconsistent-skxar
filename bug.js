This bug occurs when using the Expo `Camera` API with a custom `onBarCodeScanned` function.  The issue is that the callback function is not always called, leading to a situation where barcodes are scanned, but no action is taken. This seems to be particularly prevalent when scanning barcodes rapidly or in low-light conditions. The Camera component renders correctly and shows the camera preview.