import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import Layout from './Layout';
import Dropdown from 'react-bootstrap/Dropdown';
import { useForm } from "react-hook-form"


const News = (props) => {
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const[searchKeyword,setSearchKeyword] = useState('');
    const[newsSection,setNewsSection] = useState('top-headlines');
    //useForm hook to handle react forms
    const {
        register,
        handleSubmit,
        setError,    
        formState: { errors, isSubmitting },
      } = useForm();

    const onSubmit = async (data) => {
        
        setSearchKeyword(data.keyword)
        setNewsSection('everything')
        console.log(searchKeyword)
        const url = `https://newsapi.org/v2/everything?q=${data.keyword}&sortBy=popularity&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
        let apiData = await fetch(url);
        let parsedData = await apiData.json()
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        
    }

    // const handleOnChange=(event)=>{
    //     setSearchKeyword(event.target.value)
    //     //console.log('the search value is ',searchKeyword)
    // }

    // const handleOnClick=()=>{
    //     setNewsSection('everything');
    //     updateNews();  
    // }

    // useEffect(() => {
    //     let title = capitalizeFirstLetter(props.category)?capitalizeFirstLetter(props.category):'Headlines'
    //     document.title = `${title}-LiveNews.com`;
    //     updateNews(); 
    //     // eslint-disable-next-line
    // }, [])

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNews = async ()=> {
        const url = `https://newsapi.org/v2/${newsSection}?q=${searchKeyword}&country=${props.country}&category=${props.category}&sortBy=popularity&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
    }

    useEffect(() => {
        let title = capitalizeFirstLetter(props.category)?capitalizeFirstLetter(props.category):'Headlines'
        document.title = `${title}-LiveNews.com`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/${newsSection}?q=${searchKeyword}&country=${props.country}&category=${props.category}&sortBy=popularity&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };

  return (
    <Layout>
        <div className="container-fluid" >
        <ul style={{listStyle:'none'}} >
            <li className="nav-item dropdown" style={{float:'left'}}>
                <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                News Categories
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/sports">Sports</Dropdown.Item>
                                <Dropdown.Item href="/science">Science</Dropdown.Item>
                                <Dropdown.Item href="/health">Health & Nutrition</Dropdown.Item>
                                <Dropdown.Item href="/others">Others</Dropdown.Item>
                            </Dropdown.Menu>
                </Dropdown>
            </li>
            <li style={{float:'right'}}>
                <form className="form-inline d-flex my-2 my-lg-10" action="" onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control mr-sm-2" placeholder='Search news' {...register("keyword", { minLength: {value: 3, message: "Min length is 3"}})} type="text"   />
                    <button className="btn btn-outline-success d-flex my-2 my-sm-0" disabled={isSubmitting} type="submit" value="Search" >Search</button>
                    {/* {errors.searchKeyword && <div className='red'>{errors.searchKeyword.message}</div>} */}
                        {/* <input className="form-control mr-sm-2" type="search" placeholder="Enter the news topic" aria-label="Search" value={searchKeyword} onChange={handleOnChange} />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleOnClick}>Search</button> */}
                </form>
                <div>{errors.keyword && <div className='red'>{errors.keyword.message}</div>}</div>
            </li>
            
        </ul>
        </div>
        <h1 className="text-center" style={{ margin: '10px 0px' }}><img width="400px" height='200px' src="breakingnews.png" alt='Top Headlines' style={{marginTop:'10px'}}></img></h1>
        <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                    <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                    </p>
                    }
        > 
            <div className="container">
                <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title:""} description={element.description ? element.description.slice(0,90) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                </div>
            </div> 
        </InfiniteScroll>
    </Layout>
  )
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: '',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News