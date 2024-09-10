import { ProjectList } from "../../utils";
import { ProjectType } from "../../types";
import { Project } from "../../components/Project"
import DefaultLayout from "@/layouts/default";

export default function Projects() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-7xl text-center justify-center">
          <section className="p-4 pb-12 max-w-6xl m-auto overflow-hidden 2xl:overflow-visible">
            <div className="flex flex-col gap-20">
              {ProjectList.map((project: ProjectType) => (
                <Project
                  key={`project-item-${project.title}`}
                  {...project}
                />
              ))}
            </div>
          </section>
        </div>
      </section>
    </DefaultLayout>
  );
}
