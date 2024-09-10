import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import About from "@/_components/about/page";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Sobre mi</h1>
          <About></About>
        </div>
      </section>
    </DefaultLayout>
  );
}
