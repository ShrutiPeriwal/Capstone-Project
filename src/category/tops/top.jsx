import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useCart } from "react-use-cart";
import CardMedia from "@mui/material/CardMedia";
import { Button, Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import { TopData } from "./topdata";
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TopCard({props}) {
  const { addItem } = useCart();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {TopData.map((props) => {
        console.log(props.id)
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
            <CardMedia component="img" height="140" image={props.path} onClick={handleOpen} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Name : {props.Name}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Price : {props.Price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined" style={{ marginLeft: "30px" }}
              onClick={() => 
              addItem(props)}
              >
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        );
      })}


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
