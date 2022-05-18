import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: "#f54298",
    },
  },
});

const AddProduct = () => {
  const navigate = useNavigate();
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  // const [images, setImages] = React.useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  // const onSelectFile = (event) => {
  //   const selectedFiles = event.target.files;
  //   const selectedFilesArray = Array.from(selectedFiles);
  //   setImages(selectedFilesArray);
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    sendData(data);
  };

  const sendData = (data) => {
    axios.post("http://localhost:4000/product/upload", data).then((res) => {
      console.log(res);
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="SneakerLogo"
            src="../sneaklogo.png"
            sx={{ width: 80, height: 80 }}
          />{" "}
          <Typography component="h1" variant="h5">
            SneakAR
          </Typography>
          <Typography component="h1" variant="h6">
            Add New Product
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="productName"
                  required
                  fullWidth
                  id="productName"
                  label="Product Title"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Category"
                      onChange={handleChange}
                      name="category"
                    >
                      <MenuItem value="Sneaker">Sneaker</MenuItem>
                      <MenuItem value="Causal">Casual</MenuItem>
                      <MenuItem value="Formal">Formal</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="quantity"
                  required
                  fullWidth
                  id="quantity"
                  label="Quantity"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">For</InputLabel>
                    <Select
                      labelId="for"
                      id="for"
                      value={gender}
                      label="For"
                      name="gender"
                      onChange={handleChangeGender}
                    >
                      <MenuItem value="Men">Men</MenuItem>
                      <MenuItem value="Women">Women</MenuItem>
                      <MenuItem value="Unisex">Unisex</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="brand"
                  label="Brand"
                  id="brand"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="price"
                  label="Price"
                  id="price"
                />
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" component="label">
                  Upload File
                  <input
                    type="file"
                    name="images"
                    hidden
                    multiple
                    accept="image/png , image/jpeg"
                  />
                </Button>
              </Grid>
            </Grid>

            <Button
              type="Proceed"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: "#45464c",
                textTransform: "capitalize",
                fontfamily:
                  "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
              }}
            >
              Add Product
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default AddProduct;
