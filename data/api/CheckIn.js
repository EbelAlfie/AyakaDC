const headers = new Headers();
headers.append("accept", "application/json, text/plain, */*");
headers.append("accept-language", "en-US,en;q=0.9,id;q=0.8");
headers.append("content-type", "application/json;charset=UTF-8");
headers.append("cookie", "mi18nLang=en-us; _MHYUUID=ba33d6a6-bd75-42df-bfad-3b8de6b98636; DEVICEFP_SEED_ID=b5098c206f8b4419; DEVICEFP_SEED_TIME=1725883423606; DEVICEFP=38d7f3668d8f5; _ga_9TTX3TE5YL=GS1.1.1725883573.1.0.1725883576.0.0.0; HYV_LOGIN_PLATFORM_OPTIONAL_AGREEMENT={%22content%22:[]}; HYV_LOGIN_PLATFORM_TRACKING_MAP={%22sourceValue%22:%2276%22}; _gid=GA1.2.1140933285.1726071245; _ga=GA1.2.917983359.1725883486; HYV_LOGIN_PLATFORM_LIFECYCLE_ID={%22value%22:%22f7033d92-97b4-4a2b-85d0-82e3f14f729d%22}; HYV_LOGIN_PLATFORM_LOAD_TIMEOUT={%22value%22:null}; ltoken_v2=v2_CAISDGNlMXRidXdiMDB6axokYmEzM2Q2YTYtYmQ3NS00MmRmLWJmYWQtM2I4ZGU2Yjk4NjM2IJuDh7cGKOei9_QGMOba-JcBQgtoazRlX2dsb2JhbA.m8HhZgAAAAAB.MEQCIEIgJ3rwl0-bDMgccH_CdD1o7Q5sRVPrVhH7uMeg4D_zAiAo9pFvwr_6uLKXEnxTestKQM9uMlsl0HGJVoqcWbXU0A; ltmid_v2=1xr1okxm1n_hy; ltuid_v2=318647654; _ga_54PBK3QDF4=GS1.1.1726071244.3.1.1726071322.0.0.0; _gat_gtag_UA_201411121_1=1; _ga_T9HTWX7777=GS1.1.1726071245.3.1.1726071322.0.0.0; ltmid_v2=1wfkk1cxcp_hy; ltoken_v2=v2_CAISDGM5b3FhcTNzM2d1OBokYmEzM2Q2YTYtYmQ3NS00MmRmLWJmYWQtM2I4ZGU2Yjk4NjM2IM3H-7YGKN_tgdUEMOSF24wBQgtiYnNfb3ZlcnNlYQ.zePeZgAAAAAB.MEYCIQCOzA2kN41FNXbagvxMcFcLHDuQD233RtbNSdFCCMdmcwIhAM7F9m8veZGphUuRvGHMGxbMFUJYsJ643bynozxH2Qcl; ltuid_v2=295092964");
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