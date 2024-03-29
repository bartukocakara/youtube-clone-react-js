import { createStore, applyMiddleware, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/auth.reducer'
import { homeVideosReducer } from './reducers/videos.reducer'
import { selectedVideoReducer } from './reducers/videos.reducer'
import { channelDetailsReducer } from './reducers/channel.reducer'
import { commentListReducer } from './reducers/comments.reducer';


const rootReducer = combineReducers({
    auth : authReducer,
    homeVideosReducer : homeVideosReducer,
    selectedVideoReducer : selectedVideoReducer,
    channelDetailsReducer : channelDetailsReducer,
    commentListReducer : commentListReducer
})

const store = createStore(
    rootReducer, 
    {}, 
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;