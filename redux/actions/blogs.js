import { BLOGS, BLOGS_CATEGORY, BLOGS_DETAIL, BLOGS_SEARCH } from "reactism/types";
import { HOST, API_BLOGS } from 'reactism/config/api'
import { Router } from 'reactism/routes'

export const getBlogs = () => dispatch => {
  fetch(HOST + API_BLOGS, {
    method: 'GET'
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    dispatch({ type: BLOGS, response: data })
  })
  .catch(err => console.log(err))
};

// Detail news
export const getDetailBlogs = id => dispatch => {
  return new Promise((resolve, reject) => {
    fetch(`${ HOST + API_BLOGS }/${ id }`, {
      method: 'GET',
      headers: {
        "dtcmskey":"d855bc0b176126c3f7e3a46029362b60ecbe315c"
      }
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      dispatch({ type: BLOGS_DETAIL, response: data })
      resolve(data)
    })
    .catch(error => {
      reject(error)
    })
  })
}

