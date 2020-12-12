import "firebase/app";
import firebase from "firebase/app";
import { usersColection } from "../utils/fbase";

export const registerUser = async ({ email, password, name, lastname }) => {
  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    const { user } = response;

    const userProfile = { uid: user.uid, email, name, lastname, role: 1 };

    await usersColection.doc(user.uid).set(userProfile);
    firebase.auth().currentUser.sendEmailVerification(null);
    return { isAuth: true, user: userProfile };
  } catch (error) {
    return { error: error.message };
  }
};
