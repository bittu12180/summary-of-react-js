import { useRef } from "react";
import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props){

    const titleInputRef=useRef();
    const imageInputRef=useRef();
    const addressInputRef=useRef();
    const descriptionInputRef=useRef();
  
    


    function submithandler(event){
        event.preventDefault();
       const enteredTitle= titleInputRef.current.value;
       const enteredImage= imageInputRef.current.value;
       const enteredAddress= addressInputRef.current.value;
       const entereddescription= descriptionInputRef.current.value;

       const meetupData={
           title:enteredTitle,
           image:enteredImage,
           address:enteredAddress,
           description:entereddescription,
       }

       //console.log(meetupData);
       props.onAddMeetup(meetupData)

    }
    return <Card>
        <form className={classes.form} onSubmit={submithandler}>
            <div className={classes.control}>
                <label htmlFor="title">Meetup Title  </label>
                    <input type="text" required id="title" ref={titleInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Image  </label>
                    <input type="url" required id="image" ref={imageInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Address  </label>
                    <input type="address" required id="address" ref={addressInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Description  </label>
                    <textarea type="description" required id="description" row="5" ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.actions}>
               <button>Add Meetup</button>
            </div>

        </form>
        </Card>

}

export default NewMeetupForm;