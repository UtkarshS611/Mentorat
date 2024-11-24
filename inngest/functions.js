import { inngest } from "./client";
import { db } from "@/configs/db";
import { USER_TABLE } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";

export const helloWorld = inngest.createFunction(
    { id: "hello-world" },
    { event: "test/hello.world" },
    async ({ event, step }) => {
        await step.sleep("wait-a-moment", "1s");
        return { message: `Hello ${event.data.email}!` };
    },
);

export const CreateNewUser = inngest.createFunction(
    { id: "create-user" },
    {event: "user.create" },
    async({event,step}) => {
        const {user}=event.data;
        const result = await step.run('Check User and create a new one if not already present in database', async() => {
                const result = await db.select().from(USER_TABLE).where(eq(USER_TABLE.email,user?.primaryEmailAddress?.emailAddress))

                console.log(result);
                if(result?.lenght==0){
                    const userResponse = await db.insert(USER_TABLE).values({
                        name: user?.fullName,
                        email: user?.primaryEmailAddress?.emailAddress
                    }).returning({id:USER_TABLE.id})
                    return userResponse;
                }
                return result;
        })
        return "success";
    }

)
