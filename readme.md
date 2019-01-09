> Subset of [English words](https://raw.github.com/dwyl/english-words/master/words_alpha.txt)

Maybe useful for you if you only need 4 chars

## Install

```
$ npm install --save four-chars-word-list
```

## Usage

```js
const fs = require('fs');

// Returns the path to the word list which is separated by `\n`
const wordListPath = require('four-chars-word-list');

const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
//=> […, 'abmhos', 'abnegate', …]
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
[@auggod](https://auggod.tech)
