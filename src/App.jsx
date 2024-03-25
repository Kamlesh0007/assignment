import { useState, useEffect } from "react";
import "./App.css";
import PreLoader from "./Components/PreLoader/PreLoader";
import Header from "./Components/Header/Header";
import axios from "axios";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home";
import ContactSection from "./Components/Contact/Contact";
import SideNavbar from "./Components/SideBar/SideBar";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Blog from "./Components/Blog/Blog";
import HomeOnepage from "./Components/Pages/HomeOnepage";
import ConditionalWrapper from "./Components/ConditionalWrapper/ConditionalWrapper";
import Home2 from "./Components/Home/Home2";
import Modal from "./Components/Modal/Modal";
import Toggle from "./Components/Toggle/Toggle";

function App() {
  const [data, setData] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isDefaultHome, setIsDefaultHome] = useState(true);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const [activeModalContent, setActiveModalContent] = useState(null);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      let userid = "65b3a22c01d900e96c4219ae";
      try {
        // Fetch data from the API
        const response = await axios.get(
          `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userid}`,
        );
        if (response.data.success === true) {
          // Set the fetched data in the state
          setData(response.data.user);
          setIsLoading(false);
          console.log(response.data.user);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const { pathname } = location;
  useEffect(() => {
    // Update body classes based on the pathname

    if (pathname === "/HomeOnepage") {
      document.body.classList.add("bg-dark", "onepage-version", "bg-fixed");
      document.body.style.backgroundImage =
        "url(/src/assets/img/shape/banner-1.png)";
    } else if (
      (pathname === "/" && isDarkMode) ||
      pathname === "/HomeVcard-dark"
    ) {
      document.body.classList.add("bg-dark", "home-vcard", "bg-fixed");

      document.body.style.backgroundImage =
        "url(/src/assets/img/shape/banner-1.png)";
    } else if (pathname === "/HomeLight") {
      document.body.className = "bg-fixed home-vcard";
      document.body.style.backgroundImage =
        "url(/src/assets/img/shape/banner.jpg)";
    } else if (pathname === "/HomeOnpageLight") {
      document.body.className = "onepage-version bg-fixed";
      document.body.style.backgroundImage =
        "url(/src/assets/img/shape/banner.jpg)";
    } else if (pathname === "/Home2" && isDarkMode) {
      document.body.classList.add("bg-dark", "home-vcard", "bg-fixed");

      document.body.style.backgroundImage =
        "url(/src/assets/img/shape/banner-1.png)";
      if (isDefaultHome) {
        setIsDefaultHome(false);
      }
    }
  }, [location.pathname]);

  const scrollToSection = (ref) => {
    console.log(ref);
    const section = document.getElementById(ref);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start"});
    }
  };
  // useEffect(() => {
  //   // Retrieve dark mode setting from localStorage
  //   const storedDarkMode = localStorage.getItem("darkMode");
  //   console.log(storedDarkMode);
  //   if(storedDarkMode!==null || storedDarkMode!==undefined)
  //   {
  //     setIsDarkMode(storedDarkMode);
  //     localStorage.setItem("darkMode", isDarkMode);
  //   } else{
  //     setIsDarkMode(true);
  //         // Store dark mode setting in localStorage
  //         localStorage.setItem("darkMode", isDarkMode);
  //     document.body.classList.add("bg-dark", "home-vcard", "bg-fixed");

  //     document.body.style.backgroundImage =
  //       "url(/src/assets/img/shape/banner-1.png)";
  //   }    

    
   
  // }, []);
      // Retrieve dark mode setting from localStorage
      const storedDarkMode = localStorage.getItem("darkMode");
  useEffect(() => {

    
    // Check if stored value is not null or undefined
    if (storedDarkMode !== null && storedDarkMode !== undefined) {
      // Convert the stored value to a boolean
    
      const isDarkModeEnabled = storedDarkMode === "true";
      console.log(storedDarkMode,isDarkModeEnabled);
      setIsDarkMode(isDarkModeEnabled);
    
    } else {
      // If no value found in localStorage, set default value to true
      setIsDarkMode(true);
      // Store the default dark mode setting in localStorage
      localStorage.setItem("darkMode", true);
   
    }
  }, []);
  
  // Apply dark mode settings to the body
  const applyDarkMode = (isDarkModeEnabled) => {
    console.log(isDarkModeEnabled);
    if (isDarkModeEnabled) {
      document.body.classList.add("bg-dark", "home-vcard", "bg-fixed");
      document.body.style.backgroundImage =
        "url(/assets/img/shape/banner-1.png)";
    } else {
      document.body.classList.remove("bg-dark", "home-vcard", "bg-fixed");
      document.body.classList.add( "home-vcard", "bg-fixed");

      document.body.style.backgroundImage =
        "url(/assets/img/shape/banner.jpg)";
    }
  };
  
  // Update dark mode setting in localStorage whenever it changes
  useEffect(() => {

console.log("darkmode changes"+isDarkMode,storedDarkMode);
if(isDarkMode!=storedDarkMode){
    localStorage.setItem("darkMode", isDarkMode);
    applyDarkMode(isDarkMode);
}
  }, [isDarkMode]);
  



  return (
    <>
      <div className="wrapper">
        {isLoading ? (
          <PreLoader />
        ) : (
          <div className="main-wrapper">
            <div className="main-content-area">
              <>
              <Toggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
                <SideNavbar
                  data={data}
                  page={pathname}
                  setIsDarkMode={setIsDarkMode}
                  isDarkMode={isDarkMode}
                  scrollToSection={scrollToSection}
                  isDefaultHome={isDefaultHome}
                  setIsDefaultHome={setIsDefaultHome}
                />
                <Header />
                <Routes>
                  <Route
                    path="/"
                    element={
                      <ConditionalWrapper
                        condition={location.pathname === "/HomeOnepage"}
                      >
                        <Home data={data}  page={pathname}      scrollToSection={scrollToSection}/>
                      </ConditionalWrapper>
                    }
                  />
                  <Route
                    path="/contact"
                    element={
                      <ConditionalWrapper
                        condition={location.pathname === "/HomeOnepage"}
                      >
                        <ContactSection />
                      </ConditionalWrapper>
                    }
                  />

                  <Route
                    path="/projects"
                    element={
                      <ConditionalWrapper
                        condition={location.pathname === "/HomeOnepage"}
                      >
                        <Projects
                          data={data}
                          isOpen={isOpen}
                          setIsOpen={setIsOpen}
                          setActiveModalContent={setActiveModalContent}
                        />
                      </ConditionalWrapper>
                    }
                  />
                  <Route
                    path="/about"
                    element={
                      <ConditionalWrapper
                        condition={location.pathname === "/HomeOnepage"}
                      >
                        <About data={data} DefaultHome={isDefaultHome} />
                      </ConditionalWrapper>
                    }
                  />
                  <Route
                    path="/services"
                    element={
                      <ConditionalWrapper
                        condition={location.pathname === "/HomeOnepage"}
                      >
                        <Services
                          data={data}
                          isOpen={isOpen}
                          setIsOpen={setIsOpen}
                          setActiveModalContent={setActiveModalContent}
                          DefaultHome={isDefaultHome} 
                        />
                      </ConditionalWrapper>
                    }
                  />
                  <Route
                    path="/blog"
                    element={
                      <ConditionalWrapper
                        condition={location.pathname === "/HomeOnepage"}
                      >
                        <Blog data={data} />
                      </ConditionalWrapper>
                    }
                  />
                  <Route
                    path="/HomeOnepage"
                    element={
                      <HomeOnepage
                        data={data}
                        condition={location.pathname === "/HomeOnepage"}
                        scrollToSection={scrollToSection}
                        DefaultHome={isDefaultHome}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        setActiveModalContent={setActiveModalContent}
                        page={pathname}      
                      />
                    }
                  />
                             <Route
                    path="/HomeOnepage2"
                    element={
                      <HomeOnepage
                        data={data}
                        condition={location.pathname === "/HomeOnepage2"}
                        scrollToSection={scrollToSection}
                        DefaultHome={isDefaultHome}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        setActiveModalContent={setActiveModalContent}
                        page={pathname}      
                      />
                    }
                  />
                  <Route
                    path="/HomeLight"
                    element={
                      <ConditionalWrapper
                        condition={location.pathname === "/HomeOnepage"}
                        
                      >
                        <Home data={data}  page={pathname}      scrollToSection={scrollToSection}/>
                      </ConditionalWrapper>
                    }
                  />
                    <Route
                    path="/HomeLight2"
                    element={
                      <ConditionalWrapper
                        condition={location.pathname === "/HomeOnepage"}
                        
                      >
                        <Home2 data={data}  page={pathname}       scrollToSection={scrollToSection}/>
                      </ConditionalWrapper>
                    }
                  />
                  <Route
                    path="/HomeOnpageLight"
                    element={
                      <HomeOnepage
                        data={data}
                        condition={location.pathname === "/HomeOnpageLight"}
                        scrollToSection={scrollToSection}
                        DefaultHome={isDefaultHome}
                        isOpen={isOpen}
                        setActiveModalContent={setActiveModalContent}
                        setIsOpen={setIsOpen}
                        page={pathname}      
                      />
                    }
                  />
                  <Route
                    path="/Home2"
                    element={
                      <ConditionalWrapper
                        condition={location.pathname === "/Home2Onepage"}
                      >
                        <Home2 data={data}  page={pathname}       scrollToSection={scrollToSection}/>
                      </ConditionalWrapper>
                    }
                  />
                </Routes>
                <Modal
                  isOpen={isOpen}
                  handleClose={handleClose}
                  modalContent={activeModalContent}
                />
              </>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
