import * as types from '../actions/groups';

/**
 * Group 컴포넌트 Reducer
 */

let groupId = 1
const initialState = {
    groups: [
        { id: 0, groupName: '기본 그룹' }
    ]
};

const groupReducers = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_GROUP_ITEM :
            return {
                groups: state.groups.concat({
                    id: groupId++,
                    groupName: action.groupValue
                }),
            };
        case types.REMOVE_GROUP_ITEM :
            const { groups } = state;
            return {
                groups: groups.filter(item => item.id !== action.groupId)
            }
        default:
            return state;
    }
}

export default groupReducers;