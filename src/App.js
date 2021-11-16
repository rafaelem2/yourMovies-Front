import React, {useEffect, useState} from 'react';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import API from './API';
import MovieRow from './components/MovieRow';
import Header from './components/Header';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await API.getHomeList();
      setMovieList(list);

      let series = list.filter(i=> i.slug === 'series');
      let randomSerie = Math.floor(Math.random()*(series[0].items.results.length-1));
      let serie = series[0].items.results[randomSerie];
      let serieInfo = await API.getMovieInfo(serie.id, 'tv');
      setFeaturedData(serieInfo);
    }

    loadAll();
  }, []);

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 20) {
        setBlackHeader(true)
      } else{
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scroll);

    return () => {
      window.removeEventListener('scroll', scroll);
    }
  }, []);

  return(
  <div className="page">

    <Header black={blackHeader}/>

    {featuredData &&
      <FeaturedMovie item={featuredData}/>
    }

    <section className="lists">
      {movieList.map((item, key)=>(
        <MovieRow key={key} title={item.title} items ={item.items}/>
      ))}
    </section>
  </div>
  )
}