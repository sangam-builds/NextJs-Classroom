
export const revalidate=20

export default  async function  Posts(){

    const response= await fetch("https://jsonplaceholder.typicode.com/posts",

    );

    // console.log(response);
     const currentTime= new Date().toLocaleTimeString();
    const data= await response.json()
    // console.log(data);
   
    return(
        <>
        {currentTime}
        <h1>Posts Data</h1>
        <pre>{ data.map((item)=> item.title)} </pre>

        
            
        </>
    )
}