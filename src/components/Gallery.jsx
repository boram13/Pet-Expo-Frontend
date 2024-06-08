import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { getAll } from "../service/pet";

export default function Gallery() {
  const { type } = useParams();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const petsData = getAll(type);
        setPets(petsData);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };

    fetchPets();
  }, [type]);

  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </Typography>
      <Grid container spacing={3}>
        {pets.map((pet, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image={pet.photo}
                alt={pet.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {pet.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Origin: {pet.origin}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}