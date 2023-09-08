import axios from "axios";
import links from "./urls";

function fetch_balance_sheet()
{
    let url = links.fetch_balance
    let header= {

    }
    return axios({
        method:'GET',
        url:url
    }).then(response =>{
        console.log(response);
        return response
    })
}
function summit_sheet(sheet,loanamount)
{
    let url = links.summit_sheet
    url = `${url}?loanamount=${loanamount}`
    let header= {

    }
    let data = {
        sheet : sheet,
        loanamount : loanamount
    }
    return axios({
        method:'POST',
        url:url,
        data:data
    }).then(response =>{
      //  console.log(response);
        return response
    })
}

const balances = {
    fetch_balance_sheet,
    summit_sheet
}

export default balances