import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud';

export default function WeatherApp(){
    const [weatherInfo, setweatherInfo]=useState({
        city:"Jamshedpur",
        feelsLike: 26.36,
        humidity: 22,
        temp: 27.34,
        tempMax: 27.34,
        tempMin: 27.34,
        weather: "clear sky",
    });

    let updateInfo = (result) => {
        setweatherInfo(result);
    }

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Box sx={{ 
                textAlign: "center", 
                display: "flex", 
                flexDirection: "column", 
                gap: 3,
                mb: 2 
            }}>
                <Typography 
                    variant="h3" 
                    component="h1" 
                    sx={{ 
                        fontWeight: 'bold', 
                        color: '#1976d2',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1
                    }}
                >
                    <CloudIcon fontSize="large" /> Weather Made Simple
                </Typography>
                <SearchBox updateInfo={updateInfo}/>
                <InfoBox info={weatherInfo}/>
            </Box>
        </Container>
    );
}
