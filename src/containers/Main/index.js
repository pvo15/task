import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';



import Cards  from '../../components/common/card';
import TextField from '@material-ui/core/TextField';
import YoutubeSearchedFor from '@material-ui/icons/YoutubeSearchedFor';
import InputAdornment from '@material-ui/core/InputAdornment';


import {
    deleteComment,
} from 'actions/Comments';

import './Main.scss';

const mapStateToProps = (state) => {
    return { comments: state.comments }
};

@connect(mapStateToProps, {
    deleteComment,
})
export default class Main extends PureComponent {
    constructor(){
        super();
        this.state = {
            search: ''
        }
    }

    searchData(comments){
        if (this.state.search.length < 3) {
            return comments;
        }
        return comments && comments.filter((p) =>{
            if(p.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1){
                return true
            }
            return false
        })
    }

    render() {
        const { comments, deleteComment } = this.props;

        const filteredData = this.searchData(comments);


        return (
            <div className="Main">
                <TextField
                    id="input-with-icon-textfield"
                    label="Search"
                    className="search"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <YoutubeSearchedFor />
                            </InputAdornment>
                        ),
                    }}
                    onChange={(e) => {
                        this.setState({
                            search: e.target.value
                        })
                    }}
                />
                <div className="CardContainers">

                    {_.sortBy(filteredData, 'id')
                        .map((item, index) => (<Cards key={index} {...item} deleteComment={deleteComment} /> ))
                    }
                </div>
            </div>
        );
    }
}
