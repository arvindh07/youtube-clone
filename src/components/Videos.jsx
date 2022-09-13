import { Box, Stack } from '@mui/material';
import React from 'react';
import ChannelDetail from './ChannelDetail';
import VideoCard from './VideoCard';

const Videos = (props) => {
    const { videos } = props;
    return (
        <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="flex-start"
            gap={2}
        >
            {videos.map((item, index) => {
                return (<Box key={index}>
                    {item?.id?.videoId && <VideoCard video={item} />}
                    {item?.id?.channelId && <ChannelDetail channelDetail={item} />}
                </Box>
                )
            })}
        </Stack>
    )
}

export default Videos