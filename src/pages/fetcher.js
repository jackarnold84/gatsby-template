import React from "react"

const FetcherPage = () => {

  const [bracketData, setBracketData] = React.useState({})
  React.useEffect(() => {
    const apiUrl = 'https://71c9c860jj.execute-api.us-east-2.amazonaws.com/default/bracketFetch';
    fetch(
      apiUrl + '?' + new URLSearchParams({ 'groupID': '4807922' }),
      { 'method': 'POST', }
    )
      .then(response => response.json())
      .then(result => {
        console.log('I just called the api')
        setBracketData(result.group)
      })
      .catch(error => console.warn(error))
  }, []) // must include empty array

  return (
    <main>
      <h1>Fetcher Page</h1>
      <p>Group: {bracketData.group_name} ({bracketData.year})</p>
    </main>
  )
}

export default FetcherPage

export const Head = () => <title>Fetcher Page</title>
