import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import Destination from "./pages/Destinations";
import DestinationIndex from "./pages/DestinationIndex";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs/>} />
            <Route path="faq" element={<FAQ/>} />
            <Route path="contact" element={<ContactUs/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="destination" >
              <Route index element={<Destination/>}/>
              <Route path="italy" element={<DestinationIndex/>}/>
            <Route/>
            </Route>

          </Route>
          <Route path="test" element={<DestinationIndex/>}/>
          <Route path="login" element={<SignIn />} />
          <Route path="forgotpassword" element={<ForgotPassword/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
