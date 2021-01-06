import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import './style.css';

function Page(props) {
    const {
        goTo,
		deleteItem,
        itemDetails,
    } = props;

    return (
        <Fragment>
            <CssBaseline />
            <div className="details-page">
                <Paper
                    elevation={1}
                    className="paper-container"
                >
                    {itemDetails ?
                        <Fragment>
                            <Typography gutterBottom variant="h5" component="h2">
                                {itemDetails.title}
                            </Typography>

                            <div
                                className="item-image"
                                style={{
                                    backgroundImage: `url(${itemDetails.image})`,
                                }}
                            />

                            <Typography gutterBottom component="p" className="content">
                                {itemDetails.content}
                            </Typography>
                        </Fragment>
                        :
                        <CircularProgress className="item-loader" />
                    }

                    <Button
                        color="primary"
                        onClick={() => goTo('/results')}
                    >
                        Back
                    </Button>
					<Button
                        color="warning"
                        onClick={() => deleteItem(itemDetails.id)}
                    >
                        Remove
                    </Button>
                </Paper>
            </div>
        </Fragment>
    );
}

export default Page;
