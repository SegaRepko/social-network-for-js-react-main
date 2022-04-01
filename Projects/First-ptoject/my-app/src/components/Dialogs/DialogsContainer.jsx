import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';
import store from '../../redux/redux-store';



const DialogsContainer = (props) => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().messagesPage;


            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }

            let onNewMassageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            }
            return < Dialogs updateNewMessageBody={onNewMassageChange}
                sendMessage={onSendMessageClick}
                messagesPage={store.getState().messagesPage} />
        }
        }
    </StoreContext.Consumer>
}


export default DialogsContainer;