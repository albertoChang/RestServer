const {response, request} = require('express');

const userGet = (req= request, res = response) => {
    const {q,p='mund'} = req.query;

    res.json({
        msg:'get API controller',
        q,
        p
    });
}

const userPost = (req, res = response) => {
    const {nhc, dni} = req.body;
    res.json({
        msg:'post API controller',
        nhc,
        dni
    });
}

const userPut = (req, res = response) => {
    const id = req.params.id;

    res.status(400).json({
        msg:'put API controller',
        id
    });
}

const userPatch = (req, res = response) => {
    res.status(400).json({
        msg:'patch API controller'
    });
}

const userDelete = (req, res = response) => {
    res.json({
        msg:'delete API controller'
    });
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete
}