function make_columns(sheet_data)
{
    for(let i=0;i<sheet_data.length;i++)
    {
        let columns = Object.keys(sheet_data[0])
        return columns
    }
}
function make_rows(sheet_data)
{
    let rows = []
    for(let i=0;i<sheet_data.length;i++)
    {
        let row = Object.values(sheet_data[i])
        rows.push(row)
    }
   // console.log('rows ',rows);
    return rows
}
const PreviewHelper ={
    make_columns,
    make_rows
}
export default PreviewHelper