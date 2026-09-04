// export default async function Profile({params}) {
//     // const {name,id,email}= await params
//     // const displayEmail = decodeURIComponent(email);
//     await new Promise((resolve)=>
//         setTimeout(resolve,4000)
//   );

// //   throw new Error("Server failed")
//     return(
//         <>
//         <h1>Profile id: {id}</h1>
//         <h1>Name: {name}</h1>
//         <h1>Email: {displayEmail}</h1>
        
//         </>
//     )
    
// }

export default async function About(){
     await new Promise((resolve)=>
        setTimeout(resolve,4000)
  );
    return(
        <h1>This is my about component</h1>
    )
}