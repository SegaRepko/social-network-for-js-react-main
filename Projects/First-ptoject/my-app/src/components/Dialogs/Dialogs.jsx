import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/messages-reducer';



const Dialogs = (props) => {

    let state = props.store.getState().messagesPage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> ); 
    let messegesElements = state.messagesData.map(message => <Message message={message.message} /> ); 

    let newMessageBody = state.newMessageBody;  

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMassageChange = (event) => {
      let body = event.target.value;
      props.store.dispatch(updateNewMessageBodyCreator(body));
    }
        
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
               <div> {messegesElements} </div>
               <div>
                   <div><textarea value={newMessageBody} 
                                onChange={onNewMassageChange}
                                placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
               </div>
            </div>
        </div>
    )
}


export default Dialogs;