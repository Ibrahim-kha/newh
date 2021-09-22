import firebase from "../config/firebase-config";
const socialMediaAuth=(provider)=>{
 return firebase.auth().signInWithPopup(provider).then((res)=>{
       var name="";  
       name=firebase.auth().currentUser.displayName;
        /*if(name!="")
        {
           wel(name);
        }*/
       return name;
    })
    .catch((er)=>{
        return er;
    });
};

export default socialMediaAuth;