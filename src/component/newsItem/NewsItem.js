import React from 'react'

const NewsItem =(props)=> {
        let {title, description,imgUrl,publishedAt,author, newsUrl,source}=props;
        return (
            <div className='container'>
                <div className="card">
                    <img src={imgUrl} className="card-img-top" alt="news" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <div className="my-3">
                            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger fs-6" style={{ zIndex:"1" }}>{source}</span>
                            </div>
                            
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">{"-By "+author+" on "+new Date(publishedAt).toLocaleString()}</small></p>
                            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read more</a>
                        </div>
                </div>
                
            </div>
        )
    }
    export default NewsItem
