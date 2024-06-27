import projectImage from "../../images/projects.png";
import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function ProjectShowcase() {

    return (
        <Link href={"/csProjects"}>
            <Card >
                <CardContent className={"mt-6"}>
                    <Image src={projectImage} alt="Project Showcase" width={1000} height={500} className={"rounded-xl"}/>
                    <div className={"mt-4"}>
                        <h1 className="font-semibold">Project Showcase</h1>
                        <p className="text-gray-400">By Oliver LaRose</p>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
