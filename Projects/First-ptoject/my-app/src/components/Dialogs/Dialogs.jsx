import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from "redux-form";
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLenghtCreator, required } from '../../utils/validators/validators';



const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messegesElements = state.messagesData.map(message => <Message message={message.message} key={message.id} />);

    let newMessageBody = state.newMessageBody;


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }


    if (!props.isAuth) return <Navigate to={"/login"} />;

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div> {messegesElements} </div>
            </div>
            <AddMessageFormRedux  onSubmit={addNewMessage}/>
        </div>
    )
}


const maxLenght50 = maxLenghtCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                validate={[required, maxLenght50]} 
                name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div><button>Send</button></div>
        </form >
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm);

export default Dialogs;