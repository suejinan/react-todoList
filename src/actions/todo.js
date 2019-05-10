/**
 * 할 일 영역 액션 및 액션 생성 함수 선언
 */

export const ADD_TODO_ITEM = 'ADD_TODO_ITEM'; // 할 일 추가 액션
export const HANDLE_TOGGLE = 'HANDLE_TOGGLE'; // 할 일 토글(체크) 액션
export const REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM'; // 할 일 삭제 액션
export const SHOW_TODO_LIST = 'SHOW_TODO_LIST'; // 그룹 별 할 일 목록 조회 액션
export const REMOVE_ALL_TODOS = 'REMOVE_ALL_TODOS'; // 완료된 할 일 일괄 삭제

export const HANDLE_SUBTOGGLE = 'HANDLE_SUBTOGGLE'; // 서브 할 일 토글(체크) 액션
export const REMOVE_SUBTODO_ITEM = 'REMOVE_SUBTODO_ITEM'; // 서브 할 일 삭제 액션

/**
 * 할 일 추가 액션 생성
 * 
 * @param {*} todo
 */
export const addTodoItem = (todo, groupId) => ({
    type: ADD_TODO_ITEM,
    todo,
    groupId
});

/**
 * 할 일 토글 액션 생성
 * 
 * @param {*} todoId 
 */
export const handleToggle = (todoId, groupId) => ({
    type: HANDLE_TOGGLE,
    todoId,
    groupId
});

/**
 * 할 일 삭제 액션 생성
 * 
 * @param {*} todoId 
 */
export const removeTodoItem = (todoId, groupId) => ({
    type: REMOVE_TODO_ITEM,
    todoId,
    groupId
});

/**
 * 그룹 별 할 일 목록 조회 액션 생성
 * 
 * @param {*} groupId 
 */
export const showTodoList = (groupId, groupName) => ({
    type: SHOW_TODO_LIST,
    groupId,
    groupName
});

/**
 * 완료된 할 일 일괄 삭제
 * 
 * @param {*} todos 
 */
export const removeAllTodos = (todos, groupId) => ({
    type: REMOVE_ALL_TODOS,
    todos,
    groupId
});

/**
 * 서브 할 일 토글 액션 생성
 * 
 * @param {*} todo 
 */
export const handleSubToggle = (todo) => ({
    type: HANDLE_SUBTOGGLE,
    todo
});

/**
 * 서브 할 일 삭제 액션 생성
 * 
 * @param {*} todo 
 */
export const removeSubTodoItem = (todo) => ({
    type: REMOVE_SUBTODO_ITEM,
    todo
});
