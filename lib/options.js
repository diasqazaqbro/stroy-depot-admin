import CredentialsProvider from "next-auth/providers/credentials";
const user = {
  id: process.env.NEXTAUTH_USER_ID,
  name: process.env.NEXTAUTH_USER_NAME,
  password: process.env.NEXTAUTH_USER_PASSWORD,
};
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
        const user = { id: "42", name: "Dave", password: "nextauth" };

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
