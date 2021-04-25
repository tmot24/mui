import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography
} from "@material-ui/core";
import ShareIcon from '@material-ui/icons/Share';

export const CoffeeCard = ({avatar, title, subtitle, description, image}) => {

    return (
        <Card>
            <CardContent>
                <CardHeader
                    avatar={
                        <Avatar src={avatar}>

                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <ShareIcon/>
                        </IconButton>
                    }
                    title={title}
                    subheader={subtitle}
                />
                <CardMedia
                    style={{height: "86px"}}
                    image={image}
                />
                <Typography variant="body2" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
                <Button size="small">Buy now</Button>
            </CardActions>
        </Card>
    )
}