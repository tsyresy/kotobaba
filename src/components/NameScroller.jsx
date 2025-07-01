import React from 'react';
import { Box, Chip } from '@mui/material';
import '../App.css';

const NameScroller = ({ names, isPaused }) => {
    if (!Array.isArray(names) || names.length === 0) {
        return <Box p={2}>Aucun participant</Box>;
    }

    return (
        <Box
            className="scroll-container"
            sx={{
                borderRadius: 2,
                backgroundColor: '#f0f0f0',
                boxShadow: 3,
                px: 2,
                py: 1,
                height: '200px',
                overflow: 'hidden'
            }}
        >
            <Box className={`scroll-list ${isPaused ? 'paused' : ''}`}>
                {[...names, ...names].map((name, index) => (
                    <Chip
                        key={`name-${index}`}
                        label={name}
                        color="primary"
                        variant="filled"
                        sx={{
                            fontSize: '1rem',
                            mb: 1
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default NameScroller;