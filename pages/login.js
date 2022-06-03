import { withIronSessionSsr } from "iron-session/next";
import { useRouter } from "next/router";
import { login } from "../logic/api";
import { sessionConfig } from "../logic/session";

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps(context) {
    if (context.req.session.user) {
      return {
        redirect: {
          destination: "/",
        },
      };
    }
    return { props: {} };
  },
  sessionConfig
);

export default function Login() {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    login(data.username, data.password).then(() => {
      router.replace(router.asPath);
    });
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" required name="username" placeholder="username" />
        <input
          type="password"
          required
          name="password"
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
