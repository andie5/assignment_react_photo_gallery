import React from 'react';

const getDateFromString = (dateString) => {
    let date = dateString + '999';
    console.log("date is :", new Date( (date)))
    return new Date( parseInt(date) );
}

const getRandomPhoto = () => {
    const numImagesAvailable = 242;
    return Math.floor(Math.random() * numImagesAvailable);
}

const PhotoCard = ({username, postedTime, likes, comments}) => {
    let randomImageIndex = getRandomPhoto()

    const collectionID = 1163637
    const imageWidth = 240
    const imageHeight = 240
    const photoImage= `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomImageIndex}`
     console.log("postedTime from json ",{postedTime})
    console.log("result from func ",getDateFromString(postedTime))

    return(

        <div className="PhotoCard well">
            <h3>{username}</h3>
            <img src={photoImage} alt="from unsplash.com"/>
            <p>Created: {getDateFromString(postedTime).toLocaleString()}</p>
            <p>Likes: {likes}</p>
            <p>Comments: {comments}</p>
        </div>
    );
    
}

export default PhotoCard