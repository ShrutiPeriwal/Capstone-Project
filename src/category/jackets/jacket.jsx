import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { JacketData } from "./jacketdata";

export default function JacketCard() {
  return (
    <>
      {JacketData.map((id, Name, Price, path) => {
        return (
          <Card
            sx={{ maxWidth: 345 }}
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              marginLeft: "100px",
              marginRight: "-4px",
              display: "grid",
              display: "inline-grid",
            }}
          >
            <CardMedia component="img" height="140" image={id.path} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Name : {id.Name}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Price : {id.Price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined" style={{marginLeft: "30px"}}>Add To Cart</Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
}
