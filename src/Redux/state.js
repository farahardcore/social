let store = {
    _state : {
        profilePage : {
            posts : [
                {id: 1 , message : "Hi" , likesCount : 12},
                {id: 2 , message : "Hello" , likesCount : 14},
                {id: 3 , message : "It's my first post!" , likesCount : 15},
                {id: 4 , message : "What do you doing?" , likesCount : 13},
                {id: 5 , message : "How much is the fish?" , likesCount : 11}
              ],
              newPostText : "Farid powel naxou"
        },
       dialogsPage : {
        dialogs : [
            {id: 1 , name : "Maksim"},
            {id: 2 , name : "Maks"},
            {id: 3 , name : "Masha"},
            {id: 4 , name : "Yo"},
            {id: 5 , name : "Egor"}
           ],
        messages : [
            {id: 1 , message : "Hi"},
            {id: 2 , message : "Hello"},
            {id: 3 , message : "How are you?"},
            {id: 4 , message : "What are you doing?"},
            {id: 5 , message : "How much is the fish?"}
          ]
       },
       sitebar : {
           friends : [
               {id : 1 , src : "https://cdn.iconscout.com/icon/premium/png-256-thumb/marvel-1502922-1273137.png"},
               {id : 1 , src : "https://66.media.tumblr.com/2baea900172949be0a2c460cfe48fff8/tumblr_p9d3rzjswE1wmrvkdo7_250.png"},
               {id : 1 , src : "https://66.media.tumblr.com/b6fdaeba44abe187c44e7b07fc896cbf/tumblr_p9d3rzjswE1wmrvkdo2_r1_250.png"}
           ]
       }
    },
    _callSubscriber() {
        console.log("state changed");
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        if(action.type === "ADD-POST"){
            let newPost = {
                id : 6,
                message : this._state.profilePage.newPostText,
                likesCount : 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        }else if(action.type === "UPDATE-NEW-POST"){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}
export default store;

window.store = store;

