const fireCRUD = ( (collectionRef) => {

    this.__ref = collectionRef;

    this.all = (req, res) => {
        this.__ref.get()
            .then((snapshot) => {
                res.status(200).send(get_data(snapshot));
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    };

    this.save = (req, res) => {
        let instance = req.body.instance;
        this.__ref.doc().set(instance)
            .then(() => {
                res.status(200).send({message: 'Account created successfully'});
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    };

    this.find_by_field = (req, res) => {
        let field = req.body.field;
        collectionRef.where(field.name, '==', field.value).get()
            .then((snapshot) => {
                res.status(200).send(get_data(snapshot));
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    };

    function get_data(snapshot) {
        var result = [];
        snapshot.forEach(doc => {
            var obj = {};
            obj[doc.id] = doc.data();
            result.push(obj);
        });
        return result;
    }

    return this;
});

module.exports = fireCRUD;