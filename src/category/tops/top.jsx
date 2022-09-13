import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TopData } from "./topdata";

import { useCart } from "react-use-cart";

export default function TopCard() {
  const { addItem } = useCart();

  return (
    <>
      {TopData.map((id) => {
        return (
          <Card
            sx={{ maxWidth: 345 }}
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              marginLeft: "60px",
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
              <Button variant="outlined" style={{ marginLeft: "30px" }}
              onClick={() => addItem(id.item)}
              >
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
}
