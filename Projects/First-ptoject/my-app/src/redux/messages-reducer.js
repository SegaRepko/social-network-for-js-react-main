const SEND_MESSAGE = 'SEND-MESSAGE';



let initialState = {
    messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: "It's my" },
        { id: 3, message: 'How are you?' },
        { id: 4, message: 'Fine' },
        { id: 5, message: 'Goodbye' }
    ],
    dialogsData: [
        { id: 1, name: 'Serezha' },
        { id: 2, name: 'Kate' },
        { id: 3, name: 'Mama' },
        { id: 4, name: 'Papa' },
        { id: 5, name: 'Liza' },
        { id: 6, name: 'Anton' }
    ]
};


const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 6, message: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: 'SEND-MESSAGE', newMessageBody })





export default messagesReducer;