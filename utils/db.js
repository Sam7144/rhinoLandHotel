import mongoose from 'mongoose';
// const connectDb=async()=>mongoose.connect(process.env.MONGODB_URI)
// export default connectDb;
const connection={}
async function connect(){
    if(connection.isConnected){
        console.log("álready connected")
        return
    }
    const db=await mongoose.connect(process.env.MONGODB_URI)
    connection.isConnected=db.connections[0].readyState;
}
export default connect;
//     if(mongoose.connections.length>0){
//         connection.isConnected=mongoose.connections[0].readyState;
//         if(connection.isConnected===1){
//             console.log('use the previous connections')
//             return
//         }
//         await mongoose.disconnect()
//     }
//     const db=await mongoose.connect(process.env.MONGODB_URI)
//     console.log('new connection')
//     connection.isConnected=db.connections[0].readyState;
// }
// async function disconnect(){
//     if(connection.isConnected){
//         if(process.env.NODE_ENV==='production'){
//             await mongoose.disconnect()
//             connection.isConnected=false
//         }
//         else{
//             console.log('not disconnected')
//         }
//     }
// }

  
//   const db = { connect, disconnect};
//   export default db;