
import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {
        let {title,description,imgUrl,url,source}= this.props;
        return (
            <>
            
            <div className="card text-white bg-dark" style={{margin: "0px 25px 25px 0px"}}>
                

                <img src={imgUrl} className="card-img-top" alt="..."/>
                <span style={{background: "#058705"}} className="badge badge-pill badge-success">{source}</span>
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}
                </p>
                <a href={url}  target="_blank" className="btn btn-sm btn-primary">Read more</a>
                </div>
            </div>
            </>
        )
    }
}

