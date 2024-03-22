import { useEffect, useState } from "react";

const useFetchData =  ({ url }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isWaiting, setIsWaiting] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setIsWaiting(false);
        } catch (error) {
          setError(error);
          setIsWaiting(true)
        }
      };
  
      fetchData();
    }, [url]); 
    
    return { data, isWaiting, error };
  };

  export default useFetchData;