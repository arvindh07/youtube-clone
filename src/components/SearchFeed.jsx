import React, { useEffect, useState } from 'react';
import { Box, Typography } from "@mui/material"
import Videos from './Videos';
import { fetchData } from './fetchFromApi';
import { useParams } from 'react-router-dom';

const SearchFeed = (props) => {
  const {searchText} = useParams();
  const [videos,setVideos] = useState([]);
  useEffect(() => {
    fetchData(`search?part=snippet&q=${searchText}`)
      .then((data) => setVideos(data));
  }, [searchText])
  return (
    <Box p={2} sx={{
      overflowY: "auto",
      height: "90vh",
      flex: 2,
    }}>
      <Typography variant="h4" mb={2} sx={{ color: "white", fontWeight: "bold" }}>
        Search Results for  <span style={{ color: "red" }}>{searchText} </span>
      </Typography>

      <Videos videos={videos}/>
    </Box>
  )
}

export default SearchFeed;