import CredentialsProvider from "next-auth/providers/credentials";
import { setCorsHeaders } from "./cors";

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials) {
        // setCorsHeaders(req, res, () => {});

        const user = { id: "42", name: "hudos-admin", password: "Qq12345!@" };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "default-secret-key",
};
