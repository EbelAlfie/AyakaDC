const { default: axios } = require("axios");

async function login(requestBody) {

  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json, text/plain, */*");
  myHeaders.append("Accept-Language", "en-US,en;q=0.9");
  myHeaders.append("Connection", "keep-alive");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Origin", "https://account.hoyolab.com");
  myHeaders.append("Referer", "https://account.hoyolab.com/");
  myHeaders.append("Sec-Fetch-Dest", "empty");
  myHeaders.append("Sec-Fetch-Mode", "cors");
  myHeaders.append("Sec-Fetch-Site", "same-site");
  myHeaders.append("User-Agent", "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36");
  myHeaders.append("sec-ch-ua", "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"");
  myHeaders.append("sec-ch-ua-mobile", "?1");
  myHeaders.append("sec-ch-ua-platform", "\"Android\"");
  myHeaders.append("x-rpc-aigis_v4", "true");
  myHeaders.append("x-rpc-app_version", "");
  myHeaders.append("x-rpc-client_type", "4");
  myHeaders.append("x-rpc-device_model", "Chrome Mobile 128.0.0.0");
  myHeaders.append("x-rpc-device_name", "Chrome Mobile");
  myHeaders.append("x-rpc-device_os", "Android 6.0");
  myHeaders.append("x-rpc-game_biz", "hk4e_global");
  myHeaders.append("x-rpc-language", "en-us");
  myHeaders.append("x-rpc-referrer", "https://act.hoyolab.com/ys/event/signin-sea-v3/index.html?act_id=e202102251931481&hyl_auth_required=true&hyl_presentation_style=fullscreen&utm_source=hoyolab&utm_medium=tools&lang=en-us&bbs_theme=dark&bbs_theme_device=1");
  myHeaders.append("x-rpc-sdk_version", "2.31.0");
  
  const raw = JSON.stringify({
    "account": requestBody.account,
    "password": requestBody.password,
    "token_type": 2
  });
  
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  
  return axios.post("https://sg-public-api.hoyolab.com/account/ma-passport/api/webLoginByPassword", requestOptions)
}
