import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "myApiKey",      
  authDomain: "myAuthDomain",
  projectId: "myProjectId",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
