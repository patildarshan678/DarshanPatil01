var host = 'http://127.0.0.1'
var port = ':5000'

let path= 
{
    start_session : '/session/start',
    fetch_balance : '/balances/fetch_balance_sheet',
    summit_sheet : '/balances/summit_sheet'
}
let links = {
    start_session : host + port +path['start_session'],
    fetch_balance : host + port + path.fetch_balance,
    summit_sheet : host+ port +path.summit_sheet
}
export default links