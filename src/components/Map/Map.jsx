import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails'

const Map = ({ setCoordinates, setBounds, coordinates, places}) => {
    const classes = useStyles()
    const isDesktop = useMediaQuery('(min-width:600px)')

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'API-Key' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{}}
                onChange={(e) => {
                    setCoordinates({lat: e.center.lat, lng:e.center.lng})
                    setBounds({ sw: e.marginBounds.sw, ne: e.marginBounds.ne})
                }}
                onChildClick={''}
                >
                    {places?.map((place, i) => {
                        console.log('Latitude:', place?.latitude);
                        console.log('Longitude:', place?.longitude);

                    return (
                        <div
                            className={classes.markerContainer}
                            lat={place?.latitude ? Number(place.latitude) : 0}
                            lng={place?.longitude ? Number(place.longitude) : 0}
                            key={i}
                        >
                            {
                                !isDesktop ? (
                                    <LocationOnOutlinedIcon color="primary" fontSize="large" style={{ width: '20px', height: '20px' }}/>
                                ) : (
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                            {place.name}
                                        </Typography>
                                        <img
                                            className={classes.pointer}
                                            src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                            alt={place.name}
                                        />
                                        <PlaceDetails place={place} />
                                    </Paper>
                                )
                            }
                        </div>
                    );
                    })}
            </GoogleMapReact>

        </div>
    )
}

export default Map;
