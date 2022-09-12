import React from 'react';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Paper
        component="form"
        onSubmit={() => {}}
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
        value=""
        onChange={() => {}}/>
        <IconButton type="submit"
            sx={{ p:"10px",color:"red"}}>
            <SearchIcon/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar