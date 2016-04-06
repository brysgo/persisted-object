
        .---.            _       .-.         .-. .--. .-.    _             .-. 
        : .; :          :_;     .' `.        : :: ,. :: :   :_;           .' `.
        :  _.'.--. .--. .-. .--.`. .'.--.  .-' :: :: :: `-. .-. .--.  .--.`. .'
        : :  ' '_.': ..': :`._-.': :' '_.'' .; :: :; :' .; :: :' '_.''  ..': : 
        :_;  `.__.':_;  :_;`.__.':_;`.__.'`.__.'`.__.'`.__.': :`.__.'`.__.':_; 
                                                          .-. :                
                                                          `._.'    
                                                  
Use it just like a regular javascript object.

```javascript
var PersistedObject = require('persisted-object');
var foo = new PersistedObject('uniq-foo-key');

if (foo.bar) {
  console.log('Bar is: ', foo.bar);
} else {
  console.log('Setting bar!!!');
  foo.bar = 'baz';
}
```

When you first load this script, it will say `Setting bar!!!` in the console.

Reload the page and it will say `Bar is: baz`.

## Install

Install it with npm:

`npm install persisted-object`

or bower:

`bower install persisted-object`

### Warning
This package makes use of the ES6 Proxy object, which is only supported in [these browsers](http://caniuse.com/#feat=proxy).

For other browsers you can try using [this polyfill](https://github.com/GoogleChrome/proxy-polyfill).