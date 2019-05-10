import { 
    TOGGLE_MODAL, 
    ADD_SUBITEM, 
    TOGGLE_SUBITEM, 
    DEL_SUBITEM,
    INIT_SUBITEM
} from '../actions/modal';

let subId = 0;
const initialState = {
    showModal: false,
    subTask: [],
};


const ModalReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_MODAL: {
            const newState = state.showModal ?
                {...state, showModal: !state.showModal, subTask: []}
                : {...state, showModal: !state.showModal}
            return newState;
        }

        // SubItem
        case TOGGLE_SUBITEM:
            return {
                ...state,
                subTask: state.subTask.map(item => {
                    if(item.id === action.subId) {
                        item.checked = !item.checked;
                    }
                    return item
                })
            }
        case ADD_SUBITEM: {
            const {subTask} = state;
            subId = subTask.length? 
                subTask[subTask.length-1].id + 1    // 마지막 인덱스의 아이디 값
                : subId;                            // 0
            const subItem = {
                id: subId++,
                text: action.itemValue,
                checked: false
            };
            return {
                ...state,
                subTask: [ ...state.subTask, subItem ]
            };
        }
        case DEL_SUBITEM: 
            return {
                ...state,
                subTask: state.subTask.filter(({id}) => id !== action.subId)
            }
        case INIT_SUBITEM:
            return {
                ...state,
                subTask: action.subTask
            }
        
        default:
            return state;
    }
};

export default ModalReducer;