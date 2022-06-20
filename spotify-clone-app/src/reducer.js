export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove after finished dev
    token: 'BQD5olX7-W-BBmp_z0b_HyA4vM27MC37CF1AaOAL2Cgz_XSGTYBqF9XJSquf33cRPl6CNh8KatMQJZ6emMih_x_sVNd2Lu3wvsvlHRdLOPAu0mNVZB1KH1c4K7-IE0PVieTQdVMPxUVK5qj8pWrr85fZzyPSiRGUa_PLLQ_zT0UrbI30_KdjMkp2K0V8SEvxcb7PR2I1Vw08w2oZki8Z7a5UqA'
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
            case 'SET_USER':
                return {
                    ...state,
                    user: action.user
                };
            case 'SET_TOKEN':
                return {
                    ...state,
                    token: action.token
                };
            case 'SET_PLAYLISTS':
                return {
                    ...state,
                    playlists: action.playlists,
                };
        default:
            return state;
    }
}

export default reducer;