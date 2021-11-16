import React from "react";
import './FeaturedMovie.css';

export default ({item}) => {
    let genres = [];
    for(let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    let description = item.overview;
    if (description.length > 240) {
        description = description.substring(0, 240) + '...';
    }


    return (
        <div> 
            <section className="featured" style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
            }}>
                <div className="verticalTrans">
                    <div className="horizontalTrans">
                        <div className="featuredName">{item.original_name}</div>
                        <div className="info">
                            <div className="points">{item.vote_average} pontos</div>
                            <div className="seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's':''}</div>
                        </div>
                        <div className="description">{description}</div>
                        <div className="btn">
                            <a href={`/watch/${item.id}`} className="watchBtn">► Assistir</a>
                            <a href={`/list/add/${item.id}`} className="listBtn">+ Minha Lista</a>
                        </div>
                        <div className="genres"><strong>Gêneros: </strong>{genres.join(', ')}</div>
                    </div>
                </div>
            </section>
        </div>
    );
}