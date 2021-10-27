const Cards = require('../models/dbCards');

const controllerApp = {
    hello: (req,res)=>{
        res.status(200).send("hola");
    },
    createCard: (req,res)=>{
        const dbCard = req.body;

        Cards.create(dbCard, (err, data) => {
                    if(err) {
                        res.status(500).send(err)
                    } else {
                        res.status(201).send(data)
                    }
        });
    },
    getCards: (req,res) => {
        Cards.find((err, data) => {
            if(err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(data)
            }
        })
    }
}

module.exports = controllerApp;