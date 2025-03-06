import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function Infobox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1633458942455-a52fabc1b5fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVzdHklMjBzdG9ybXxlbnwwfHwwfHx8MA%3D%3D";  
    const HOT_URL="https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1700924890600-87b89b33ba75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNvbGQlMjBwbGFjZXxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1605035015406-54c130d0bf89?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="infobox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city} 
                        </Typography>
                        <Typography variant="body2"  color= 'text.secondary' component= {"span"} >
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}</p>
                        <p>Max Temp = {info.tempMax}</p>
                        <p>The Weather can be described as <i>{info.weather}</i> and feels like = {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}