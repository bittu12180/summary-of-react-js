import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history=useHistory();
  function onAddMeetupHandler(meetupData){
    fetch('https://react--request-default-rtdb.firebaseio.com/addmeetup.json',
    {
      method:'POST',
      body:JSON.stringify(meetupData),
      headers:{
        'Context-Type':'application/json'

      }
    }
    ).then(()=>{
      history.replace('/');
    });

  }
    return <section>
      <h1>add NewMeetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
    </section>;
  }
  
  export default NewMeetupPage;