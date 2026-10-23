export async function GET(request,{params}) {
    const {searchParams}= new URL(request.url);
    const name= searchParams.get('name');
    const course= searchParams.get('course');
    const  {id}= await  params;
    const contentType= await request.headers.get('content-type')
    const Connection= await request.headers.get('Connection')
    return  Response.json({
        message:"Student FOund",
        studentId:id,
        contentType:contentType
    })
}
export async function PUT (request,{params}) {
    const {id}= await params;
    const body= await request.json();
    return Response.json({
        message:"Stduent Updated Successflly",
        studentId:id,
        data:body

    })
    
}