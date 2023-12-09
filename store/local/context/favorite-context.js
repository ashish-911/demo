import { createContext, useReducer } from "react";
import { act } from "react-test-renderer";

const DummyData = [
    {
        id: 'e1',
        description: 'For Books',
        amount: 46.33,
        period: new Date("2023-03-25")
    },
    {
        id: 'e2',
        description: 'For Movies',
        amount: 78.13,
        period: new Date("2022-05-15")
    },
    {
        id: 'e3',
        description: 'Doctors Fee for Consultation',
        amount: 17.01,
        period: new Date("2023-11-27")
    },
    {
        id: 'e4',
        description: 'For Home Rashan ',
        amount: 76.22,
        period: new Date("2023-11-23")
    },
    {
        id: 'e5',
        description: 'For Drugs and More',
        amount: 52.86,
        period: new Date("2021-07-25")
    }, {
        id: 'e6',
        description: 'For Educational Purpose',
        amount: 79.41,
        period: new Date("2022-02-18")
    },
    {
        id: 'e7',
        description: 'For Books',
        amount: 46.33,
        period: new Date("2023-03-25")
    },
    {
        id: 'e8',
        description: 'For Movies',
        amount: 78.13,
        period: new Date("2022-05-15")
    },
    {
        id: 'e9',
        description: 'Doctors Fee for Consultation',
        amount: 17.09,
        period: new Date("2023-11-30")
    },
    {
        id: 'e10',
        description: 'For Home Rashan ',
        amount: 76.22,
        period: new Date("2023-12-02")
    },
    {
        id: 'e11',
        description: 'For Drugs and More',
        amount: 52.86,
        period: new Date("2021-12-01")
    }, {
        id: 'e12',
        description: 'For Educational Purpose',
        amount: 79.41,
        period: new Date("2022-02-18")
    }
]

export const ExpenesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { }
});

function ExpenseReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state]
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex((expense) =>
                expense.id === action.payload.id);
            const updatableExpense = state[updatableExpenseIndex];
            const upDatedItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = upDatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state;
    }
}



function ExpensesContextProvider({ children }) {
    const [ExpesesState, dispatch] = useReducer(ExpenseReducer, DummyData);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData })
    }
    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id })
    }
    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } })
    }

    const value = {
        expenses: ExpesesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense

    };


    return <ExpenesContext.Provider value={value}>{children}</ExpenesContext.Provider>

}

export default ExpensesContextProvider;

