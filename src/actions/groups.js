/**
 * Group 영역 액션 및 액션 생성 함수 선언
 */

export const ADD_GROUP_ITEM = 'ADD_GROUP_ITEM'; // 그룹 추가 액션
export const REMOVE_GROUP_ITEM = 'REMOVE_GROUP_ITEM'; // 그룹 삭제 액션

/**
 * 그룹 추가 액션 생성
 */
export const addGroupItem = (groupValue) => ({
    type: ADD_GROUP_ITEM,
    groupValue
});

/**
 * 그룹 삭제 액션 생성
 */
export const removeGroupItem = (groupId) => ({
    type: REMOVE_GROUP_ITEM,
    groupId
});