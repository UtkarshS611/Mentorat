import { inngest } from "@/inngest/client";

export async function POST(req) {
    
    const {user} = await req.json();
    const result = inngest.send({
        name:"user.create",
        data:{
            user:user
        }
    })

    return NextResponse.json({result})
}