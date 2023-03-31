const axios = require("axios");
require("dotenv").config()

exports.getTags = async function (req, res) {
    
    const options = {
        method: 'GET',
        url: 'https://yummly2.p.rapidapi.com/tags/list',
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
        }
      };
      
      axios.request(options).then(function (response) {
        return res.status(201).send(response.data);
      }).catch(function (error) {
        return res.status(500).send(`ERROR : ${error.message}` );
      });
  };

  exports.getCategories = async function (req, res) {
    
    const options = {
      method: 'GET',
      url: 'https://yummly2.p.rapidapi.com/categories/list',
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
      }
    };
    
    axios.request(options).then(function (response) {
      return res.status(201).send(response.data);
    }).catch(function (error) {
      return res.status(500).send(`ERROR : ${error.message}` );
    });
  };

  exports.getReviews = async function (req, res) {
    const globalId =req.params.global_id;
    const limit = req.params.limit_id;
    const offset = req.params.offset_id;
    
    const options = {
      method: 'GET',
      url: 'https://yummly2.p.rapidapi.com/reviews/list',
      params: {offset: offset, globalId: globalId, limit: limit},
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
      }
    };
    
    axios.request(options).then(function (response) {
      return res.status(201).send(response.data);
    }).catch(function (error) {
      return res.status(500).send(`ERROR : ${error.message}` );
    });
  };