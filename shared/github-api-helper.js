'use strict'

const axios = require('axios');
const config = require('../config.json');


const getRepoInfo = async (repoName) => {
    let response = await __apiGet(`https://api.github.com/repos/${repoName}`);
    console.log('response', response);
    return response;

}

/**
 * @name  __apiGet
 * @param {*} url the url to request
 * @returns {JSON} the data object of the response or the own response if there is no data object on it
 */
const __apiGet = async (url) => {
    try {
        let response = await axios.get(
            url,
            {
                headers: { Authorization: `token ${config.auth.github_access_token}` }
            }
        );
        response = response.hasOwnProperty('data') ? response.data : response;
        return  response;
    } catch (error) {
        console.log('__apiGet.error', error)
    }
}

module.exports = {
    getRepoInfo
};

//getRepoInfo('vmg/redcarpet');
