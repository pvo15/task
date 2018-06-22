import { createReducer } from 'helpers';
import {
    COMMENTS,
} from 'configs/types';

export const comments = createReducer(COMMENTS, 'id');
