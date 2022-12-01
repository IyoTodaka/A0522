import React from "react";
import axios from "axios";
import uuid from 'react-uuid';

function index() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const URL = "https://swapi.dev/api/people";


  React.useEffect(() => {
    setIsLoading(true);
    // fetch(url).then(response => response.json()).then(result => console.log(result))
    axios.get(URL).then((result) => {
      setData(result.data.results);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <div>Loading........</div>;

  console.log(data)

  return (
    <>
      <h3>Axios</h3>
      {data.map((d) => (
        <p key={uuid()}>{d.name}</p>
      ))}
    </>
  );
}

export default index;
