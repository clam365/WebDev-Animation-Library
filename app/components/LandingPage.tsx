import {Fade} from "react-awesome-reveal";
import ProjectShowcase from "@/app/components/LibraryContent/projectShowcase";

export default function LandingPage() {
    return (
        <div className={"page"}>
            <Fade>
                <nav className={" flex justify-center p-10"}>
                    <h1 className={"text-2xl text-center"}>
                        Framer Motion & GSAP Elements Library
                    </h1>
                </nav>

                {/* Page Content */}
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <ProjectShowcase/>
                    </div>
                </div>
            </Fade>

        </div>
    );
}