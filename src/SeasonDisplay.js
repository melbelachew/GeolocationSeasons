import './SeasonDisplay.css'
import React from 'react';

const seasonConfig = {
    summer:{
        text:"\"Sun is shinging. Weather is sweet. Make you wanna move your dancing feet.\" Bob Marely",
        iconName: 'sun'
    },
    winter:{
        text: 'It\'s winter season. Hot cocoa and cosy blankets please!',
        iconName: 'snowflake'
    },
    autumn:{
        text: 'It\'s autumn season. Enjoy the crisp air & the smell of cider!',
        iconName: 'leaf'
    },
    spring:{
        text: 'Yay! It\'s spring season!',
        iconName: 'smile'
    }
}


const getSeason = (lat, month) => {
    if (month >= 11 && month <=1) {
        return lat > 0 ? 'winter' : 'summer';
    }
    
    else if(month >=2 && month <=4){
        return lat > 0? 'spring' : 'autumn'  
    }

    else if(month >=5 && month <=7){
        return lat > 0? 'summer' : 'winter'    }
    
    else {
        return lat > 0 ? 'autumn' : 'spring'
    }

}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());
    console.log(season)
   const {text, iconName}= seasonConfig[season];

    return (
        <div className = {`season-display ${season}`}>
           <i className={`icon-left massive ${iconName} icon`}/>
            <div>
                <h3>Date: {new Date().toLocaleDateString()} Time: {new Date().toTimeString()}</h3>
                <h3>Current Position: {`Latitude: ${props.lat.toFixed(2)} Longitude: ${props.long.toFixed(2)}`}</h3> 
                <h3 style={{fontStyle:'italic'}}>{text}</h3>
            </div>
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    );
}


export default SeasonDisplay