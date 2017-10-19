# fireCRUD
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An node package that gives CRUD-like capabilities to firestore collections and eases the creation of an API.


## Installation
Download and extract the source code from the dist/ directory.
inside the code directory you can install by simply running
``` BASH
npm install firecrud
```

## Usage
Load the package then add the CRUD functions to firestore collection
```javascript
// load package
const fireCRUD = require('firecrud');
// get reference to collection
const accountsRef = db.collection('accounts');
// add crud functionality
const accounts = fireCRUD(accountsRef);
```

### with express 
```javascript
// create an express app
const app = express();
// an example route to handle a request to get all accounts
app.get('/accounts', (req, res) => {
    accounts.all(req, res);
});
```
