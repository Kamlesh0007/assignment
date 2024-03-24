import React, { useRef } from "react";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Blog from "../Blog/Blog";
import ContactSection from "../Contact/Contact";
import Services from "../Services/Services";
import ConditionalWrapper from ".././ConditionalWrapper/ConditionalWrapper";
import Home2 from "../Home/Home2";
const HomeOnepage = ({
  data,
  condition,
  scrollToSection,
  DefaultHome,
  isOpen,
  setIsOpen,
  setActiveModalContent
}) => {
  return (
    <>
      <ConditionalWrapper condition={condition}>
      {DefaultHome?  <Home data={data} />:<Home2 />}
      </ConditionalWrapper>
      <ConditionalWrapper condition={condition}>
        <Services
          data={data}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setActiveModalContent={setActiveModalContent}
          DefaultHome={DefaultHome}
        />
      </ConditionalWrapper>
      <ConditionalWrapper condition={condition}>
        <About data={data} DefaultHome={DefaultHome} scrollToSection={scrollToSection} />
      </ConditionalWrapper>
      <ConditionalWrapper condition={condition}>
        <Projects
          data={data}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setActiveModalContent={setActiveModalContent}
        />
      </ConditionalWrapper>
      <ConditionalWrapper condition={condition}>
        <Blog data={data} />
      </ConditionalWrapper>
      <ConditionalWrapper condition={condition}>
        <ContactSection data={data} />
      </ConditionalWrapper>
    </>
  );
};

export default HomeOnepage;
