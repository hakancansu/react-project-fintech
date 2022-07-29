import React, {useEffect, useState} from "react";
import Table from "react-bootstrap/Table";
import Pagination from "./Pagination";

const Tables = ({ countries }) => {
  console.log(countries.length)
  const [pages, setPages] = useState(0)
  const [currentButton, setCurrentButton] = useState(1);

  useEffect(() => {
    setPages(countries.length / 10)
  }, [countries])
  

  return (
    <div>
      <Table striped bordered hover className="container mt-5" >
      <thead>
        <tr>
          <th>Name</th>
          <th>Capital</th>
          <th>Region</th>
          <th>Flag</th>
        </tr>
      </thead>
      {
        countries.slice((currentButton-1)*10, currentButton*10).map(country=>(
          <tbody>
        <tr>
          <td>{country.name}</td>
          <td>{country.capital}</td>
          <td>{country.region}</td>
          <td><img style={{height:30, width:30}}  src={country.flag} alt="" /></td>
        </tr>
      </tbody>

        ))
      }
    </Table>
    <Pagination pages={pages} currentButton={currentButton} setCurrentButton={setCurrentButton} />
    </div>
  );
};
export default Tables;
