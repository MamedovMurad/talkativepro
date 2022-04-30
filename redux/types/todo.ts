export enum TodoTypes {
    REMOVE_TODO = 'REMOVE_TODO',
    ADD_TODO = 'ADD_TODO',
    UPDATE_NAME = 'UPDATE_NAME'
}

interface IRemoveTodoAction {
    type:TodoTypes.REMOVE_TODO,
    payload:number;
}

interface IUpdateName {
    type:TodoTypes.UPDATE_NAME,
    payload:string;
}

interface IAddTodoAction {
    type:TodoTypes.ADD_TODO,
    payload:string;
}

export type TodoAction = IRemoveTodoAction|IAddTodoAction|IUpdateName