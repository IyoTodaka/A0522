import * as Realm from 'realm-web';

export const app = new Realm.App({ id: import.meta.env.VITE_REALM_APP_ID })

const credentials = Realm.Credentials.anonymous()
export const user = await app.logIn(credentials);

//connect to the database
const mongo = app.currentUser.mongoClient("mongodb-atlas")
export const collection = mongo.db("react-realm-db").collection("react-realm-col")