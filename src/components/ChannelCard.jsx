import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { demoChannelTitle, demoProfilePicture } from '../utils/constants';

const ChannelCard = (props) => {
  const { channelDetail: { id: { channelId }, snippet,statistics } ,marginTop} = props;
  return (
    <Box sx={{ width: { xs: "100%", md: "320px" }, height: "326px", margin: "auto",marginTop, boxShadow: "none", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Link to={`/channel/${channelId}`}>
        <CardContent sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={snippet?.channelTitle}
            sx={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              border: "1px solid #e3e3e3",
            }} />
          <Typography variant='h6' sx={{ color: "#fff", textAlign: "center", marginTop: "15px", display: "flex", alignItems: "center" }}>
            {snippet?.channelTitle || snippet?.title || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: "20px", color: "gray", ml: "5px" }} />
          </Typography>
          {
            statistics?.subscriberCount &&
            <Typography variant='h6' sx={{ color: "gray", textAlign: "center", marginTop: "15px" }}>
              {parseInt(statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          }
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard;