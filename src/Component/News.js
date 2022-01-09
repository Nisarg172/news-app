
import NewsItems from './NewsItems'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {


    static defaultProps = {
        country: "in",
        category: "science"
    }

    PropTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        
    }

    constructor() {
        super();
        console.log("i am a constructor");
        this.state = {
            article: [],
            loading: false,
            page: 1,
        }
    }

    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=abd2d242a9c2476585963ed6e6b20af5&page=${this.state.page}`;
        // let data = await fetch(url);
        // let jsondata = await data.json();
        // this.setState({ article: jsondata.articles });
        console.log("did mount");
        this.loadeData();
    }



    handleNext = () => {
        this.setState({ page: (this.state.page) + 1 });
        setTimeout(() => {
            //console.log(this.state.page);     
            this.loadeData();
        }, 500);
    };

    handlePeivious = () => {
        this.setState({ page: (this.state.page) - 1 });
        setTimeout(() => {
            //    console.log(this.state.page);     
            this.loadeData();
        }, 500);
    };

    fetchMoreData = async() => {
            
           
            this.setState({ page: this.state.page + 1 })
            let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=abd2d242a9c2476585963ed6e6b20af5&page=${this.state.page}&pageSize=20`;
           
            let data = await fetch(url);
            let jsondata = await data.json();
           
            this.setState({ article: this.state.article.concat(jsondata.articles), totalResult: jsondata.totalResults });
            
            
      
    };

    async loadeData() {
        this.props.setprogress(10);
        //262ffd01fcf14ae3ae2c6bab7bb1f7af
        //abd2d242a9c2476585963ed6e6b20af5
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=abd2d242a9c2476585963ed6e6b20af5&page=${this.state.page}&pageSize=20`;
        this.props.setprogress(20);
        let data = await fetch(url);
        let jsondata = await data.json();
        this.props.setprogress(60);
        this.setState({ article: jsondata.articles, totalResult: jsondata.totalResults });
        this.props.setprogress(100);
      //  console.log("hello" + url);
    }

    render() {
        return (
            <>

                <div className="container my-2  " >
                    <h1 className="text-center text-white"> News app - {this.props.category.toUpperCase()}</h1>


                    <InfiniteScroll
                        dataLength={this.state.article.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.article.length !== this.state.totalResult}
                        loader={<h4>Loading...</h4>}
                    >
                        <div className="row container">
                            {this.state.article.map((element) => {
                                return <div key={element.url} className="col-md-4">

                                    <NewsItems
                                        imgUrl={element.urlToImage ? element.urlToImage : "http://www.tgsin.in/images/joomlart/demo/default.jpg"}
                                        description={element.description ? element.description.slice(0, 88) + "..." : "Description is not avaible....."}
                                        title={element.title ? element.title.slice(0, 44) + "..." : "Title is not avaible....."}
                                        url={element.url}
                                    />
                                </div>

                            })}
                        </div>
                    </InfiniteScroll>

                    {/* button next and privious */}

                    {/* <div className="container d-flex justify-content-between my-3">
                        <button onClick={this.handlePeivious} type="button" disabled={this.state.page <= 1} className="btn btn-dark">&larr; privious </button>

                        <button onClick={this.handleNext} disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / 20)} type="button" className="btn btn-dark ">Next &rarr;</button>
                    </div> */}
                </div>
            </>
        )
    }
}
