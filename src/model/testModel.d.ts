import { ITestModel, IUser } from "../types/types";
/**
 * This class serves as the database query points in the MVC architecture
 *
 */
export declare class TestModel implements ITestModel {
    private dB;
    constructor();
    /**
     * This function simulates the CRUD functionality of create
     * @param data
     * @returns
     */
    createUserMd(data: IUser): Promise<IUser | null>;
    /**
     * This function selects all the users in the database
     * @returns
     */
    getAllUserMd(): Promise<Array<IUser>>;
    /**
     * This function select a user based on the user Id
     * @param Id
     * @returns
     */
    getUserMd(Id: number): Promise<IUser | null>;
    /**
     * This function deletes a user from the database based on the user Id
     * @param Id
     * @returns
     */
    deleteUserMd(Id: number): Promise<IUser | null>;
    /**
     * This function edits a users information with the user Id
     * @param Id
     * @param email
     * @returns
     */
    editUserMd(Id: number, email: string): Promise<IUser | null>;
}
