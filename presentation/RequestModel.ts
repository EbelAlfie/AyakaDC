const messageRequestHeader = {
    "authority": "beta.character.ai",
    "method": "POST",
    "path": "/chat/streaming/",
    "scheme": "https",
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
    "Authorization": "Token 5c06d59ff4b375f87b2bfdc8be4b0819fece652b", //User token
    "Content-Length": 970,
    "Content-Type": "application/json",
    "Cookie": "aodasdoasmdoamdoamd",
    "Origin": "https://beta.character.ai",
    "Referer": "https://beta.character.ai/chat?char=IVnSUJD1hgZYDii01envVlZa21hJfx77VULPvYx8XJo", //Char id
    "Sec-Ch-Ua": '"Chromium";v="118", "Microsoft Edge";v="118", "Not=A?Brand";v="99"',
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": "Windows",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Gpc": 1,
    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.76"
}

const messageRequest = {
    character_external_id: "charid", //isinya char id
    enable_tti: null,
    filter_candidates: null,
    give_room_introductions: true,
    history_external_id: "1DYCVhqPQ_7YT_t92eiOyv5lhQHPcLSmBCu6XDG4R6o", //TODO
    image_description: "",
    image_description_type: "",
    image_origin_type: "",
    image_rel_path: "",
    initial_timeout: null,
    insert_beginning: null,
    is_proactive: false,
    mock_response: false,
    model_properties_version_keys: "",
    model_server_address: null,
    model_server_address_exp_chars: null,
    num_candidates: 1,
    override_prefix: null,
    override_rank: null,
    parent_msg_uuid: null,
    prefix_limit: null,
    prefix_token_limit: null,
    rank_candidates: null,
    ranking_method: "random",
    retry_last_user_msg_uuid: null,
    rooms_prefix_method: "",
    seen_msg_uuids: [],
    staging: false,
    stream_every_n_steps: 16,
    stream_params: null,
    text: "", //user send this message
    tgt: "internal_id:40606:65905abc-64e2-4a9d-b96d-8da3142b91c7",
    traffic_source: null,
    unsanitized_characters: null,
    voice_enabled: false
}

module.exports = messageRequest, messageRequestHeader 