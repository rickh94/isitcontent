import Link from "next/link";
import { Footer } from "../components";
import Image from "next/image";

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
              Proprietary Algorithm
            </h2>
          </div>
          <p className="text-left text-base">
            Not happy with the black box huh? Fine, but you’ll be disappointed!
          </p>
          <Image
            className="m-4 rounded-xl border-2 border-violet-500 shadow-xl shadow-violet-950"
            src="/algorithm.png"
            alt="It’s just a random number generator."
            width={902}
            height={246}
          />
          <p className="text-left text-base">
            It’s a random number generator. I also dumped your idea into ChatGPT
            and told it whether the RNG said it was good or bad, and had it
            explain why. It’s perfectly happy to roast Mr. Beast video ideas as
            bad content because I told it they were bad. Kinda proves my point.
            To be fair, Vercel’s AI toolkit is pretty nice if you’re using
            NextJS.
          </p>
          <p className="text-left text-base">
            If it’s not clear by now (how many times did I put RNG in capital
            purple letters?), this site is{" "}
            <em className="italic text-violet-400">satire.</em> Just poking some
            fun at algorithms and artificial intelligence.
          </p>
          <p className="mt-2 text-left text-base font-medium text-violet-300">
            The truth is, you’re so much better than the stupid AI and
            algorithms. Go out and make cool stuff that you’re excited about and
            stop worrying about what the computers think.
          </p>
          <p className="mt-2 text-left text-base">
            Hope you had a laugh at the concept or some of the jokes, see you on
            the internet.
          </p>
          <p className="-mt-4 ml-4 text-left">- Rick</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
