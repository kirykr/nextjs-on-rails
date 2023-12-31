import Head from "next/head";

import { Button, Card, TextInput } from "../components/shared";

import { userFromCookie } from "../utils";

const Home = ({}) => {
  return (
    <div>
      <Head>
        <title>Demo: Next.js on Rails</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header className="flex flex-col items-center justify-center mt-10">
          <h1 className="text-5xl font-extrabold">
            Welcome to <span className="text-blue-500">Next.js</span> on{" "}
            <span className="text-blue-500">Rails</span>
          </h1>
          <p className="text-xl tracking-widest font-bold mt-10 bg-purple-100 px-6 py-2">
            UI components available for use in your Next.js application
          </p>
        </header>
        <div className="flex flex-col items-center w-full">
          <h2 className="my-10 font-extrabold text-blue-500 text-3xl">
            Buttons
          </h2>
          <section className="grid md:grid-cols-3 gap-4 md:w-7/12 w-10/12 px-4">
            <Button>Default</Button>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="danger">Danger</Button>
            <Button color="warning">Warning</Button>
            <Button color="info">Info</Button>
            <Button color="light">Light</Button>
            <Button color="dark">Dark</Button>
          </section>
          <h2 className="my-10 font-extrabold text-blue-500 text-3xl">Card</h2>
          <Card>
            <Card.Body>
              <img src="https://bit.ly/3LryLcC" />
              <h1 className="font-semibold text-2xl tracking-wide px-4 my-1">
                Samsung refrigerator
              </h1>
              <p className="px-4 text-lg leading-7 text-gray-700">
                Energy efficiency simply means using less energy to perform the
                same task
              </p>
            </Card.Body>
            <Card.Footer className="justify-between">
              <p className="text-gray-600 font-semibold">
                Are you ready to buy?
              </p>
              <Button>Buy now</Button>
            </Card.Footer>
          </Card>
          <h2 className="my-10 font-extrabold text-blue-500 text-3xl">Input</h2>
          <section className="bg-white shadow p-5 max-w-sm w-full space-y-3">
            <TextInput label="Enter your email" />
            <TextInput label="Password" type="password" />
            <TextInput
              label="Phone"
              type="tel"
              helperText="Phone number is incorrect!"
            />
            <TextInput label="DOB" type="datetime-local" />
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ req }) {
  const user = userFromCookie(req);
  return {
    props: {
      loggedIn: user ? user.token.length > 0 : false,
    },
  };
}

export default Home;
