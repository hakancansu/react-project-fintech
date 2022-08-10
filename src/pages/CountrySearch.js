import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../components/Table";
import { baseUrl } from "../AppConfig";

const CountrySearch = () => {
  const [countries, setCountries] = useState([]);

  const getData = async () => {
    const res = await axios.get(`${baseUrl}/all`);
    setCountries(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Table countries={countries} />
    </div>
  );
};
export default CountrySearch;
