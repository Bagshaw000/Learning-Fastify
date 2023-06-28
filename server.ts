import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import createServer from "./index";
import { PrismaClient } from "@prisma/client";

//This servers as the entry point tou your server
const server = createServer().withTypeProvider<TypeBoxTypeProvider>();


server.listen({port:8000}, (err, address)=>{
    if (err) {
        console.error(err)
        process.exit(1)
      }
      console.log(`Server listening at ${address}`)
})