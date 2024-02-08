import Navbar from "../components/Navbar.jsx";
import Main from "../components/Main.jsx"
import About from "../components/About.jsx"
import Skills from "../components/Skills.jsx"
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Keamogetswe | Portfolio</title>
        <meta name="description" content="Generated by next app" />
        <link rel="logo" href="/favicon.io" />
      </Head>

      <Navbar/>
      <Main/>
      <About/>
      <Skills/>
    </div>
  );
}
