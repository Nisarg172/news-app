
import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {
        let {title,description,imgUrl,url}= this.props;
        return (
            <>
            <div className="card" style={{margin: "25px"}}>
                <img src={imgUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url}  target="_blank" className="btn btn-sm btn-primary">Read more</a>
                </div>
            </div>
            </>
        )
    }
}

