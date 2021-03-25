import './App.css';
import { Admin, Resource } from 'react-admin';
import { EventCreate, EventEdit, EventList, EventShow } from './events';
import { firebaseDataProvider, firebaseAuthProvider } from './firebase';

const App = () => (
  <Admin dataProvider={firebaseDataProvider} authProvider={firebaseAuthProvider}>
    <Resource name="events" list={EventList} show={EventShow} create={EventCreate} edit={EventEdit}/>
  </Admin>
);

export default App;
