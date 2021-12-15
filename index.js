console.log("Test https calls");
/*
const axios= require('axios');

const url="https://icanhazdadjoke.com";

axios.get(url,{headers :{Accept:"application\json"}}).then(res=>{

console.log(res.data.joke);
}).catch(exc=> {
console.log(exc);
});*/
const request = require('request');

request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
});
