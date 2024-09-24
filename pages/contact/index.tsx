"use client";
import DefaultLayout from "@/layouts/default";
import { useEffect } from "react";
import Link from "next/link";

import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";

import { contactData } from "../../utils"
import { Form } from "../../components/Form";
import { MailSVG, GithubSVG, LinkedInSVG } from "../../components/ui/icons";
import contactAnimation from "../../utils/contactSectionAnimations";

export default function ContactPage() {

  const { email, github, linkedIn } = contactData;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    if (!mq.matches) return contactAnimation.mobileAnimation();

    contactAnimation.emailAnimation();
    contactAnimation.githubAnimation();
    contactAnimation.linkedInAnimation();
    contactAnimation.formAnimation();
  }, []);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-7xl text-center justify-center">

          <section className="p-4 pb-12 max-w-6xl m-auto overflow-hidden 2xl:overflow-visible">
            <div className="grid grid-rows-2 grid-cols-2 gap-5 max-w-2xl mx-auto">
              <Card className="col-span-full lg:row-start-1 lg:row-span-1 lg:col-span-1 opacity-0 mobile-animation emailCard">
                <CardBody className="flex flex-row justify-center items-center gap-2">
                  <Button
                   
                    startContent={<MailSVG />}
                  >
                    {email}
                  </Button>
                </CardBody>
              </Card>

              <Card
                isHoverable
                className="col-span-full lg:row-start-2 lg:row-span-1 lg:col-span-1 cursor-pointer opacity-0 mobile-animation linkedInCard"
              >
                <Link
                  href={linkedIn}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="min-h-full flex justify-center items-center"
                >
                  <CardBody
                    className="flex justify-center items-center"
                    onClick={() => window.open(`${linkedIn}`, "_blank")}
                  >

                    <LinkedInSVG />
                  </CardBody>
                </Link>
              </Card>

              <Card
                isHoverable
                className="col-span-full lg:row-start-1 lg:row-span-2 lg:col-start-2 cursor-pointer opacity-0 mobile-animation githubCard "
              >
                <Link
                  href={github}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="min-h-full flex justify-center items-center"
                >
                  <CardBody className="flex justify-center items-center gap-2">
                    <GithubSVG />
                    <h1 className="text-1xl font-bold">@federicogarciabarreiro</h1>
                    <p className="text-0.5xl font-bold text-center">
                      Aqui puedes encontrar todos mis repositorios...
                    </p>
                  </CardBody>
                </Link>
              </Card>

              <div className="col-span-full mt-8 opacity-0 mobile-animation form">
                <Form />
              </div>
            </div>
          </section>

        </div>
      </section>
    </DefaultLayout>
  );
}