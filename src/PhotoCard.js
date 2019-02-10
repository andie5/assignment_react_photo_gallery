import React from 'react';

const PhotoCard = ({username, postedTime}) => {
    // console.log("photo in photo card:", username)
    // const {username, postedTime/*, photo, likeCounts, commentCounts*/} = photo
    return(

        <div className="PhotoCard well">
            <h3>{username}</h3>
            {/* {photo} */}
            <ul>
                <li>{postedTime}</li>
                {/* <li>{likeCounts}</li> */}
                {/* <li>{commentCounts}</li> */}
            </ul>
        </div>
    );
    
}

export default PhotoCard