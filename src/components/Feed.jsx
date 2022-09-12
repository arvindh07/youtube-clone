import React from 'react';
import {Box,Stack,Typography} from "@mui/material"
import Sidebar from './Sidebar';

const Feed = () => {
  return (
    <Stack sx={{
      flexDirection:{sm:"column",md:"row"}
    }}>
      <Box
        sx={{
          height: { sx:"auto",md:"92vh"},
          borderRight:"1px solid #3d3d3d",
          px:{sm:0,md:2}
        }}
      >
        <Sidebar/>
        <Typography
          className='copyright'
          variant="body 2"
          sx={{
            color:"#fff",
            mt:1.5,
          }}
          >
          Copyright 2022 @rvindh
        </Typography>
      </Box>
        {/* main feed */}
    </Stack>
  )
}

export default Feed