import { useEffect, useState } from 'react'
import './Cards.scss'
export const Cards = () => {
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((res) => res.json())
            .then((data) => setPhotos(data))
            .catch()
    }, [])
    type stringOrNumber = {
        albumId: string,
        id: number,
        title: string,
        url: string,
    }
    return (
        <>
            {photos?.map((photo: stringOrNumber) => (
                <div className='card'>
                    <div className="card-top">
                        <img src={photo?.url} alt="" />
                    </div>
                    <div className="card-bottom">
                        <h4 className='id' key={photo.id}>{photo?.albumId}</h4>
                        <p className="userId" key={photo.id}>{photo?.id}</p>
                        <h3 className='title' key={photo.id}>{photo?.title}</h3>
                    </div>
                </div>
            ))}
        </>
    )
}
