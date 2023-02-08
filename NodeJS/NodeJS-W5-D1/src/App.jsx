import { useState, useEffect } from "react";
import { BSON } from "realm-web";

import { app, user, collection } from "./utils/mongo.client";
import UserIcon from "./assets/svg/UserIcon";
import Modal from './components/Modal'

function App() {
  const [users, setUsers] = useState(null);
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [userValue, setUserValue] = useState();
  const [editingId, setEditingId] = useState();

  useEffect(() => {
    async function getUsers() {
      const listOfUsers = await user.functions.getAllUsers();
      setUsers(listOfUsers);

      {id, name, location, email}

      //every change that happens in the stream, watch adds the changes to the list
      for await (const change of collection.watch()){

        // setUsers(users => {...users, change.fullDocument})
        if(change.operationType === 'update'){
          // console.log(change)
          setUsers(users => {

            return users.map(user => {
              const userId = new BSON.ObjectID(user._id).toString()
              const updatedUserId = new BSON.ObjectID(change.fullDocument._id).toString()

              if(userId === updatedUserId){
                console.log(userId, updatedUserId)
                const updatedUserData = change.updateDescription.updatedFields
                return { ...user, ...updatedUserData}
              }

              return user
            })
          })
        }
      }
    }

    getUsers();
  }, []);

  const handleModalClose = () => {
    setModal(false);
    setIsEdit(false);
  };

  const handleDelete = async (id) => {
    const idAsString = new BSON.ObjectID(id).toString()
    const deletedUser = await user.functions.deleteUser(idAsString)
    console.log(deletedUser)
    setUserValue(deletedUser.deleteCount)
  }

  return (
    <>
      <header className="h-16 w-full bg-slate-900 px-6 flex justify-between items-center">
        <h1 className="text-x1 text-slate-200">User List - {user.id}</h1>
        <button
          className="text-lg text-slate capitalize px-6 py-2 bg-slate-200 rounded-md"
          onClick={() => setModal(true)}
        >
          create
        </button>
      </header>
      <section className="mt-10 flex justify-center px-6">
        <ul className="w-full">
          {users &&
            users.map((user) => (
              <li
                key={user._id}
                className="border-2 p-6 mp-3 rounded-lg flex items-center"
              >
                <section className="h-10 w-10 bg-slate-100 rounded-md flex justify-center items-center mr-4">
                  <UserIcon />
                </section>
                <section>
                  <h2 className="capitalize font-semibold mb-1">{user.name}</h2>
                  <p className="capitalize text-gray-500 mb-1">
                    {user.location}
                  </p>
                  <p className="text-slate-500 font-medium text-sm mb-2">
                    {user.email}
                  </p>
                  <div className="flex">
                    <button
                      className="text-sm text-red-500 capitalize px-4 py-2 mr-4 border border-red-500 rounded-md"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="text-sm text-white capitalize px-4 py-2 bg-slate-900 rounded-md"
                      onClick={() => {
                        setModal(true);
                        setIsEdit(true);
                        setEditingId(user._id);
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </section>
              </li>
            ))}
        </ul>
      </section>

      <Modal
        isOpen={modal}
        isEdit={isEdit}
        closeModal={handleModalClose}
        setUserValue={setUserValue}
        editingId={editingId}
      />
    </>
  );
}

export default App;
