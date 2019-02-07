import React from 'react';
import PhotoCard from './PhotoCard'


const PhotoCollection = ({peoplePhotos}) => {

    const photos = peoplePhotos.data.map((personPhoto) => (
        <PhotoCard username={personPhoto['user'].username} /*key={personPhoto['user'].username}*/ />
    ));

    return(
        <div className="PhotoCollection container">
            {photos}
        </div>
    );
    
}

export default PhotoCollection