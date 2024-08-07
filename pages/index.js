import Main from "../components/Main.jsx";
import AboutMe from '../components/AboutMe.jsx';
import Skills from "../components/Skills.jsx";
import MyProjects from '../components/MyProjects.jsx'; 
import Contact from "../components/Contact.jsx";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Keamogetswe | Portfolio</title>
        <meta name="description" content="Generated by next app" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      
      <Main/>
      <AboutMe/>
      <Skills/>
      <MyProjects/>
      <Contact/>
    </div>
  );
}
