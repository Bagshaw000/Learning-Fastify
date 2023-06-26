import {Kind, Static, Type } from '@sinclair/typebox'

//This controls the type of data that enter your server
export const userSchema = Type.Object( {

      Id: Type.String(),
      
    
  });

  export type UserType = Static<typeof userSchema>