# JQuery SmartInput

A plugin that supercharges input fields for accounting softwares alike.

 * Enter **1k** for **1,000**
 * Enter **1m** for **1,000,000**
 * Enter **1b** for **1,000,000,000**
 * Enter **1t** for **1,000,000,000,000**


Give your input field names when using smartInput and the rest is a breeze.
 

### Installation
```javascript
npm install smartinput --save
```

### Usage
```javascript
$(function(){
  $('input').smartInput();
});
```



### credits:

 * [accounting.js](http://openexchangerates.github.io/accounting.js/) for number formatting
