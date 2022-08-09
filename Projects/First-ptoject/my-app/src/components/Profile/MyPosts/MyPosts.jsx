import classes from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';
import { Field, reduxForm } from "redux-form";
import { maxLenghtCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';



const MyPosts = (props) => {


  let postsElements =
    props.postsData.map(posts => <Post message={posts.message} likesCount={posts.likesCount} />);



  let newPostElement = React.createRef();


  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }





  return <div>
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  </div>
}




const maxLenght10 = maxLenghtCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        New post
      </div>
      <div>
        <Field name="newPostText" component={ Textarea } placeholder = {"Post message"}
              validate={[required, maxLenght10]}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);


export default MyPosts; 