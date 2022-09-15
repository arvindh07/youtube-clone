import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import { fetchData } from './fetchFromApi';
import { useParams, Link } from 'react-router-dom';
import CheckCircle from '@mui/icons-material/CheckCircle';
import Videos from './Videos';

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    fetchData(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideo(data[0]))

    fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setRelatedVideos(data))

  }, [id])
  if (!video) return "Loading...";
  console.log(video);
  const { snippet: { channelId, channelTitle, title }, statistics: { viewCount, likeCount } } = video;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{
            width:"100%",
            position:"sticky",
            top:"86px"
          }}>
            <ReactPlayer controls className="react-player" url={`https://www.youtube.com/watch?v=${id}`} />
            <Typography font-weight="bold" variant='h5' color="#fff" p={2}>
              {title}
            </Typography>
            <Stack py={1} px={2} color="#fff" alignitems="center" direction={{xs:"column",sm:"row"}} gap={{xs:"10px",sm:"0"}}justifyContent="space-between">
              <Link to={`channel/${channelId}`}>
                <Typography color="#fff" variant={{xs:"subtitle1",md:"h6"}}>
                  {channelTitle}
                  <CheckCircle sx={{
                    fontSize: '14px',
                    color: "gray",
                    ml: "5px"
                  }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{opacity:"0.7"}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{opacity:"0.7"}}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{xs:5,md:1}} justifyContent="center" alignItems="center">
          <Videos videos={relatedVideos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail