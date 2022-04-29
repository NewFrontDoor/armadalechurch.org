import 'es6-promise/auto';
import fetch from 'isomorphic-fetch';

//Change this URL when the API is set up for the new website
const DRUPAL_URL = "https://api.armadalechurch.org/api/views/";
const DRUPAL_SEARCH_SERMONS = DRUPAL_URL + "all_sermons_api?display_id=services_1&filters";
const CORS_PROXY = 'http://localhost:8080/'
const DRUPAL_GET_PAGE = DRUPAL_URL + "react_page_api?display_id=services_1&filters[page_title]=";
const DRUPAL_SEARCH_PAGES = DRUPAL_URL + "search_pages_api?display_id=services_1&filters[search_query]=";
const DRUPAL_BLOG_POSTS = "https://api.armadalechurch.org/api/all-blog-posts"
const DRUPAL_FRONT_PAGE_IMAGE = "https://api.armadalechurch.org/api/front-page-image"

//Example suffix: all_sermons_api?filters[preacher]=keith&filters[title]=reality

//API uses Services and Services views on the drupal 7 instance

export function getFromDrupalAPI(url, callback) {
  if (url.includes('?')) {
    url += '&display_id=services_1';
  }
  else {
    url += '?display_id=services_1'
  }
  fetch(DRUPAL_URL + url)
    .then(resp => resp.json())
    .then(function (data) {
      callback(data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

export function searchDrupalSermons(query, type, callback) {
  fetch(DRUPAL_SEARCH_SERMONS + '[' + type + ']=' + query)
    .then(resp => resp.json())
    .then(function (data) {
      callback(data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

//fetch votd using a cors proxy -- currently not setup
export function getVerseOfTheDay(url, callback) {
  fetch(CORS_PROXY + url)
    .then(resp => resp.json())
    .then(function (data) {
      callback(data.votd);
    })
    .catch(function (error) {
      console.log(error);
    })
}

export function getPageFromDrupal(page, callback) {
  fetch(DRUPAL_GET_PAGE + page)
    .then(resp => resp.json())
    .then(function (data) {
      callback(data);
    })
    .catch(function (error) {
      console.log(error);
    })
}


export function searchDrupalPages(page, callback) {
  fetch(DRUPAL_SEARCH_PAGES + page)
    .then(resp => resp.json())
    .then(function (data) {
      callback(data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

export function getBlogPosts(callback) {
  fetch(DRUPAL_BLOG_POSTS)
    .then(resp => resp.json())
    .then(function (data) {
      callback(data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

export function getFrontPageImage(callback) {
  fetch(DRUPAL_FRONT_PAGE_IMAGE)
    .then(resp => resp.json())
    .then(function (data) {
      callback(data);
    })
    .catch(function (error) {
      console.log(error);
    })
}