import { ProjectService } from '../service/project.service';
import { fetchProjectsRequest, fetchProjectsSuccess, fetchProjectsFailure, addProject, deleteProject } from '../reducer/project.reducer';

export const fetchProjectsAction = () => async (dispatch: any) => {
    dispatch(fetchProjectsRequest());
    try {
        const projects = await ProjectService.getAllProjects();
        dispatch(fetchProjectsSuccess(projects));
    } catch (error: any) {
        dispatch(fetchProjectsFailure(error.message));
    }
};

export const createProjectAction = (projectData: any) => async (dispatch: any) => {
    dispatch(fetchProjectsRequest());
    try {
        const newProject = await ProjectService.createProject(projectData);
        dispatch(addProject(newProject));
    } catch (error: any) {
        dispatch(fetchProjectsFailure(error.message));
    }
};

export const removeProjectAction = (projectId: string) => async (dispatch: any) => {
    dispatch(fetchProjectsRequest());
    try {
        await ProjectService.deleteProject(projectId);
        dispatch(deleteProject(projectId));
    } catch (error: any) {
        dispatch(fetchProjectsFailure(error.message));
    }
}; 