import React, { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchText,setSearchText] = useState("");
  const navigate = useNavigate();
  return (
    <Paper
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          if(searchText){
            navigate(`/search/${searchText}`);
            setSearchText("");
          }
        }}
        sx={{
            border:"1px solid #e3e3e3",
            borderRadius:20,
            pl:2,
            boxShadow:"none",
            mr:{sm:5},
        }}
    >
        <input type="text" 
        className='search-bar'
        placeholder='Search...'
        value={searchText}
        onChange={(e) => {setSearchText(e.target.value)}}/>
        <IconButton type="submit"
            sx={{ p:"10px",color:"red"}}>
            <SearchIcon/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar