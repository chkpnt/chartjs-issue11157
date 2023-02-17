# Demonstrator for webpack discussion [16739](https://github.com/webpack/webpack/discussions/16739)

This repository contains the library Chart.js which needs to be transpiled /
polyfilled for iOS 14, as it constains
[static class properties](https://github.com/chartjs/Chart.js/blob/v4.2.1/src/core/core.datasetController.js#L224-L239),
which are only
[supported from iOS 14.5](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields#browser_compatibility).

Unfortunately, I have not managed to configure babel-loader to also transpile the npm packages.
