import React from 'react';
import ReactDOM from 'react-dom';
const instagramResponse = require('./photos');

const ids = [];

const instagramResp = () => {
    instagramResponse.data.map( x => ids.push(x.id) )
}

console.log(ids)

export default instagramResp;