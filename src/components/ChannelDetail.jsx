import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import ChannelCard from './ChannelCard';
import { fetchData } from './fetchFromApi';
import Videos from './Videos';

const ChannelDetail = () => {
    const {id} = useParams();
    const [channelDetail, setChannelDetail] = useState(null);
    const [channelVideos, setChannelVideos] = useState([]);

    useEffect(() => {
        fetchData(`channels?part=snippet&id=${id}`)
            .then((data) => setChannelDetail(data[0]))
        fetchData(`search?channelId=${id}&part=snippet&order=date`)
            .then((data) => setChannelVideos(data));
    },[id])
    return (
        <Box minHeight="95vh">
            <Box>
                <div
                    style={{
                        backgroundImage: "linear-gradient(to right, #8e2de2, #4a00e0)",
                        height:"200px",
                        zIndex:"10",
                    }}
                />
                {channelDetail && <ChannelCard channelDetail={channelDetail} marginTop="-130px"/>}
            </Box>
            <Box display="flex" p={2}>
                <Box sx={{ mr: {sm: "100px"}}}/>
                {channelVideos && <Videos videos={channelVideos}/>}
            </Box>
        </Box>
    )
}

export default ChannelDetail