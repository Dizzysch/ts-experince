import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWorld(request:Request, response:Response) {
    const user = createUser({
        email: 'victorwilbert@gmail.com',
        password: '123456',
        techs: [
            'node',
            'react',
            'react-native',
            { title: 'JS', experience: 98 },
         ],
    });

    return response.json({ message: 'hello fella' })
}