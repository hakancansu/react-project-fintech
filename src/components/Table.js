import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Pagination from "./Pagination";
import Input from "./Input";

const Tables = ({ countries }) => {
  const [pages, setPages] = useState(0);
  const [search, setSearch] = useState("");
  const [capital, setCapital] = useState("");
  const [searchCountry, setSearchCountry] = useState([]);
  const [currentButton, setCurrentButton] = useState(1);

  function iterateObject(obj) {
    for (const prop in obj) {
      if (typeof obj[prop] == "object") {
        iterateObject(obj[prop]);
      } else {
        if (typeof obj[prop] === "string") {
          const isHave = obj[prop].search(new RegExp(search, "i"));
          if (isHave > -1) {
            return obj;
          }
        }
      }
    }
  }

  useEffect(() => {
    setSearchCountry(countries);
  }, [countries]);

  const addCountries = () => {
    const data = [];
    for (let i = 0; i < countries.length; i++) {
      const tmp = iterateObject(countries[i]);
      if (tmp) data.push(tmp);
    }
    setSearchCountry(data);
  };

  useEffect(() => {
    addCountries();
  }, [search]);

  useEffect(() => {
    setPages(countries.length / 10);
  }, [countries]);

  return (
    <div>
      <div style={{ color: "red", display: "flex" }}>
        <Input
          name="Capital"
          onChange={(e) => {
            let value = e.target.value;
            value = value.replace(/[^A-Za-z]/gi, "");
            setCapital(value);
          }}
        />
        <Input
          value={search}
          onChange={(e) => {
            let value = e.target.value;
            value = value.replace(/[^A-Za-z]/gi, "");
            setSearch(value);
          }}
          name="All"
        />
      </div>

      <Table striped bordered hover className="container mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Capital</th>
            <th>Region</th>
            <th>Flag</th>
          </tr>
        </thead>
        {searchCountry
          .filter((country) =>
            country?.capital?.toLowerCase().includes(capital.toLowerCase())
          )
          .slice((currentButton - 1) * 10, currentButton * 10)
          .map((country, index) => (
            <tbody key={index}>
              <tr>
                <td>{country.name}</td>
                <td>{country.capital}</td>
                <td>{country.region}</td>
                <td>
                  <img
                    style={{ height: 30, width: 30 }}
                    src={country.flag}
                    alt=""
                  />
                </td>
              </tr>
            </tbody>
          ))}
      </Table>
      <Pagination
        pages={pages}
        currentButton={currentButton}
        setCurrentButton={setCurrentButton}
      />
    </div>
  );
};
export default Tables;
