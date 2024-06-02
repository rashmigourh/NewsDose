import React, { useState, useEffect } from 'react'
import NewsItem from '../newsItem/NewsItem';
import PropTypes  from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../Spinner"

const News =(props)=> {

    const capitalizeFirstLetter = (string)=> {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const [articles, setAritcles]=useState([]);
    const [loading, setLoading]=useState(true);
    const [page, setPage]=useState(1);
    const [totalResults, setTotalResults]=useState(0);

    const updateNews=async()=>{
      props.setProgress(10)
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=73c54383a068423eabd555edb80a7a0f&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true)
      let data=await fetch(url);
      props.setProgress(30);
      let parseData=await data.json();
      props.setProgress(70);
      setAritcles(parseData.articles);
      setTotalResults(parseData.totalResults);
      setLoading(false);
      props.setProgress(100);
    }

    useEffect(() => {
      document.title=`NewsDose-"${capitalizeFirstLetter(props.category)}`
      updateNews();
      // eslint-disable-next-line 
    }, [])

    const fetchMoreData = async() => {
      setPage(page+1)
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=73c54383a068423eabd555edb80a7a0f&page=${page+1}&pageSize=${props.pageSize}`;
      let data=await fetch(url);
      let parseData=await data.json();
      setAritcles(articles.concat(parseData.articles));
      setTotalResults(parseData.totalResults)
    }

    return (
      <>
        <h1 className='text-center' style={{marginTop:'90px'}}>Top Headlines-{capitalizeFirstLetter(props.category)}</h1>

        {loading && < Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults  }
          loader={< Spinner />}
        >

<div className="container">
        <div className="row pt-5">
           {
            articles.map((e)=>{
                return <div className="col-md-4 pb-5" key={e.url}>
            <NewsItem title={e.title?e.title:""} source={e.source.name?e.source.name:"Unknown"} publishedAt={e.publishedAt?e.publishedAt:""} description={e.description?e.description:""} author={e.author?e.author:"Unknown"} imgUrl={e.urlToImage?e.urlToImage:"https://img.freepik.com/free-vector/people-showcasing-different-types-ways-access-news_53876-66060.jpg" } newsUrl={e.url}/>
          </div>
            })
           }
        </div>
        </div>
</InfiniteScroll>
      </>
    )
  }
News.defaultProps={
  country: 'in',
  pageSize:8,
  category:'general'
}

News.prototype={
  country: PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}

export default News 
