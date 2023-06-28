export interface IUser {
    email: string;
}
export interface ITestModel {
    createUserMd(data: IUser): Promise<IUser | null>;
    getAllUserMd(): Promise<Array<IUser>>;
    getUserMd(Id: number): Promise<IUser | null>;
    deleteUserMd(Id: number): Promise<IUser | null>;
    editUserMd(Id: number, email: string): Promise<IUser | null>;
}
