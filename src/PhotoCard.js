import React from 'react';

const PhotoCard = ({props}) => {
    const {username/*, postedTime, photo, likeCounts, commentCounts*/} = props
    return(

        <div className="PhotoCard well">
            <h3>{username}</h3>
            {/* {photo}
            <ul>
                <li>{postedTime}</li>
                <li>{likeCounts}</li>
                <li>{commentCounts}</li>
            </ul> */}
        </div>
    );
    
}

export default PhotoCard