const axios = require("axios");
require("dotenv").config()

exports.getAutoComplete = async function (req, res) {
    const data= req.params.id;
    const options = {
        method: 'GET',
        url: 'https://yummly2.p.rapidapi.com/feeds/auto-complete',
        params: {q: data},
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
        }
      };
      
      console.log(req.params);
      axios.request(options).then(function (response) {
        return res.status(201).send(response.data);
        
      }).catch(function (error) {
        return res.status(500).send(`ERROR : ${error.message}` );
      });
  };

  exports.getSearch = async function (req, res) {
    const data =req.params.id;
    const start = req.params.start_id;
    const maxResult = req.params.maxResult_id;
    const options = {
        method: 'GET',
        url: 'https://yummly2.p.rapidapi.com/feeds/search',
        params: {
          start: start,
          maxResult: maxResult,
          maxTotalTimeInSeconds: '7200',
          q: data,
          allowedAttribute: 'diet-lacto-vegetarian,diet-low-fodmap',
          FAT_KCALMax: '1000'
        },
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

  exports.getList = async function (req, res) {
   
    const start = req.params.start_id;
    const limit = req.params.limit_id;
    const options = {
        method: 'GET',
        url: 'https://yummly2.p.rapidapi.com/feeds/list',
        params: {limit: limit, start: start},
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

  exports.getListSimilarities = async function (req, res) {
    const id = req.params.id;
    const start = req.params.start_id;
    const limit = req.params.limit_id;
    const options = {
        method: 'GET',
        url: 'https://yummly2.p.rapidapi.com/feeds/list-similarities',
        params: {
          limit: limit,
          start: start,
          id: id,
          apiFeedType: 'moreFrom',
          authorId: 'Yummly'
        },
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

  