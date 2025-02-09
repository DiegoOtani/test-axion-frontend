import { jwtVerify } from 'jose';

export const verifyToken = async (token: string) => {
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET as string));
    return payload;
  } catch (error) {
    console.error(error);
    return null;
  }
};
