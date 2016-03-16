# edit-object

### example

```
var editObj = require('edit-object')

var targetobject = {
  a: 'one',
  b: 'two',
  c: { test: 'fun', skip: 'yes' }
}

var editobject = {
  b: undefined,
  c: { test: 'hey', addme: 'wow' }
}

editObj(targetobject, editobject)

console.log(targetobject)

// { a: 'one', c: { test: 'hey', skip: 'yes', addme: 'wow' } }
```
