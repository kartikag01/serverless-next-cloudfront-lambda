import React from 'react'
import * as axios from "axios";
import List from './List';
import "./index.css";

function Trending(props) {
  const { trendingRepos } = props;
  
  return trendingRepos.length ? <List trendingRepos={trendingRepos} /> : <Loader />;
}


const GetRepos = (queryParams = "?since=daily") => {
    return axios.get('https://github-trending-api.now.sh/repositories' + queryParams)
      .then(res => res.data);
  }
  
Trending.getInitialProps = async () => {
    const response =  await GetRepos()
    return {
        trendingRepos: response
    }
};

export default Trending;