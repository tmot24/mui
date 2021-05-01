import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";

const data = [
    {
        id: "panel1",
        heading: "Panel 1",
        secondaryHeading: "this is panel 1",
        details: "Nulla facilisi. Phasellus sollicitudin nulla et"
    },
    {
        id: "panel2",
        heading: "Panel 2",
        secondaryHeading: "this is panel 2",
        details: " et et et et et "
    }
];

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: "33.33%",
        flexShrink: 0
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary
    }
}));

export const App = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            {data.map(accordion => {
                const { id, heading, secondaryHeading, details } = accordion;
                return (
                    <Accordion
                        expanded={expanded === id}
                        key={id}
                        onChange={handleChange(id)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography className={classes.heading}>{heading}</Typography>
                            <Typography className={classes.secondaryHeading}>
                                {secondaryHeading}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{details}</Typography>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </div>
    );
}
