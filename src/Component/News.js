
import NewsItems from './NewsItems'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [article, setarticle] = useState([]);
    const [loading, setloading] = useState(false);
    const [page, setpage] = useState(1);
    const [totalResult, settotalResult] = useState(0);



    useEffect(() => {
        loadeData();
    }, []);

    const handleNext = () => {
        setpage(page + 1)
        setTimeout(() => {
            //console.log(page);     
            loadeData();
        }, 500);
    };

    const handlePeivious = () => {
        setpage(page - 1)
        setTimeout(() => {
            //    console.log(page);     
            loadeData();
        }, 500);
    };

    const fetchMoreData = async () => {

        let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=abd2d242a9c2476585963ed6e6b20af5&page=${page + 1}&pageSize=20`;
        setpage(page + 1)
        // let url=`https://newsdata.io/api/1/news?apikey=pub_3466fb700027deac8998271a17754e5f12e8&language=hi,en&country=in&category=${props.category}&page=${page}`;
        let data = await fetch(url);
        let jsondata = await data.json();

        setarticle(article.concat(jsondata.articles))
        settotalResult(jsondata.totalResults);
        //setState({ article: article.concat(jsondata.results), totalResult: jsondata.totalResults });


    };

    const loadeData = async () => {
        props.setprogress(10);

        let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.api}&page=${page}&pageSize=20`;

        // let url=`https://newsdata.io/api/1/news?apikey=pub_3466fb700027deac8998271a17754e5f12e8&language=hi,en&country=in&category=${props.category}&page=${page}`
        props.setprogress(20);
        let data = await fetch(url);
        let jsondata = await data.json();
        props.setprogress(60);
        setarticle(jsondata.articles);
        settotalResult(jsondata.totalResults);
        console.log(url);
        // setState({ article: jsondata.results, totalResult: jsondata.totalResults });
        props.setprogress(100);
        //  console.log("hello" + url);
    }


    return (
        <>


            <div className="container my-2  " >
                <h2 className="text-center text-white"> News App - {props.category.toUpperCase()}</h2>


                <InfiniteScroll
                    dataLength={article.length}
                    next={fetchMoreData}
                    hasMore={article.length !== totalResult}
                    loader={<h4>Loading...</h4>}
                >
                    <div className="row container">
                        {article.map((element) => {

                            return <div key={element.link} className="col-md-4">

                                <NewsItems
                                    imgUrl={element.urlToImage ? element.urlToImage : "http://www.tgsin.in/images/joomlart/demo/default.jpg"}

                                    // imgUrl={element.image_url ? element.image_url : "http://www.tgsin.in/images/joomlart/demo/default.jpg"}

                                    description={element.description ? element.description.slice(0, 88) + "..." : "Description is not avaible....."}
                                    title={element.title ? element.title.slice(0, 44) + "..." : "Title is not avaible....."}
                                    url={element.url}
                                    // url={element.link}

                                    source={element.source.name}
                                // source={element.source_id}
                                />
                            </div>



                        })}
                    </div>
                </InfiniteScroll>

                {/* button next and privious */}

                {/* <div className="container d-flex justify-content-between my-3">
                        <button onClick={handlePeivious} type="button" disabled={page <= 1} className="btn btn-dark">&larr; privious </button>

                        <button onClick={handleNext} disabled={page + 1 > Math.ceil(totalResult / 20)} type="button" className="btn btn-dark ">Next &rarr;</button>
                    </div> */}
            </div>
        </>
    )

}

News.defaultProps = {
    country: "in",
    category: "science",
    api: ""
}

News.prototype = {
    country: PropTypes.string,
    category: PropTypes.string,
    api: PropTypes.string,
}
export default News