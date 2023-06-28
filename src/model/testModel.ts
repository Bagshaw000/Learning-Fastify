import { PrismaClient } from "@prisma/client";
import { ITestModel, IUser } from "../types/types";

/**
 * This class serves as the database query points in the MVC architecture
 * 
 */

export class TestModel implements ITestModel{
    private dB: PrismaClient ;
    

    //Instantiat the Prisma ORM api
    constructor(){
        this.dB = new PrismaClient();

    }
    
    
    /**
     * This function simulates the CRUD functionality of create
     * @param data 
     * @returns 
     */
    async  createUserMd(data:  IUser):Promise<IUser | null> {
        
        const{email} = data;
        const newUser = await this.dB.user.create({
            data: {
                email: email as string,
            },
        })
        await this.dB.$disconnect();
        return newUser;
       
    }

    /**
     * This function selects all the users in the database
     * @returns 
     */
    async getAllUserMd(): Promise<Array<IUser>>{
        const getAllUsers:Array<IUser> = await this.dB.user.findMany( 
         )

        await this.dB.$disconnect();

        return getAllUsers;
    }


    /**
     * This function select a user based on the user Id
     * @param Id 
     * @returns 
     */
    async getUserMd( Id: number): Promise<IUser | null>{
        
        const getUser = await this.dB.user.findUnique({where: {
            id: Id
        }});
        await this.dB.$disconnect();
        return getUser ;
    }

    /**
     * This function deletes a user from the database based on the user Id
     * @param Id 
     * @returns 
     */
    async deleteUserMd(Id: number):Promise<IUser | null>{
        const deleteUser = await this.dB.user.delete({where:
        {
            id: Id
        }});

        return deleteUser;
    }

    /**
     * This function edits a users information with the user Id
     * @param Id 
     * @param email 
     * @returns 
     */
    async editUserMd(Id: number, email: string ):Promise<IUser | null>{

        const editUser = await  this.dB.user.update({
            where:{
                id: Id
            },
            data:{
                email: email
            }
        });

        await this.dB.$disconnect();

        return editUser;
    }
}
