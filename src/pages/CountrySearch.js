import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import axios from "axios";
import Table from "../components/Table";
import { baseUrl } from "../AppConfig";

const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  

  const getData = async (name) => {  
    const res =
      name === ""
        ? await axios.get(`${baseUrl}/all`)
        : await axios.get(`${baseUrl}/capital/${name}`);
      setCountries(res.data)
  };

  useEffect(() => {
    getData("")
  }, []);

  return (
    <div>
      <Input onChange={(e) => getData(e.target.value)} />
      <Table countries={countries} />
    </div>
  );
};
export default CountrySearch;
