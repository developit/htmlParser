HTMLParser
==========

A very simple JavaScript HTML parser.


---

Usage
-----

It's just a class with a `parse()` method.

```JavaScript
var dom = htmlParser.parse('<p class=test><a href="foo.html">tag<br soup>!</>');
// now throw it at a selector engine*:
$(dom).query('p.test > a br');
```

\* Tested against [puredom](http://puredom.org/)'s [selector engine](http://puredom.org/docs/symbols/puredom.selectorEngine.html) *(which, coincidentally, uses htmlParser to spice up it's docs)*


---

License
-------

> The MIT License (MIT)
> 
> Copyright (c) 2013 Jason Miller
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
