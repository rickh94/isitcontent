import Link from "next/link";
import { Footer, Form } from "./components";

export default function HomePage() {
  return (
    <>
      <main className="container flex-1">
        <header className="flex justify-center border-b-2 border-white px-8 pb-8 pt-12 ">
          <h1 className="text-center text-6xl font-extrabold">
            Is It Content?
          </h1>
        </header>
        <section id="intro" className="flex flex-col gap-10 px-8 py-10">
          <p className="text-center text-xl">
            In a world filled with content, will your idea make it? Like, it’s
            good, but is it{" "}
            <em className="text-3xl font-medium italic text-violet-300">
              Content?
            </em>
          </p>
          <div className="mx-auto h-2 w-3/5 border-t-2 border-violet-500"></div>
          <p className="text-left text-base">
            <strong className="font-bold text-violet-500">Good News!</strong>{" "}
            Using Rick’s Next Generation{" "}
            <span className="text-violet-500">(RNG)</span> content-evaluation
            algorithm, we can differentiate content from non-content with ease.
            Don’t bother with making your own content strategy, let a computer
            do it for you!{" "}
            <Link
              href="/about"
              className="whitespace-nowrap text-violet-500 underline hover:text-violet-300"
            >
              Learn More
            </Link>
          </p>
          <div className="mx-auto h-2 w-3/5 border-t-2 border-violet-500"></div>
        </section>
        <Form />
      </main>

      <Footer />
    </>
  );
}
