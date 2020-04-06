import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Home, VideoLibrary, Search } from '@material-ui/icons';

function NavBar(props) {
   return (
      <List component="nav">
         <ListItem component="div">
            <ListItemText inset>
               <TypoGraphy color="inherit" variant="title">
                  <Button>
                     <Home/>
                     Home
                  </Button>
               </TypoGraphy>
            </ListItemText>

            <ListItemText inset>
               <TypoGraphy color="inherit" variant="title">
                  <Button>
                     <VideoLibrary/>
                     Gallery
                  </Button>
               </TypoGraphy>
            </ListItemText>

            <ListItemText inset>
               <TypoGraphy color="inherit" variant="title">
                  <Button>
                     <Search/>
                     Search
                  </Button>
               </TypoGraphy>
            </ListItemText>
         </ListItem>
      </List>
   )
}

export default NavBar;