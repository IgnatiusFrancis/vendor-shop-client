import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { server } from "../server";

const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          axios
            .post(`${server}/user/activation`, {
              activation_token,
            })
            .then((response) => {
              if (response.data.success === true) {
                // navigate("/");
                toast.success(response.data.message);
              }
              console.log(response);
            })
            .catch((error) => {
              setError(true);
              toast.error(error.response.data.message);
            });
        } catch (error) {
          setError(true);
          console.log(error.message);
        }
      };
      activationEmail();
    }
  }, [activation_token, setError]);
  console.log(error);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token is expired</p>
      ) : (
        <p>Your account has been created successfully!</p>
      )}
    </div>
  );
};

export default ActivationPage;
