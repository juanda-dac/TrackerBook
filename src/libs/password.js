import { genSalt, hash, compare } from "bcrypt";


export async function passwordHash(pass) {
    const salt = await genSalt(10);
    return await hash(pass, salt)
}

export async function checkPassword(pass, passHash) {
    return await compare(pass, passHash);
}