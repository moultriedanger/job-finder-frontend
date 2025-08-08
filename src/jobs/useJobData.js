import { useState, useEffect } from "react";

// Determine base URL from environment, with a dev fallback
const DEV_BASE = process.env.REACT_APP_DEV_BASE_API_URL || "http://localhost:8080";
const PROD_BASE = process.env.REACT_APP_PROD_BASE_API_URL;
const BASE_URL = process.env.NODE_ENV === "development" ? DEV_BASE : PROD_BASE;

const useJobData = (jobId) => {
  const [data, setData] = useState(null);

  // Build endpoint path based on whether a specific jobId is provided
  const path = jobId != null ? `/jobs/${jobId}` : "/jobs";
  const url = `${BASE_URL}${path}`;

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching jobs:", error.message);
      }
    };

    fetchJobData();
  }, [url]); // Re-run if the URL (i.e., jobId or env) changes

  return data;
};

export default useJobData;
