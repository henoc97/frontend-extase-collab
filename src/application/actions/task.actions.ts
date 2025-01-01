import { TaskService } from '../service/task.service';
import { fetchTasksRequest, fetchTasksSuccess, fetchTasksFailure, addTask, deleteTask } from '../reducer/task.reducer';

export const fetchTasksAction = (projectId: string) => async (dispatch: any) => {
    dispatch(fetchTasksRequest());
    try {
        const tasks = await TaskService.getTasksByProjectId(projectId);
        dispatch(fetchTasksSuccess(tasks));
    } catch (error: any) {
        dispatch(fetchTasksFailure(error.message));
    }
};

export const createTaskAction = (taskData: any) => async (dispatch: any) => {
    dispatch(fetchTasksRequest());
    try {
        const newTask = await TaskService.createTask(taskData);
        dispatch(addTask(newTask));
    } catch (error: any) {
        dispatch(fetchTasksFailure(error.message));
    }
};

export const removeTaskAction = (taskId: string) => async (dispatch: any) => {
    dispatch(fetchTasksRequest());
    try {
        await TaskService.deleteTask(taskId);
        dispatch(deleteTask(taskId));
    } catch (error: any) {
        dispatch(fetchTasksFailure(error.message));
    }
}; 