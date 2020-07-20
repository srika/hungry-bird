import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    searchApi("chinese");
  }, []);
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "australia",
        },
      });
      const { businesses } = response.data;
      setResults(businesses);
    } catch (e) {
      setErrorMessage("Something went wrong!");
    }
  };

  return [searchApi, results, errorMessage];
};
