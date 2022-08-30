import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from "../../../assets/images/user.png";



const ProfileInfo = (props) => {
    if (!props.profile) {
        return < Preloader/>
    }


    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files.length[0]);
        }
    }

    return (
        <div>
            {/* <div>
                <img src='http://www.catsmob.com/post/2012/06/01089/creative_facebook_timeline_covers_098.jpg'></img>
            </div> */}
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={classes.mainPhoto} />
                { props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} /> }
               <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}



export default ProfileInfo;