var functions, collection_name, app;

// GET /collection_name
let all = () => {
    app.get('/' + collection_name, (req, res) => {
        functions.all(req, res);
    });
};

// POST /collection_name
/* {
 field1: value1,
 field2: value2,
 field3: value3
 }
 */
let save = () => {
    app.post('/' + collection_name, (req, res) => {
        functions.save(req, res);
    });
};

// DELETE /collection_name/:id
let destroy = () => {
    app.delete('/' + collection_name + '/:id', (req, res) => {
        functions.destroy(req, res);
    });
};

// GET /collection_name/:id
let find = () => {
    app.get('/' + collection_name + '/:id', (req, res) => {
        functions.find(req, res);
    });
};


// GET /collection_name
/*
 {
 name: 'field_name',
 value: 'field_value'
 }
 */
let find_by_field = () => {
    app.get('/' + collection_name + '/:id', (req, res) => {
        functions.find_by_field(req, res);
    });
};


// PUT /collection_name/:id
let update = () => {
    app.put('/' + collection_name + '/:id', (req, res) => {
        functions.update(req, res);
    });
};

const routes = {
    "all": all,
    "find": find,
    "find_by_field": find_by_field,
    "destroy": destroy,
    "update": update,
    "save": save
};

module.exports = function (funcs, express_app, col_name) {
    functions = funcs;
    collection_name = col_name;
    app = express_app;
    return routes;
};
