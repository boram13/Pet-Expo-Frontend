import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";

export default function Gallery() {
  const { type } = useParams();
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      let url = "";
      switch (type) {
        case "cats":
          url = "https://freetestapi.com/api/cats";
          break;
        case "dogs":
          url = "https://freetestapi.com/api/dogs";
          break;
        case "birds":
          url = "https://freetestapi.com/api/birds";
          break;
        default:
          url = "";
      }
      const response = await axios.get(url);
      setAnimals(response.data);
    };

    fetchAnimals();
  }, [type]);

  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </Typography>
      {animals.map((animal, index) => (
        <Typography key={index}>{animal.name}</Typography>
      ))}
    </Box>
  );
}