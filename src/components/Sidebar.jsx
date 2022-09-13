import React from 'react'
import { Stack } from "@mui/material";
import { categories } from '../utils/constants';

const Sidebar = (props) => {
    const {selectedCategory,setSelectedCategory} = props;
    return (
        <Stack
            direction="row"
            sx={{
                overflowY: "auto",
                height: { sm: "auto", md: "95%" },
                flexDirection: { md: "column" },
                cursor: "pointer",
            }}>
            {categories.map(({ icon, name }, index) => {
                return (
                    <button
                        className="category-btn"
                        key={`name-${index}`}
                        onClick={() => setSelectedCategory(name)}
                        style={{
                            backgroundColor:name === selectedCategory ? "red" : "transparent",
                            color:"white",
                        }}>
                        <span
                            style={{
                                color:name === selectedCategory ? "white" :"red",
                                marginRight:"10px",
                            }}>{icon}</span> 
                        <span
                            style={{
                                opacity: name === selectedCategory ? 1 : 0.8,
                            }}>{name}</span>
                    </button>
                )
            })}
        </Stack>
    )
}

export default Sidebar