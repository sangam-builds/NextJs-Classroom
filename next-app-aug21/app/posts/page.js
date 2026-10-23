
export const revalidate=20

export default  async function  Posts(){

    const response= await fetch("https://localhost:3000/api/hello",

    );

    // console.log(response);
     const currentTime= new Date().toLocaleTimeString();
    const data= await response.json()
    // console.log(data);
    // const data= await response.json()
   
    return(
        <>
        {currentTime}
        <h1>Posts Data</h1>
        <pre>{ data.map((item)=> item.name)} </pre>

        
            
        </>
    )
}