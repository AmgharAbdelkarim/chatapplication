const users =  [] ;

const addUser = ({id , name , room})=>{
    name = name.trim().toLowerCase()
    room = room.trim().toLowerCase(); //transform Amghar abdo to amgharabdo

    const existinguser = users.find((user)=> user.name === name && user.room === room)
    if (existinguser){
        return {error : "username token"}
    }
    const user = {id , name , room }
    users.push(user)
    return {user}


}
const removeUser= (id)=>{
    const index = users.findIndex(user => user.id ===id)
    if (index !== -1){
        return users.splice(index , 1)[0]
    }
}
const getUser =(id)=> users.find(user=> user.id === id)

const usersInRooms = (room ) => users.filter(user => user.room === room)

module.exports = {addUser , removeUser , getUser , usersInRooms}