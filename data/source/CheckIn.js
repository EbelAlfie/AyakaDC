const headers = new Headers();
headers.append("accept", "application/json, text/plain, */*");
headers.append("accept-language", "en-US,en;q=0.9,id;q=0.8");
headers.append("content-type", "application/json;charset=UTF-8");
headers.append("origin", "https://act.hoyolab.com");
headers.append("priority", "u=1, i");
headers.append("referer", "https://act.hoyolab.com/");
headers.append("sec-ch-ua", "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Microsoft Edge\";v=\"128\"");
headers.append("sec-ch-ua-mobile", "?0");
headers.append("sec-ch-ua-platform", "\"Windows\"");
headers.append("sec-fetch-dest", "empty");
headers.append("sec-fetch-mode", "cors");
headers.append("sec-fetch-site", "same-site");
headers.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0");
headers.append("x-rpc-app_version", "");
headers.append("x-rpc-device_id", "ba33d6a6-bd75-42df-bfad-3b8de6b98636");
headers.append("x-rpc-device_name", "");
headers.append("x-rpc-platform", "4");

const body = "{\"act_id\":\"e202102251931481\"}";

const requestOptions = {
  method: "POST",
  headers: headers,
  body: body,
  redirect: "follow"
};

async function checkIn() {
  return fetch("https://sg-hk4e-api.hoyolab.com/event/sol/sign?lang=en-us", requestOptions)
  .then(result => result.json())
  .then(result => {
    console.log(result)
    return result
  })
  .catch(error => {
    console.log(error)
    return error
  })
}

module.exports = { checkIn } 