fetch("https://sg-hk4e-api.hoyolab.com/event/sol/sign?lang=en-us", {
    "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9,id;q=0.8",
        "content-type": "application/json;charset=UTF-8",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Microsoft Edge\";v=\"128\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "x-rpc-app_version": "",
        "x-rpc-device_id": "ba33d6a6-bd75-42df-bfad-3b8de6b98636",
        "x-rpc-device_name": "",
        "x-rpc-platform": "4",
        "cookie": "mi18nLang=en-us; _MHYUUID=ba33d6a6-bd75-42df-bfad-3b8de6b98636; DEVICEFP_SEED_ID=b5098c206f8b4419; DEVICEFP_SEED_TIME=1725883423606; DEVICEFP=38d7f3668d8f5; _ga_9TTX3TE5YL=GS1.1.1725883573.1.0.1725883576.0.0.0; HYV_LOGIN_PLATFORM_OPTIONAL_AGREEMENT={%22content%22:[]}; HYV_LOGIN_PLATFORM_TRACKING_MAP={%22sourceValue%22:%2276%22}; _gid=GA1.2.1140933285.1726071245; _ga=GA1.2.917983359.1725883486; HYV_LOGIN_PLATFORM_LIFECYCLE_ID={%22value%22:%22f7033d92-97b4-4a2b-85d0-82e3f14f729d%22}; HYV_LOGIN_PLATFORM_LOAD_TIMEOUT={%22value%22:null}; ltoken_v2=v2_CAISDGNlMXRidXdiMDB6axokYmEzM2Q2YTYtYmQ3NS00MmRmLWJmYWQtM2I4ZGU2Yjk4NjM2IJuDh7cGKOei9_QGMOba-JcBQgtoazRlX2dsb2JhbA.m8HhZgAAAAAB.MEQCIEIgJ3rwl0-bDMgccH_CdD1o7Q5sRVPrVhH7uMeg4D_zAiAo9pFvwr_6uLKXEnxTestKQM9uMlsl0HGJVoqcWbXU0A; ltmid_v2=1xr1okxm1n_hy; ltuid_v2=318647654; _ga_54PBK3QDF4=GS1.1.1726071244.3.1.1726071322.0.0.0; _gat_gtag_UA_201411121_1=1; _ga_T9HTWX7777=GS1.1.1726071245.3.1.1726071322.0.0.0",
        "Referer": "https://act.hoyolab.com/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "{\"act_id\":\"e202102251931481\"}",
    "method": "POST"
}).then(result => {
    console.log(`HOREEE`, result)
}).catch(error => {
    console.log(`Error ${error}`)
})