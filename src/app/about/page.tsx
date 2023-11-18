import Link from "next/link";
import { Footer } from "../components";

export default function Page() {
  return (
    <>
      <main className="container">
        <header className="flex justify-center border-b-2 border-white px-8 pb-8 pt-12 ">
          <h1 className="text-center text-6xl font-extrabold">
            Is It Content?
          </h1>
        </header>
        <section
          id="intro"
          className="flex flex-col gap-10 px-8 py-10 sm:mx-auto sm:max-w-4xl"
        >
          <div className="flex justify-center">
            <h2 className="border-b-2 border-violet-500 px-6 py-4 text-center text-4xl">
              About
            </h2>
          </div>
          <p className="text-left text-base">
            We live in the age of algorithms, so why not turn your
            decision-making over to an algorithm as well? It’s very difficult to
            know ahead of time whether your content idea is good, and actually
            thinking and doing it is hard! Rather than actually finding out and
            asking people, turn your brain over to our proprietary
            state-of-the-art content evaluation algorithm and save yourself from
            that pesky thinking!
          </p>
          <p className="text-left text-base">
            Rick’s Next Generation{" "}
            <span className="font-bold text-violet-500">(RNG)</span>{" "}
            content-evaluation algorithm, like any great tech-bro algorithm, is
            a total black box and you’ll just need to trust me that it works.
            But that’s the fun right? Just hand your data and decision making
            over top some random website, but everybody’s doing it so it’s fine.
            Just enjoy the Wall-E future.{" "}
            <Link
              href="/"
              className="text-violet-500 underline hover:text-violet-300"
            >
              So back to it!
            </Link>
          </p>
          <p className="mt-24">
            Not convinced?{" "}
            <Link
              href="/behind-the-curtain"
              className="text-violet-500 underline hover:text-violet-300"
            >
              Peek behind the curtain
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
