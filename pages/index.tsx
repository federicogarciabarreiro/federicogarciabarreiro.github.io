"use client";

import DefaultLayout from "@/layouts/default";
import { useEffect } from "react";
import Image from "next/image";

import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Tooltip } from "@nextui-org/tooltip";

import { Education } from "../components/Education";
import { iconType, educationType } from "../types";
import { educationList, techonologyIconList, whoAmIData } from "../utils";
import aboutAnimation from "../utils/aboutSectionAnimations";
import { Chip } from "@nextui-org/chip";
import IconComponent from "@/components/IconComponent";

const { fullName, profession, whoAmI, quote } = whoAmIData;

export default function About() {
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");

    if (mq.matches) {
      aboutAnimation.whoAmIAnimation();
      aboutAnimation.professionAnimation();
      aboutAnimation.quoteAnimation();
      aboutAnimation.techonologyIconListAnimation();
      aboutAnimation.verticalImageAnimation();
      aboutAnimation.educationContentAnimation();
    } else {
      aboutAnimation.mobileAnimation();
    }
  }, []);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-7xl text-center justify-center">
          <div className="grid grid-cols-4 lg:grid-cols-3 gap-5">
            <Card className="col-span-full lg:row-start-2 lg:row-span-2 lg:col-start-2 lg:col-span-1 !bg-opacity-75 shadow-none">
              <CardBody className="flex-col items-center justify-center gap-2">
                <Avatar
                  name="LM"
                  src="/me.jpeg"
                  className="w-24 h-24 text-large brightness-90"
                />
                <h1 className="text-3xl font-bold">{fullName}</h1>
              </CardBody>
            </Card>

            <Card className="col-span-full lg:row-start-1 lg:row-span-1 lg:col-span-2 opacity-0 mobile-animation whoAmICard !bg-opacity-90 shadow-none">
              <CardBody className="gap-2">
                <div className="text-3xl font-bold">¿Quien soy?</div>
                <div className="text-lg text-gray-400">{whoAmI} </div>
              </CardBody>
            </Card>

            <Card className="col-span-full row-start-2 row-end-3 lg:row-start-2 lg:col-start-1 lg:col-span-1 bg-blue opacity-0 mobile-animation professionCard !bg-opacity-90 shadow-none">
              <CardBody className="justify-center items-center">
                <h2 className="text-2xl lg:text-3xl font-bold  text-center">
                  {profession}
                </h2>
              </CardBody>
            </Card>

            <Card className="hidden lg:flex col-span-2 lg:row-start-3 lg:row-span-1 lg:col-start-3 lg:col-span-1 bg-blue opacity-0 mobile-animation quoteCard !bg-opacity-90 shadow-none">
              <CardBody className="justify-center items-center lg:row-start-2 lg:cols-start-4">
                <div className="text-3xl font-bold text-center">
                  &#34;{quote}&#34;
                </div>
              </CardBody>
            </Card>

            <Card className="col-span-full lg:row-start-3 lg:row-span-2 lg:col-start-1 lg:col-span-1 opacity-0 mobile-animation technologyIconList">
              <CardBody className="gap-4">
                <h2 className="text-3xl font-bold">
                  Tecnologias con las que he trabajado
                </h2>

                <div className="flex flex-wrap justify-center lg:justify-center gap-x-10 gap-y-6">
                  {techonologyIconList.map(({ name, icon }: iconType) => (
                    <Tooltip
                      key={`technology-item-${name}`}
                      content={name}
                    >
                      <div>
                      <IconComponent icon={icon} />
                      <Chip variant="flat">{name}</Chip>
                      </div>
                    </Tooltip>
                  ))}
                </div>
              </CardBody>
            </Card>

            {/* vertical img */}
            <div className="hidden lg:block lg:row-start-1 lg:row-span-2 lg:col-start-3  lg:h-[350px] rounded-xl relative opacity-0 mobile-animation verticalImage">
              <Image
                src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?q=80&w=1576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                priority={true}
                alt="profile image"
                fill
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />
            </div>

            <Card className="col-span-full lg:row-start-4 lg:row-span-1 lg:col-start-2 lg:col-span-2 opacity-0 mobile-animation educationContent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hidden lg:block icon icon-tabler icon-tabler-timeline absolute top-0 -right-7"
                width="200"
                height="200"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#232323"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                ></path>
                <path d="M4 16l6 -7l5 5l5 -6"></path>
                <path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                <path d="M10 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                <path d="M4 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                <path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              </svg>
              <CardBody className="gap-2 flex-wrap">
                <h2 className="text-3xl font-bold ">Estudios</h2>

                <div className="flex flex-col lg:flex-col gap-2">
                  {educationList.map((education: educationType) => (
                    <Education
                      key={`education-item-${education.career}`}
                      career={education.career}
                      years={education.years}
                      description={education.description}
                    />
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
