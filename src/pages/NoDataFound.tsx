import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const NoDataFound = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <img
        src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg?w=740&t=st=1719813340~exp=1719813940~hmac=946c875000804533cbb2afb10758112ee79661a230dc93666f53e4edba3a6e7c" // Replace with your image source
        alt="No Data Found"
        style={{ maxWidth: "100%", height: "70vh", marginBottom: "20px" }}
      />
      <Typography variant="h5" align="center" gutterBottom>
        No data found
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </Button>
    </Box>
  );
};

export default NoDataFound;
