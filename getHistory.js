// import fetch from "node-fetch";
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
const fs = require('fs')
// import fs from "fs";


function history(pageNum = 1, pageSize = 500) {
  var body = {
    query: { gameId: "SELF_MONEY_TREE", pageNo: pageNum, pageSize: pageSize },
    uuid: "--Windows-10-Chrome-105-1366*768*1-l99avvpl",
    platform: "pc",
    siteId: "sun",
  };
  fetch(
    "https://www.royalwin9.com/fg/api/v0/history_lottery_draw_list.do?lang=en",
    {
      headers: {
        accept: "application/json",
        "accept-language": "en,ml;q=0.9,ar;q=0.8,ca;q=0.7",
        "content-type": "application/json",
        "sec-ch-ua":
          '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        cookie:
          "cct=c5c8a96aacc8ea6413eb08fc40c019d0; r=68888590; JSESSIONID=node0ur3ihjrngen71tckz2ncsnlvs5900589.node0",
        Referer: "https://www.royalwin9.com/",
        "Referrer-Policy": "origin",
      },
      body: JSON.stringify(body),
      method: "POST",
    }
  )
    .then((res) => {
      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      // write file
      fs.writeFile("history.json", JSON.stringify(data), "utf8", (err) => {
        if (err) throw err;
        console.log("write to history.json on " + new Date().toDateString());
      });
    })
    .catch((err) => {
      console.error(err);
    });
}



function lastResults(pageNum = 1, pageSize = 500) {
  // replace
  var cookie =  "cct=5decb3bcde84cc8fc5476d22c6208dc8; r=53475882; JSESSIONID=node01piq68be9nyj11iq3v15td90fq9100715.node0"
  
  var body = {
    query: { gameId: "SELF_MONEY_TREE", pageNo: pageNum, pageSize: pageSize },
    uuid: "--Windows-10-Chrome-105-1366*768*1-l99avvpl",
    platform: "pc",
    siteId: "sun",
  };
  
  return fetch(
    "https://www.royalwin9.com/fg/api/v0/history_lottery_draw_list.do?lang=en",
    {
      headers: {
        accept: "application/json",
        "accept-language": "en,ml;q=0.9,ar;q=0.8,ca;q=0.7",
        "content-type": "application/json",
        "sec-ch-ua":
          '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "cookie": cookie,
        Referer: "https://www.royalwin9.com/",
        "Referrer-Policy": "origin",
      },
      body: JSON.stringify(body),
      method: "POST",
    }
  )
    .then((res) => {
      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }
      return res.json();
    })
    .then((res) => {
      // console.log(res);
      var lastWins = res.page.content.map(_=> parseInt(_['drawResults'][0][6]['name']))
      // console.log(issue);
      // console.log(out);
      return lastWins
    })
    .catch((err) => {
      console.error(err);
    });
}


// (async () => {
//   var data = await lastResults(1,10)
//   console.log(data)
// })()


module.exports =  {lastResults} 

