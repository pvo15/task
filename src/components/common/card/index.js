import React, { PureComponent } from 'react';
import {
    Link,
} from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './Card.scss';


export default class Cards extends PureComponent {

    render() {
        const {
            name,
            email,
            body,
            id
        } = this.props;

        return (
            <div className="CardMarginBottom">
                <Card>
                    <CardMedia
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {id} - {name}
                        </Typography>
                        <Typography component="p">
                            {body}
                        </Typography>
                        <Typography component="p">
                            {email}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            <Link
                                to={{
                                    pathname: `/edit/${id}`,
                                    state: {
                                        name,
                                        email,
                                        body,
                                        id,
                                    }
                                }}
                            >
                                Edit
                            </Link>
                        </Button>
                        <Button size="small" color="primary" onClick={() => {
                            this.props.deleteComment(id);
                        }}>
                            Delete
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}
