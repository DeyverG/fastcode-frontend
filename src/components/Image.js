import React from 'react'

const Image = (image) => {

    const { m } = image.image.media
    return (
        <>
            <div className="m-1">
                <img src={m} alt="" className="w-52 h-52 rounded-lg" />
            </div>
        </>
    );
}

export default Image;