# node-pinboard
node-pinboard is a node module for the [Pinboard.in API](https://pinboard.in/api/).

# installation
```
npm install pinboard
```

# usage
This module requires that you have an account on [Pinboard](http://pinboard.in).

```javascript
var pinboard = require('pinboard');

pinboard.config({ token: 'foo:03cb29ab1ddfe3219a' });

pinboard.get('posts/all', {tag: 'banana'}, function(posts) {
  console.log(posts); // outputs all your pinned bookmarks with the `banana` tag
});
```

## methods
`node-pinboard` support all the method that are on [Pinboard API](http://pinboard.in/api) documentation except the `user/secret` method (maybe later).

`node-pinboard` have some build in alias functions for the `pinboard.get` function. so instead of writing 

    pinboard.get('posts/all', function(data) {
        console.log(data); // => xml or json output of all your bookmarks
    });

you can write

    pinboard.all(function(data) {
        console.log(data); // => xml or json output of all your bookmarks
    });

the methods that have alias is

    "posts/all" => pinboard.all([options,] callback)
    "posts/add" => pinboard.add([options,] callback)
    "posts/delete" => pinboard.destroy([options,] callback)
    "tags/get" => pinboard.tags([options,] callback)

# pinboard functions
all callback function have the data argument `function(data) {...}`

`pinboard.config(options)` `pinboard.get(method, [options,] callback)` `pinboard.all([options,] callback)` `pinboard.add([options,] callback)` `pinboard.destroy([options,] callback)` `pinboard.tags([options,] callback)`

# meta
    * code: `git clone git://github.com/frozzare/node-pinboard.git`
    * home: <http://github.com/frozzare/node-pinboard>
    * bugs: <http://github.com/frozzare/node-pinboard/issues>

# copyright and license
`node-pinboard` is released under the MIT license.
[8ddcf91f21f5593e5b569db](https://github.com/demands/pinboard/commit/8ddcf91f21f5593e5b569db5cea8010c055eaa6e) and all prior commits are copyright 2011 [Fredrik Forsmo](http://forsmo.me).
All commits afterwards are copyright 2015 [Max Edmands](http://maxedmands.com).
