import axios from "axios";
import links from "./urls";

function start_session()
{
    let url = links.start_session
    let header= {

    }
    return axios({
        method:'POST',
        url:url
    }).then(response =>{
        //console.log(response);
        return response
    })
    
}

const sessions ={
    start_session
}

export default sessions