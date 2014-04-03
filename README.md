ko-stream
=========

Adapt a knockout.js observable to the node.js stream interface.

## Usage

This module extends knockout.js subscribable's fn object with `createStream()` function,
that returns a readable and writable `Stream` instance which is synchronized with the observable
and can be piped further.


``` js
var ko = require('knockout');
require('ko-stream')(ko); // ← Extends ko.subscribable.fn

var obs = ko.observable();

someOtherStream.pipe(obs.createStream()).pipe(someOtherStream);

```


Installation
============

With [npm](https://npmjs.org) do:

```
npm install ko-stream
```

## License

(MIT)

Copyright (c) 2014 Andrey Filonenko andrey.filonenko@aol.com

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
