import React from "react";
import { Grid, Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles'
import { Title } from "@material-ui/icons";

const PlaceDetails = ({place}) => {
    const classes = useStyles()
    return (
        <Card elevation={6}>
            <CardContent>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <CardMedia
                        style={{ width: 150, height: 150 }}
                        image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                        title={place.name}
                    />
                </Grid>
                <Grid item xs>
                        <Typography gutterBottom variant="h5">{place.name}</Typography>
                        <Box className={classes.spacing}>
                            <Typography variant="subtitle1" style={{ marginRight: '10px' }}>
                                Price:
                            </Typography>
                            <Typography gutterBottom variant="subtitle1">
                                {place.price_level}
                            </Typography>
                        </Box>
                        <Box className={classes.spacing}>
                            <Typography variant="subtitle1" style={{ marginRight: '10px' }}>
                                Rating:
                            </Typography>
                            <Typography gutterBottom variant="subtitle1">
                                {place.rating}
                            </Typography>
                        </Box>

                        {place?.cuisine?.map(({ name }, index) => {
                            if (index < 3) {
                                return (
                                    <Chip key={name} size="small" label={name} className={classes.chip} />
                                );
                            }
                            return null;
                        })}
                        {place?.address && (
                            <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                                <LocationOnIcon /> {place.address}

                            </Typography>
                        )}
                        {place?.phone && (
                            <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
                                <PhoneIcon /> {place.phone}

                            </Typography>
                        )}
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                                Trip Advisor
                            </Button>
                            <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                                Website
                            </Button>
                        </CardActions>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
    )
}

export default PlaceDetails;