import bcrypt from "bcryptjs"

const saltRounds = 10; // Hashleme karmaşıklığı (10-12 önerilen bir değerdir)

export const verifyPassword = async (password: string, hash: string) => {
    const compare = await bcrypt.compare(hash, password)
    if (!compare) {
        throw new Error('Password does not match')
    }
    return compare
}

export const hashPassword = async (password: string) => {
    return bcrypt.hash(password, saltRounds);
}
