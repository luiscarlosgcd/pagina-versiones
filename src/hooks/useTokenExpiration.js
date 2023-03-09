import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function useTokenExpiration(token) {
  const [isExpired, setIsExpired] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (token) {
      setIsLoading(false);

      const tokenExpiration = new Date(token.expires);
      const now = new Date();

      if (tokenExpiration <= now) {
        setIsExpired(true);
      } else {
        const intervalId = setInterval(() => {
          //checks every 10 sec if token time is expired.
          if (tokenExpiration <= new Date()) {
            setIsExpired(true);
            clearInterval(intervalId);
          }
        }, 10000);
        return () => clearInterval(intervalId);
      }
    } else {
      const timerId = setTimeout(() => {
        //5 sec loading countdown to find if token is null or just loading
        setIsLoading(false);
      }, 5000);
      return () => clearTimeout(timerId);
    }
  }, [token]);

  useEffect(() => {
    //after 5 set at last we will check if token was expired or not
    if (isExpired) {
      history.push("/"); //redirect the user to login page
      window.localStorage.removeItem("loggedNoteAppCliente");
    }
  }, [isExpired, history]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return isExpired;
}

export default useTokenExpiration;
