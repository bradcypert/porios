// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';

// AngularClass
import '@angularclass/hmr';

// HammerJS
import 'hammerjs';

// HighlightJS
import 'highlight.js';

// RxJS
import 'rxjs';

// Fonts
import './assets/font/font-awesome.css';
import './assets/font/material-icons.css';

// Web Service
require.context("./assets/img", false, /^\.\//);

if ('production' === ENV) {
  // Production

} else {
  // Development

}
