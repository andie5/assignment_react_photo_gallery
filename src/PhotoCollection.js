import React from 'react';
import PhotoCard from './PhotoCard'


const PhotoCollection = ({peoplePhotos}) => {
    const photos = peoplePhotos.data.map((personPhoto) => (
        <PhotoCard username={personPhoto.user.username} 
            postedTime={personPhoto.created_time}
            photoImage={personPhoto.link}
            likes={personPhoto.likes.count}
            comments={personPhoto.comments.count}
            key={personPhoto.user.username} 
        />
    ));

    const content = photos.map((photo, i) => {
        if((i+1) % 4 === 0){ 
          return (
            <div className="row" key={photo.username}>       
              <div className="col-md-3">
                {photo}
              </div>
            </div>
          )
        }else{
          return (<div className="col-md-3">{photo}</div>);
        }
    });



    return(
        <div className="PhotoCollection">
            {content}
        </div>
    );
}

export default PhotoCollection