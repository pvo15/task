import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


import {
    updateComment,
    createComment,
    withoutCall
} from 'actions/Comments';

import './Edit.scss';

const styles = theme => ({
    root: theme.mixins.gutters({
        padding: '16px',
        // paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }),
    bootstrapRoot: {
        padding: 0,
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    bootstrapInput: {
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 12px',
        width: 'calc(100% - 24px)',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    bootstrapFormLabel: {
        fontSize: 18,
    },
});

@withStyles(styles)
@connect(null, {
    updateComment,
    createComment,
    withoutCall
})
export default class Main extends PureComponent {
    constructor(props){
        super();
        const { location} = props;

        this.state = {
            data:{ ...location.state },
            oldData:{ ...location.state },
        }
    }

    changeHandle(name, value) {
        const newValues = { ...this.state.data, [name]: value };

        this.setState({ data: {...newValues } });

    }

    render() {
        const { classes } = this.props;
        const { data, oldData } = this.state;
        const { params } = this.props.match;
        const isEdit = _.isEmpty(params);

        return (
            <div className="Edit">
                <Paper className={classes.root} elevation={4}>
                    <div className="name-section">
                        <label>Name</label>
                        <TextField
                            value={data.name}
                            label=""
                            id="bootstrap-input"
                            InputProps={{
                                disableUnderline: true,
                                classes: {
                                    root: classes.bootstrapRoot,
                                    input: classes.bootstrapInput,
                                },
                            }}
                            InputLabelProps={{
                                shrink: true,
                                className: classes.bootstrapFormLabel,
                            }}
                            onChange={(e) => this.changeHandle('name', e.target.value)}
                        />
                    </div>
                    <div className="Comment-section">
                        <label>Comment</label>
                        <TextField
                            value={data.body}
                            label=""
                            id="bootstrap-input"
                            InputProps={{
                                disableUnderline: true,
                                classes: {
                                    root: classes.bootstrapRoot,
                                    input: classes.bootstrapInput,
                                },
                            }}
                            InputLabelProps={{
                                shrink: true,
                                className: classes.bootstrapFormLabel,
                            }}
                            onChange={(e) => this.changeHandle('body', e.target.value)}

                        />
                    </div>
                    <div className="Email-section">
                        <label>Email</label>
                        <TextField
                            value={data.email}
                            label=""
                            id="bootstrap-input"
                            InputProps={{
                                disableUnderline: true,
                                classes: {
                                    root: classes.bootstrapRoot,
                                    input: classes.bootstrapInput,
                                },
                            }}
                            InputLabelProps={{
                                shrink: true,
                                className: classes.bootstrapFormLabel,
                            }}
                            onChange={(e) => this.changeHandle('email', e.target.value)}

                        />
                    </div>
                    <div className="footer">
                        <Button
                            size="small"
                            variant="outlined"
                            color="primary"
                            disabled={_.isEqual(data, oldData)}
                            style={{
                                marginLeft: 10
                            }}
                            onClick={async () => {
                                if (isEdit) {
                                    await this.props.createComment(data);
                                } else {
                                    if (data.id > 500) {
                                        this.props.withoutCall(data)
                                    } else {
                                        await this.props.updateComment(data);
                                    }
                                }
                                this.props.history.goBack()
                            }}
                        >
                            {isEdit ? 'Add' :  'Edit' }
                        </Button>
                    </div>
                </Paper>
            </div>
        );
    }
}
