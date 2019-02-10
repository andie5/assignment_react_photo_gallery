import React from 'react';
import PhotoCard from './PhotoCard'


const PhotoCollection = ({peoplePhotos}) => {
    console.log("peoplePhotos in photocollection", peoplePhotos)

    const photos = peoplePhotos.data.map((personPhoto) => (
        <PhotoCard username={personPhoto.user.username} 
            postedTime={personPhoto.created_time}
            key={personPhoto.user.username} 
        />
    ));
    console.log("photos in photocollec", photos)

    return(
        <div className="PhotoCollection container">
            {photos}
        </div>
    );
    
}

export default PhotoCollection