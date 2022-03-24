import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/messages-reducer';
import Dialogs from './Dialogs';



const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMassageChange = (body) => {
      props.store.dispatch(updateNewMessageBodyCreator(body));
    }
        
    return (
        < Dialogs updateNewMessageBody={onNewMassageChange} sendMessage={onSendMessageClick}
        messagesPage ={state} />
    )
}


export default DialogsContainer;