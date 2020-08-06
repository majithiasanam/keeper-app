export const initialState = {
    notes: [
        {
            title: "Buy Groceries",
            description: "Buy milk, eggs and olive oil"
        },
        {
            title: "Kitchen Plumbing",
            description: "Call plumber and check his availability at the weekend. Read online about sink clogging solutions."
        }
    ]
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return {
                ...state,
                notes: [...state.notes, action.newNote]
            }
        case "DELETE_NOTE":
            let newNotes = [...state.notes];
            newNotes.splice(action.noteId, 1);
            return {
                ...state,
                notes: newNotes
            };
        default:
            return state;
    }
}


