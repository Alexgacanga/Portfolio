import { About } from "./components/About";
import { Contacts } from "./components/Contacts";
import Footer from "./components/Footer";
import { Projects } from "./components/Projects";
import Home from "./components/Home"

export default function App() {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Contacts />
      <Footer />

    </div>
  )
}
