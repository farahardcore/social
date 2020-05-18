import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import React from "react";


let state = {
    posts : [
        {id : 1, message : "hello1", likesCount: 12},
    ]
};
it('length of posts should be incremented ', function () {
    //1 - test data
    let action = addPostActionCreator("heyhey");

    //2 - action
    let newState = profileReducer(state,action);

    //3 - expectation
    expect(newState.posts.length).toBe(2);
    expect(newState.posts[2].message).toBe("heyhey");

});
it('new message of post should be - "heyhey"', function () {
    //1 - test data
    let action = addPostActionCreator("heyhey");
    //2 - action
    let newState = profileReducer(state,action);

    //3 - expectation
    expect(newState.posts[1].message).toBe("heyhey");
});
it('after deleting length of posts should be decremented', function () {
    let action = deletePost(1);
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(0);
});
it('after deleting length of posts shouldnt be decremented if id is incorrect', function () {
    let action = deletePost(100);
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(1);
});