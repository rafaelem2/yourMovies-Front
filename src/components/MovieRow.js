import React, {useState} from 'react';
import './MovieRow.css';
import axios from "axios";


export default ({title, items}) => {
    const [barX, setBarX] = useState(0);
    const [id, setId] = useState("");

    const moveLeft = () => {
        let backX = barX + Math.round(window.innerWidth / 2)
        if (backX > 0) {
            backX = 0
        }
        setBarX(backX)
    }
    const moveRight = () => {
        let forwardX = barX - Math.round(window.innerWidth / 2)
        let rightSize = items.results.length * 170
        if (window.innerWidth - rightSize > forwardX) {
            forwardX = (window.innerWidth - rightSize) - 60
        }
        setBarX(forwardX)
    }


    return (
        <div className="movieRow">
            <h2> {title} </h2>
            <div className="leftArrow" onClick={moveLeft}>
                <img className="l" src="/images/leftArrow.png"/>
            </div>
            <div className="rightArrow" onClick={moveRight}>
                <img className="r" src="/images/rightArrow.png"/>
            </div>
            <div className="movRowListArea">
                <div className="movRowList" style={{
                    marginLeft: barX,
                    width: items.results.length * 170
                }}>
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="movRowItem">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                            <button className="listBtn" onClick={() => 
                                axios.post(`https://secure-lake-79874.herokuapp.com/api/favorite/`, {title: item.poster_path}).then((response) => {
                                    console.log(response.data.title)
                                })
                            }> + Minha Lista</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}