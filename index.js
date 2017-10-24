const fireCRUD = ((collection_ref, express_app = null, only = null) => {

    const functions = require('./functions')(collection_ref);

    handleOnlyList((func_name) => {
        this[func_name] = functions[func_name];
    });

    // add express routing
    if (express_app) {

        let collection_name = collectionNameFromRef(collection_ref);
        //initializing routes
        const routes = require('./routes')(functions, express_app, collection_name);

        handleOnlyList((func_name) => {
            routes[func_name]();
        });
    }

    function handleOnlyList(handler) {
        // in case of not defining an only list, all functions are added by default
        if (!only) {
            Object.keys(routes).forEach(function (func_name) {
                handler(func_name);
            });
        } else if (only.length == 0) {
            throw "only list can't be of zero length";
        } else {
            only.forEach((func_name) => {
                handler(func_name);
            });
        }
    }

    function collectionNameFromRef(collection_ref) {
        return collection_ref._referencePath.segments[0];
    }

    //TODO: add the ability to define cached actions

    //TODO: add the ability to authenticate before calling a function

    //TODO: add the ability to give verbose errors or not 

    return this;
});

module.exports = fireCRUD;