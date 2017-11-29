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
### using default express routes
```javascript
// load package
const fireCRUD = require('firecrud');
// get reference to collection
const accountsRef = db.collection('accounts');
// load express app
var app = express();
// add crud functionality
const accounts = fireCRUD(accountsRef, app);
```

### routes defined by default
#### All
``` HTTP
GET /collection_name
```
returns all documents in collection.
#### Save
``` HTTP
POST /collection_name
{
 "field1": "value1",
 "field2": "value2",
 "field3": "value3"
 }
```
Takes document object in request body, saves document in collection and returns a success message.
#### Destroy
``` HTTP
DELETE /collection_name/:id
```
Takes document id as a parameter, removes that document and returns a success message.
#### Update
``` HTTP
PUT /collection_name/:id
{
"field1_to_update" : "value1",
"field2_to_update" : "value2"
}
```
Takes document id as a parameter and an object of the updated fields in request body, updates that document and returns a success message.
#### Find
``` HTTP
GET /collection_name/:id
```
Takes document id as a parameter, returns the found document.



### defining your own routes with express 
Load the package
```javascript
// load package
const fireCRUD = require('firecrud');
// get reference to collection
const accountsRef = db.collection('accounts');
// add crud functionality
const accounts = fireCRUD(accountsRef);
```
define your own routes
```javascript
// create an express app
const app = express();
// an example route to handle a request to get all accounts
app.get('/accounts', (req, res) => {
    accounts.all(req, res);
});
```

## Interested in Contribution?
E-mail me at Mohammad.m.ghannam@gmail.com
