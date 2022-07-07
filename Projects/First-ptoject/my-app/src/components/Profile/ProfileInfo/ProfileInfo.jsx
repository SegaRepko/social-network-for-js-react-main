import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    if (!props.profile) {
        return < Preloader/>
    }
    return (
        <div>
            <div>
                <img src='http://www.catsmob.com/post/2012/06/01089/creative_facebook_timeline_covers_098.jpg'></img>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} />
                ava + description
            </div>
        </div>
    )
}



export default ProfileInfo;