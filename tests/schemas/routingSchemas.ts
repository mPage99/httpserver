import {z} from "zod";

export const Pages = z.enum([
    '/home',
    '/login',
    ///... whatever other pages are created
])