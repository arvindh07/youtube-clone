import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { demoChannelTitle, demoChannelUrl, demoVideoUrl } from '../utils/constants';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const VideoCard = (props) => {
    const { video: { id: { videoId }, snippet } } = props;
    return (
        <Card sx={{width: {xs:"100%",sm:"358px",md:"320px"} , boxShadow:"none",borderRadius:"0"}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    alt={snippet?.title}
                    image={snippet?.thumbnails?.high?.url}
                    sx={{ width: {xs:"100%",sm:"358px",md:"320px"}, height: "180px" }}
                />
            </Link>
            <CardContent sx={{
                backgroundColor: "#1e1e1e",
                height: "106px",
            }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight="bold" color="white">
                        {snippet?.title.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography mt={1} variant="subtitle2" fontWeight="bold" color="gray">
                        {snippet?.channelTitle.slice(0, 60) || demoChannelTitle} 
                        <CheckCircleIcon sx={{ fontSize:"12px",color:"gray",ml:"5px" }}/>
                    </Typography>
                </Link>
            </CardContent>
        </Card >

    )
}

export default VideoCard