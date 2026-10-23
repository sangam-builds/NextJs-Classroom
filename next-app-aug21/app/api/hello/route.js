let students=[
        {'id':1,'name':'Shiana'},
        {'id':2,'name':'Ankit'},
        {'id':3,'name':'Pritam'}
    ]
export async function GET(){
    return Response.json(students)
}
export async function POST(request){
    const data = await request.json();
    if (Array.isArray(data)) {
     students.push(...data)
    }else{
        const newStudent={
            id:data.id,
            name:data.name
        }
     students.push(newStudent)
    }
    return Response.json({
        students:students,
        message:"Data submitted successfully"
    })
}

export async function PUT(request){
    const data= await request.json();
    const oldData=students.find(item=>item.id===data.id)
    if(!oldData){
        return Response.json({message:"Student Not found"})
    }
    oldData.id=data.id
    oldData.name=data.name
    return Response.json({
        message:'Data updated successfully',
        students:students
    })
}


export async function DELETE(request){
    const data = await request.json();
    const index=students.findIndex(item=>item.id===data.id)
    if(index===-1){
        return Response.json({message:"Student Not found"})
    }
    students.splice(index,1)
    return Response.json({
        message:'Data updated successfully',
        students:students
    })
}