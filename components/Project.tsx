"use client";
import { useEffect } from "react";
import Link from "next/link";

import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

import { TechnologyType, ProjectType } from "../types";
import { GithubSVG, LinkSVG } from "./ui/icons";
import ProjectsSectionAnimations from "../utils/ProjectsSectionAnimations";

export const Project = (project: ProjectType) => {
  const {
    description,
    title,
    icon,
    imgUrl,
    videoUrl,
    technologies,
    githubUrl,
    websiteUrl,
  } = project;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    if (!mq.matches) return ProjectsSectionAnimations.mobileAnimation();

    ProjectsSectionAnimations.titleAnimation();
    ProjectsSectionAnimations.videoAnimation();
    ProjectsSectionAnimations.descriptionAnimation();
    ProjectsSectionAnimations.websiteUrlAnimation();
    ProjectsSectionAnimations.githubUrlAnimation();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5 pb-4 overflow-hidden">
      <div className="flex lg:hidden items-center col-span-full lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-5 text-3xl font-bold opacity-0 mobile-animation titleSection">
        <span className="bg-[#303036] p-1 rounded-md mr-2"> {icon}</span>
        {title}
      </div>

      <div className="col-span-full lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-3 opacity-0 mobile-animation videoSection">
        <video
          className="rounded-xl  border-4 border-[#FFFFFF]"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          autoPlay
          loop
          playsInline
          poster={imgUrl}
          src={videoUrl}
        ></video>
      </div>

      <Card className="col-span-full lg:row-start-1 lg:row-end-3 lg:col-start-3 lg:col-end-5 lg:min-h-[250px] opacity-0 mobile-animation descriptionCard !bg-opacity-75 shadow-none">
        <CardBody className="text-lg flex justify-between gap-4">
          <div className="hidden lg:flex col-span-full lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-5 text-3xl font-bold text-black-400 opacity-0 mobile-animation titleSection">
            <span className="bg-[#303036] p-2 rounded-md mr-2"> {icon}</span>{" "}
            <h2 className="font-bold text-3xl text-center">
              {title}
            </h2>
          </div>
          {description}
          <div className=" flex flex-wrap gap-2">
            {technologies.map(
              ({ name, icon }: TechnologyType, index: number) => (
                <Chip
                  key={`technology-item-${index}`}
                  size="sm"
                >
                  <span className="flex items-center gap-2">
                    {icon}
                    {name}
                  </span>
                </Chip>
              )
            )}
          </div>
        </CardBody>
      </Card>

      <Card
        isHoverable
        className={`${websiteUrl === "NONE" && "hidden"
          } col-span-2 lg:row-start-3 lg:row-end-4 lg:col-start-3 lg:max-h-24 lg:col-end-4 opacity-0 mobile-animation githubUrlCard !bg-opacity-75 shadow-none ${!websiteUrl ? 'pointer-events-none' : ''}`}
      >
        <Link
          href={websiteUrl || "#"}
          rel="noopener noreferrer"
          target="_blank"
          className={`min-h-full flex justify-center items-center ${!websiteUrl ? 'pointer-events-none opacity-50' : ''}`}
        >
          <CardBody className="justify-center items-center">
            {websiteUrl ? <LinkSVG /> : <h2 className="font-bold text-xl text-center">En producción...</h2>}
          </CardBody>
        </Link>
      </Card>

      <Card
        isHoverable
        className={`${githubUrl === "NONE"
          ? "lg:col-start-3 col-span-4"
          : "lg:col-start-4 col-span-2"
          }  lg:row-start-3 lg:row-end-4 lg:max-h-24 lg:col-end-5 opacity-0 mobile-animation websiteUrlCard !bg-opacity-75 shadow-none ${!githubUrl ? 'pointer-events-none' : ''}`}
      >
        <Link
          href={githubUrl}
          rel="noopener noreferrer"
          target="_blank"
          className={`min-h-full flex justify-center items-center ${!githubUrl ? 'pointer-events-none opacity-50' : ''}`}
        >
          <CardBody className="justify-center items-center">
          {githubUrl ? <GithubSVG /> : <h2 className="font-bold text-xl text-center">Privado.</h2>}
          </CardBody>
        </Link>
      </Card>
    </div>
  );
};
