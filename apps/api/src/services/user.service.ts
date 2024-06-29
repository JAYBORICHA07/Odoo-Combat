import { db } from "../db/db.config";
import { User } from "../db/tables/user.table";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const getUserByEmail = async (userEmail: string): Promise<any> => {
  // @ts-ignore
  const user = await db.user.where({ email: userEmail });
  console.info("User found", user);
  return user;
};

export const addNewUser = async (
  userDetails: Omit<User, "id">
): Promise<User> => {
  console.info("Adding new user", userDetails);
  const user = db.user.create({ ...userDetails });
  return user;
};
