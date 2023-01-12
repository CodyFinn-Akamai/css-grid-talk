import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';

const drawerWidth = "24vw";

const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth})`, ml: drawerWidth }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Website name
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem key="Home" disablePadding>
            <ListItemButton component="a" href="./css_grid.html">
              <ListItemText primary="Home"/>
            </ListItemButton>
          </ListItem>
          <ListItem key="Featured" disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemText primary="Featured"/>
            </ListItemButton>
          </ListItem>
          <ListItem key="Archives" disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemText primary="Archives"/>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key="About Us" disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemText primary="About Us"/>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />
        <Typography variant="h1">Title</Typography>
        <Typography variant="h2">Chapter 1</Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
          non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis
          viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin
          fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
          tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
          varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
          Lorem donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography variant="h2">Chapter 2</Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
          integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
          lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
          Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
          accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
          Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
          senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
          aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices
          sagittis orci a.
        </Typography>
        <Typography variant="h2">Chapter 3</Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
          non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis
          viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin
          fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
          tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
          varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
          Lorem donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography variant="h2">Chapter 4</Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
          integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
          lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
          Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
          accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
          Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
          senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
          aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices
          sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
