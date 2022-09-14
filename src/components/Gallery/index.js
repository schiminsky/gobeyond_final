import React, { useEffect, useState } from "react";
import Paragraph from "../Paragraph";
import "./style.css";

function Gallery() {
    const url = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5';
    const [thumbs, setThumbs] = useState()
    const [imageUrl, setImageUrl] = useState()
    const [text, setText] = useState('')
    const [thumbIndex, setThumbIndex] = useState(0)

    const handleChangeImage = (url, itemText) => {
        setImageUrl(url)
        setText(itemText)
    }

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(result => {
            setThumbs(result)
            setImageUrl(result[0].url)
            setText(result[0].title)
        })
        .catch(function(err){
            console.error(err);
        })
      }, []);
      
    return(
        <div className="gallery">
            <div className="first-col">
                <Paragraph text={text}/>
                <button className="cta"><span>Veja mais</span></button>
                <ul className="thumbnails">
                    {thumbs?.map((item, index) => {
                        return (
                            <li key={index} className="item" onClick={() => {handleChangeImage(item.url, item.title)}}><img src={item.thumbnailUrl} alt="" /></li>
                        )
                    })}
                </ul>
            </div>
            <div className="second-col">
                <img src={imageUrl} alt="" />
            </div>
        </div>
    )
}

export default Gallery