"use client"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProjectGallery from "@/app/Library/ProjectShowcase/ProjectGallery";
import LandingPage from "@/app/components/LandingPage";


export default function Home() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<ProjectGallery />} />
              <Route path="/projectShowcase" element={<ProjectGallery />} />
          </Routes>
      </BrowserRouter>
  );
}
