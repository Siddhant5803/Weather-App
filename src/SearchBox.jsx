import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError]= useState(false);
    let [loading, setLoading] = useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "fc24b3afd9ffd1b599148ce264faf72f";

    let getWeatherInfo = async() => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error("City not found");
            }
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }catch(err){
           throw err;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
        if (error) setError(false);
    };

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setLoading(true);
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
            setLoading(false);
        }catch (err){
            setError(true);
            setLoading(false);
        }
    };

    return (
        <Paper 
            elevation={3} 
            sx={{ 
                py: 3, 
                px: 4,
                borderRadius: 2,
                maxWidth: 500,
                margin: 'auto'
            }}
        >
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                    <TextField 
                        id="city" 
                        label="Enter City Name" 
                        variant="outlined" 
                        fullWidth
                        required
                        value={city}
                        onChange={handleChange}
                        sx={{ flexGrow: 1 }}
                    />
                    <Button 
                        variant="contained" 
                        type='submit'
                        disabled={loading}
                        startIcon={<SearchIcon />}
                        sx={{ 
                            py: 1.5,
                            px: 3,
                            mt: { xs: 2, sm: 0 },
                            width: { xs: '100%', sm: 'auto' }
                        }}
                    >
                        {loading ? 'Searching...' : 'Search'}
                    </Button>
                </Box>
            </form>
            
            <Collapse in={error}>
                <Alert 
                    severity="error" 
                    sx={{ mt: 2 }}
                    onClose={() => setError(false)}
                >
                    City not found. Please check the spelling and try again.
                </Alert>
            </Collapse>
        </Paper>
    );
}
