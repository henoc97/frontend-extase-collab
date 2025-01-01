import { CrewService } from '../service/crew.service';
import { fetchCrewsRequest, fetchCrewsSuccess, fetchCrewsFailure, updateCrew, addCrew, deleteCrew } from '../reducer/crew.reducer';

// export const fetchCrewsAction = () => async (dispatch: any) => {
//     dispatch(fetchCrewsRequest());
//     try {
//         const crews = await CrewService.getAllCrews(); // Assurez-vous d'avoir une méthode pour obtenir toutes les équipes
//         dispatch(fetchCrewsSuccess(crews));
//     } catch (error: any) {
//         dispatch(fetchCrewsFailure(error.message));
//     }
// };

export const createCrewAction = (crewData: any) => async (dispatch: any) => {
    dispatch(fetchCrewsRequest());
    try {
        const newCrew = await CrewService.createCrew(crewData);
        dispatch(addCrew(newCrew));
    } catch (error: any) {
        dispatch(fetchCrewsFailure(error.message));
    }
};

export const removeCrewAction = (crewId: string) => async (dispatch: any) => {
    dispatch(fetchCrewsRequest());
    try {
        await CrewService.deleteCrew(crewId);
        dispatch(deleteCrew(crewId));
    } catch (error: any) {
        dispatch(fetchCrewsFailure(error.message));
    }
};

export const updateCrewAction = (crewId: string, updateData: any) => async (dispatch: any) => {
    dispatch(fetchCrewsRequest());
    try {
        const updatedCrew = await CrewService.updateCrew(crewId, updateData);
        dispatch(updateCrew(updatedCrew));
    } catch (error: any) {
        dispatch(fetchCrewsFailure(error.message));
    }
}; 