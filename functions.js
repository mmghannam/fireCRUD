var collection_ref = null;

// get all documents
let all = (req, res) => {
    collection_ref.get()
        .then((snapshot) => {
            res.status(200).send(getData(snapshot));
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

// save a document
let save = (req, res) => {
    let document = JSON.parse(req.body);
    collection_ref.doc().set(document)
        .then((ref) => {
            res.status(200).send({
                message: 'Document created successfully',
                id: ref.id
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

// find documents by field
let find_by_field = (req, res) => {
    let field = req.body.field;
    collection_ref.where(field.name, '==', field.value).get()
        .then((snapshot) => {
            res.status(200).send(getData(snapshot));
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

// find document by id
let find = (req, res) => {
    let id = req.params.id;
    collection_ref.doc(id).get()
        .then(doc => {
            if (!doc.exists) {
                res.status(404).send({ message: 'No such document!' });
            } else {
                let obj = {};
                obj[doc.id] = doc.data();
                res.status(200).send(obj);
            }
        })
        .catch(err => {
            res.status(500).send(err);
        });
};

// update document
let update = (req, res) => {
    let id = req.params.id;
    let updated_fields = JSON.parse(req.body);
    collection_ref.doc(id).update(updated_fields)
        .then(() => {
            res.status(200).send({ message: "Document updated successfully" });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

// delete document
let destroy = (req, res) => {
    let id = req.body.id;
    collection_ref.doc(id).get()
        .then((doc) => {
            let obj = {};
            obj[doc.id] = doc.data();
            res.status(200).send(obj);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

let getData = (snapshot) => {
    let result = [];
    snapshot.forEach(doc => {
        let obj = {};
        obj[doc.id] = doc.data();
        result.push(obj);
    });
    return result;
};


let functions = {
    "all": all,
    "find": find,
    "find_by_field": find_by_field,
    "destory": destroy,
    "update": update,
    "save": save
};

module.exports = function (col_ref) {
    collection_ref = col_ref;
    return functions;
};