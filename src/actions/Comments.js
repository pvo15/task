import { CreateActionCreator } from 'helpers';
import { COMMENTS } from 'configs/types';

export const fetchComments = _ => CreateActionCreator.read({
    path: '/comments',
    type: COMMENTS,
});

export const fetchSingleComment = ID => CreateActionCreator.read({
    path: `/comments/${ID}`,
    type: COMMENTS,
});

export const createComment = body => CreateActionCreator.create({
    path: '/comments',
    type: COMMENTS,
    body,
});

export const updateComment = body => CreateActionCreator.update({
    path: `/comments/${body.id}`,
    type: COMMENTS,
    body: body,
});

export const withoutCall = body => CreateActionCreator.withoutCall({
    type: COMMENTS,
    body: body,
});

export const deleteComment = ID => CreateActionCreator.delete({
    path: `/comments/${ID}`,
    id: ID,
    type: COMMENTS,
});
