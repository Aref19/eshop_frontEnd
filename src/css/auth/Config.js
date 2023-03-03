import configJson from "./auth_config.json"

export function getConfig(){


    return{
        clientId:configJson.clientId,
        client_secret:configJson.client_secret,
        grant_type:configJson.grant_type

    };

}