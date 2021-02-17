import React, { useState, useEffect } from "react";
import getTrendingTermsService from "services/getTrendingTermsService";
import Category from "components/Category";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTermsService().then(setTrends);
  }, []);

  return <Category name="Tendencias" options={trends} />;
}
