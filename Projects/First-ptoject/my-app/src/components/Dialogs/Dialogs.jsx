import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Navigate } from 'react-router-dom';




const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} /> ); 
    let messegesElements = state.messagesData.map(message => <Message message={message.message} key={message.id} /> ); 

    let newMessageBody = state.newMessageBody;  

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMassageChange = (event) => {
      let body = event.target.value;
      props.updateNewMessageBody(body);
    }
        
    if (!props.isAuth) return <Navigate to={"/login"} />;

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