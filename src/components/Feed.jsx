import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from "@mui/material"
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchData } from './fetchFromApi';

const Feed = () => {
  const [selectedCategory,setSelectedCategory] = useState("New");
  const [videos,setVideos] = useState([]);
  useEffect(() => {
    fetchData(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data));
  }, [selectedCategory])
  return (
    <Stack sx={{
      flexDirection: { sm: "column", md: "row" }
    }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sm: 0, md: 2 }
        }}
      >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography
          className='copyright'
          variant="body 2"
          sx={{
            color: "#fff",
            mt: 1.5,
          }}
        >
          Copyright 2022 @rvindh
        </Typography>
      </Box>
      <Box p={2} sx={{
        overflowY: "auto",
        height: "90vh",
        flex: 2,
      }}>
        <Typography variant="h4" mb={2} sx={{ color: "white", fontWeight: "bold" }}>
          {selectedCategory} <span style={{ color: "red" }}>Videos</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed;