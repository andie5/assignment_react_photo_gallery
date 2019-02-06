import React from 'react';
const instagramResponse = require('./photos');

const ids = [];

const InstagramResp = () => {
    return (
        instagramResponse.data.map( x => ids.push(x.id) )
    )
}

console.log(ids)

export default InstagramResp;