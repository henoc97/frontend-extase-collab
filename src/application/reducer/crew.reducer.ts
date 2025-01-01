import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CrewState } from '../types/state.types';
import ICrew from '@/domain/entities/crew.entity';

const initialState: CrewState = {
    loading: false,
    error: null,
    crews: [],
};

const crewSlice = createSlice({
    name: 'crews',
    initialState,
    reducers: {
        fetchCrewsRequest(state) {
            state.loading = true;
            state.error = null;
        },
        fetchCrewsSuccess(state, action: PayloadAction<ICrew[]>) {
            state.loading = false;
            state.crews = action.payload;
        },
        fetchCrewsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        addCrew(state, action: PayloadAction<ICrew>) {
            state.crews.push(action.payload);
        },
        deleteCrew(state, action: PayloadAction<string>) {
            state.crews = state.crews.filter(crew => crew.id !== action.payload);
        },
        updateCrew(state, action: PayloadAction<ICrew>) {
            const index = state.crews.findIndex(crew => crew.id === action.payload.id);
            if (index !== -1) {
                state.crews[index] = action.payload;
            }
        },
    },
});

export const {
    fetchCrewsRequest,
    fetchCrewsSuccess,
    fetchCrewsFailure,
    addCrew,
    deleteCrew,
    updateCrew
} = crewSlice.actions;
export default crewSlice.reducer; 