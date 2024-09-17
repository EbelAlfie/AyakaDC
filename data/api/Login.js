async function login(requestBody) {

  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json, text/plain, */*");
  myHeaders.append("Accept-Language", "en-US,en;q=0.9");
  myHeaders.append("Connection", "keep-alive");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "mi18nLang=en-us; _MHYUUID=bf4eedda-974a-47f3-9e58-b7594fb4226c; DEVICEFP_SEED_ID=7471915e44382621; DEVICEFP_SEED_TIME=1726036303136; HYV_LOGIN_PLATFORM_OPTIONAL_AGREEMENT={%22content%22:[]}; HYV_LOGIN_PLATFORM_TRACKING_MAP={%22sourceValue%22:%2276%22}; _gid=GA1.2.134928984.1726537987; _ga_T9HTWX7777=GS1.1.1726552804.9.0.1726552804.0.0.0; _ga=GA1.1.2104382993.1726104890; _ga_54PBK3QDF4=GS1.1.1726552804.9.1.1726552804.0.0.0; HYV_LOGIN_PLATFORM_LIFECYCLE_ID={%22value%22:%22f433abe7-4156-48cf-b4fe-c40095f2b7da%22}; HYV_LOGIN_PLATFORM_LOAD_TIMEOUT={%22value%22:null}; DEVICEFP=38d7f36cb2ba5; ltmid_v2=1wfkk1cxcp_hy; ltoken_v2=v2_CAISDGNlMXRidXdiMDB6axokYmY0ZWVkZGEtOTc0YS00N2YzLTllNTgtYjc1OTRmYjQyMjZjIP-UibcGKLXhy_QEMOSF24wBQgtoazRlX2dsb2JhbA.Fx3pZgAAAAAB.MEQCIDNpio4IquuFAXZr8JMAEKw-zS1Vo1BqhwMqJgAkGaIgAiB7P769BZfn4ueojg-fAZgPIzTu9agmPUvHhu5bm6gFLA; ltuid_v2=295092964");
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
  myHeaders.append("x-rpc-app_id", "ce1tbuwb00zk");
  myHeaders.append("x-rpc-app_version", "");
  myHeaders.append("x-rpc-client_type", "4");
  myHeaders.append("x-rpc-device_fp", "38d7f36cb2af2");
  myHeaders.append("x-rpc-device_id", "bf4eedda-974a-47f3-9e58-b7594fb4226c");
  myHeaders.append("x-rpc-device_model", "Chrome Mobile 128.0.0.0");
  myHeaders.append("x-rpc-device_name", "Chrome Mobile");
  myHeaders.append("x-rpc-device_os", "Android 6.0");
  myHeaders.append("x-rpc-game_biz", "hk4e_global");
  myHeaders.append("x-rpc-language", "en-us");
  myHeaders.append("x-rpc-lifecycle_id", "f433abe7-4156-48cf-b4fe-c40095f2b7da");
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
  
  fetch("https://sg-public-api.hoyolab.com/account/ma-passport/api/webLoginByPassword", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
