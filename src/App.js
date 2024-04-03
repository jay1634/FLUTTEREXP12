import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Container, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#1976d2' }}>
        <Toolbar>
          <IconButton color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Arial', fontWeight: 'bold' }}>
            E-DEVICE
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
          {/* Add more menu items as needed */}
        </List>
      </Drawer>
      <Container sx={{ marginTop: '2rem' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="https://t4.ftcdn.net/jpg/05/37/04/61/360_F_537046123_s8JVn2NrClPQDOryhSm8jonYZPfIzPRX.jpg"
                alt="Product Image"
              />
              <CardContent style={{ backgroundColor: '#f5f5f5' }}>
                <Typography gutterBottom variant="h5" component="div" style={{ color: '#333' }}>
                  TOMATO
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  RS. 10
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" style={{ backgroundColor: '#1976d2', color: '#fff' }}>Buy Now</Button>
                <Button size="small" color="primary" style={{ marginLeft: 'auto' }}>Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="https://t4.ftcdn.net/jpg/02/66/68/37/360_F_266683754_wzx9XxeNXKudct2Q3qwQf1PvVaQaKOf6.jpg"
                alt="Product Image"
              />
              <CardContent style={{ backgroundColor: '#f5f5f5' }}>
                <Typography gutterBottom variant="h5" component="div" style={{ color: '#333' }}>
                  SMARTPHONE
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  RS. 5000
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" style={{ backgroundColor: '#1976d2', color: '#fff' }}>Buy Now</Button>
                <Button size="small" color="primary" style={{ marginLeft: 'auto' }}>Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
          
          {/* Add more product cards as needed */}
        </Grid>
      </Container>
      
    </div>
  );
}

export default App;
