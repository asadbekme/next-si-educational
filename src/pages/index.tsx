import Head from "next/head";
import {
  Navbar,
  Banner,
  Companies,
  Tabs,
  Mentor,
  Students,
  Newsletter,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Si Educational</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="title" content="Si Educational next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Banner />
        <Companies />
        <Tabs />
        <Mentor />
        <Students />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}
