import React from 'react';
import Stack from '@mui/material/Stack';
import {logo} from "../utils/constants";
import {Link} from "react-router-dom";
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack 
      direction="row" 
      p={2} 
      alignItems="center" 
      sx={{position:"sticky",zIndex:5,backgroundColor:"#000",top:0,justifyContent:"space-between"}}>

        <Link to="/" style={{display:"flex",alignItems:"center"}}>
          <img src={logo} alt="yt-logo" height={45} />
        </Link>

        <SearchBar/>
    </Stack>
  )
}

export default Navbar