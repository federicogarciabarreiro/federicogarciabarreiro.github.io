"use client";

import DefaultLayout from "@/layouts/default";
import { useEffect } from "react";
import Image from "next/image";

import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody } from "@nextui-org/card";

import { Education } from "../components/Education";
import { iconType, educationType } from "../types";
import { contactData, educationList, techonologyIconList, whoAmIData } from "../utils";
import aboutAnimation from "../utils/aboutSectionAnimations";
import { Chip } from "@nextui-org/chip";
import IconComponent from "@/components/IconComponent";
import { Snippet } from "@nextui-org/snippet";
import DownloadCVButton from "@/components/downloadCVButton";

const { fullName, profession, whoAmI, quote } = whoAmIData;
const { email } = contactData;



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
        <div className="inline-block max-w-9xl text-center justify-center">
          <div className="grid grid-cols-4 lg:grid-cols-3 gap-5">
            <Card className="col-span-full lg:row-start-2 lg:row-span-2 lg:col-start-2 lg:col-span-1 !bg-opacity-0 shadow-none">
              <CardBody className="flex-col items-center justify-center gap-2 p-6">
                <Avatar
                  name="LM"
                  src="images/sparkle_1.webp"
                  className="w-15 h-15 text-large brightness-90"
                />
                <div className="mt-2" />
                <h1 className="text-2xl font-bold">{fullName}</h1>
                <div className="mt-2" />
                <Snippet size="md" symbol="" variant="bordered">{email}</Snippet>
                <div className="mt-2" />
                <DownloadCVButton/>
              </CardBody>
            </Card>

            <Card className="col-span-full lg:row-start-1 lg:row-span-1 lg:col-span-2 opacity-0 mobile-animation whoAmICard !bg-opacity-90 shadow-none">
              <CardBody className="flex flex-col items-center justify-center gap-2 text-center">
                <div className="text-2xl font-bold">¿Quién soy?</div>
                <div className="mt-5" />
                <div className="text-lg text-black-400">{whoAmI}</div>
              </CardBody>
            </Card>


            <Card className="col-span-full row-start-2 row-end-3 lg:row-start-2 lg:col-start-1 lg:col-span-1 bg-blue opacity-0 mobile-animation professionCard !bg-opacity-0 shadow-none">
              <CardBody className="justify-center items-center">
                <h2 className="text-2xl lg:text-1xl font-bold  text-center">
                  {profession}
                </h2>
              </CardBody>
            </Card>

            <Card className="hidden lg:flex col-span-2 lg:row-start-3 lg:row-span-1 lg:col-start-3 lg:col-span-1 bg-blue opacity-0 mobile-animation quoteCard !bg-opacity-0 shadow-none">
              <CardBody className="justify-center items-center lg:row-start-2 lg:cols-start-4">
                <div className="text-3xl font-bold text-center">
                  &#34;{quote}&#34;
                </div>
              </CardBody>
            </Card>

            <Card className="col-span-full lg:row-start-3 lg:row-span-2 lg:col-start-1 lg:col-span-1 opacity-0 mobile-animation technologyIconList">
              <CardBody className="gap-14 flex flex-col justify-center items-center">
                <h2 className="text-1.5xl font-bold text-center">
                  Tecnologías con las que he trabajado
                </h2>

                <div className="flex flex-wrap justify-center lg:justify-center gap-x-5 gap-y-8">
                  {techonologyIconList.map(({ name, icon }: iconType) => (
                    <div className="flex flex-col justify-center items-center" key={`tecnology-item-${name}`}>
                      <IconComponent icon={icon} key={`icon-item-${name}`} />
                      <div className="mt-1" />
                      <Chip variant="flat">{name}</Chip>
                    </div>
                  ))}
                </div>

                <div className="mt-1" />
              </CardBody>
            </Card>


            {/* vertical img */}
            <div className="hidden lg:block lg:row-start-1 lg:row-span-2 lg:col-start-3  lg:h-[550px] rounded-xl relative opacity-0 mobile-animation verticalImage">
              <Image
                src="images/sparkle_0.webp"
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
                viewBox="-5 0 48 48"
                strokeWidth="2"
                stroke="#232323"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  stroke="none"
                  d="M36.272,36.185l-7.243-12.184l7.243-12.221l3.502,12.221L36.272,36.185z M20.126,34.994l-9.115-8.991	H25.52l7.254,12.153L20.126,34.994z M20.126,12.934l12.611-3.162l-7.254,12.231H10.975L20.126,12.934z M38.653,3.782L22.172,8.061	l-2.455,4.204l-4.947-0.037L2.75,24.001l12.019,11.737l4.948-0.037l2.455,4.204l16.481,4.315l4.426-16.176l-2.478-4.04l2.477-4.047	L38.653,3.782z"
                  fill="#37474f"
                ></path>
              </svg>
              <CardBody className="gap-2 flex-wrap">
                <h2 className="text-2xl font-bold ">Estudios</h2>
                <div className="mt-5" />

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
                <div className="mt-5" />
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
