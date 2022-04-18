import { createSlice } from '@reduxjs/toolkit'

const carSlice = createSlice({
    name: 'car',
    initialState: {
        tipeDriver: '',
        tanggal: '',
        waktuJemput: '',
        jumlahPenumpang: '',
        data: [],
        render: []
    },
    reducers: {
        setAllData: (state, action) => {
            state.data = action.payload
        },
        filteredData: (state) => {
            state.render = state.data.filter(
                (data) =>
                    data.tipe_driver === state.tipeDriver &&
                    new Date(state.tanggal).getTime() <= new Date(data.tanggal).getTime()
            );
        },
        handleTipeDriver: (state, action) => {
            state.tipeDriver = action.payload
        },
        handleTanggal: (state, action) => {
            state.tanggal = action.payload
        },
        handleWaktuJemput: (state, action) => {
            state.waktuJemput = action.payload
        },
        handleJumlahPenumpang: (state, action) => {
            state.jumlahPenumpang = action.payload
        },
        handleIdButton: (state, action) => {
            state.render = state.data.filter(
                (data) => data.id === action.payload
            )
        }
    }
})

// Action creators are generated for each case reducer function
export const carActions = carSlice.actions

export default carSlice.reducer