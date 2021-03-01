import React from 'react'
const ADD_ITEM = 'ADD_ITEM'
const CHANGE_TOGGLE_MODE = 'CHANGE_TOGGLE_MODE'
const CREATE_ARRAY = 'CREATE_ARRAY'
const SUM_ARRAY = 'SUM_ARRAY'
const DELETE_ITEM = 'DELETE_ITEM'

export const initialState = {
    date: new Date().toLocaleDateString(),
    costs: [

    ],
    totalCost: null,
    arrValuesCosts: [],
    profit: [

    ],
    totalProfit: null,
    valuesProfit: [],
    toggleCost: true,
}
const Context = React.createContext(initialState)
export default Context

export const reducer = (state, action) => {
    debugger
    switch (action.type) {
        case ADD_ITEM: {
            let key = 'profit'
            if (state.toggleCost) {
                key = 'costs'
            }
            return {
                ...state,
                [key]: [...state[key], { name: action.propertyName, value: action.value, id: state[key].length + 1 }],
            }
        }
        case CHANGE_TOGGLE_MODE: {
            return {
                ...state,
                toggleCost: action.boolean
            }
        }
        case CREATE_ARRAY: {
            let key = 'profit'
            let arr = 'valuesProfit'
            if (state.toggleCost) {
                key = 'costs'
                arr = 'arrValuesCosts'
            }
            return {
                ...state,
                [arr]: [...state[key].map(element => element.value)].map(Number)
            }
        }
        case SUM_ARRAY: {
            let total = 'totalProfit'
            let arr = 'valuesProfit'
            if (state.toggleCost) {
                total = 'totalCost'
                arr = 'arrValuesCosts'
            }
            return {
                ...state,
                [total]: [...state[arr]].reduce((a, b) => a + b, 0)
            }
        }
        case DELETE_ITEM: {
            let key = action.key
            let costs = 'profit'
            if (state.toggleCost) {
                costs = 'costs'
            }
            return {
                ...state,
                [costs]: [...state[costs]].filter((el) => el.id !== key)
            }
        }
        default:
            return state
    }
}

export const addItem = (propertyName, value) => ({ type: ADD_ITEM, propertyName, value })
export const changeToggleMode = (boolean) => ({ type: CHANGE_TOGGLE_MODE, boolean })
export const createArray = () => ({ type: CREATE_ARRAY })
export const sumArray = () => ({ type: SUM_ARRAY })
export const deleteItem = (key) => ({ type: DELETE_ITEM, key })

