import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-10">
            <Image
                src="/photo.jpg"
                width="300"
                height="50"
                alt="Abu Sayeed Photo"
                className="rounded-xl"
            />
            <span className="text-2xl text-center p-3 uppercase">
                Md Abu Sayeed Mondal, Founder everylearning.org
            </span>
            <p>
                <span>
                    Software Engineer, Github: sayeedkhalshi, Twitter / x :
                    sayeedkhalshi,
                </span>
            </p>

            <h1 className="text-4xl relative flex place-items-cent my-3">
                NestJS, NextJS, TypeScript, Rust, Go, Solidity
            </h1>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
                <a
                    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-xl font-semibold opacity-80`}>
                        Rustin -
                        <span className="text-m opacity-70 font-normal inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            vevent.io, westcoastnft.com, posterity.io
                        </span>
                    </h2>
                    <q className={`m-0 max-w-[30ch] text-m opacity-90`}>
                        Went above and beyond and adapted to the changing
                        project features as we learned the correct product to
                        build and expanded the feature-set. If he is not an
                        expert on a topic, he spends time to learn as much as he
                        need to complete the project effectively. Also, he
                        adapted to my availability across timezones, which made
                        it much easier to stay in contact.
                    </q>
                </a>

                <a
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-xl font-semibold opacity-80`}>
                        Alexandre Gonzales -
                        <span className="text-m font-normal opacity-70 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            Founder - qoddi.com
                        </span>
                    </h2>
                    <q className={`m-0 max-w-[30ch] text-m opacity-90`}>
                        Great freelancer to work with, easy to communicate with,
                        and delivers good quality work on time every time. Will
                        definitely hire him again soon!!
                    </q>
                </a>
            </div>
            <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left"'>
                <h2 className="text-xl p-3 mt-5">
                    Aim to reach for everylearning.org (
                    <small>
                        ongoing research and product design for a suitable
                        decentralized learning system for all
                    </small>
                    )
                </h2>
                <small>
                    https://github.com/sayeedkhalshi/everylearning.org
                </small>
                <ol className="list-decimal list-inside">
                    <li className="underline my-2 p-2">
                        Document each learning - each hypothesis from each
                        perspective. Where hypothesises do not have to be
                        proved. Every expression is already because someone had
                        felt it. Maybe from a distorted sense but still they
                        faced it. We need to know what certain perspective has
                        to say for a certain situation.
                    </li>
                    <li className="underline my-2 p-2">
                        Name each learning - each hypothesis. Naming or terming
                        a perspective makes us name the feelings and we can
                        communicate our feelings using those names
                    </li>
                    <li className="underline my-2 p-2">
                        Understand each perspective by understanding how they
                        are built
                    </li>
                    <li className="underline my-2 p-2">
                        Describe each perspective from every other perspective
                    </li>
                    <li className="underline my-2 p-2">
                        Describe each terms from every other terms
                    </li>
                    <li className="underline my-2 p-2">
                        Every gets to share everything
                    </li>
                    <li className="underline my-2 p-2">
                        P2P debate and moderation to resolve conflicting
                        expression, manipulation, lies and propagandas.
                    </li>
                    <li className="underline my-2 p-2">
                        Documentation of learning each topics by a learner
                    </li>
                    <li className="underline my-2 p-2">
                        Reviewing each others learning, reviewing reviews too
                    </li>
                    <li className="underline my-2 p-2">
                        Categorize learners by their learning and working
                        ability
                    </li>
                    <li className="underline my-2 p-2">
                        Developing projects and gathering teams to build a
                        project
                    </li>
                    <li className="underline my-2 p-2">
                        Funding oppurtunity for each projects
                    </li>
                    <li className="underline my-2 p-2">
                        Project and team management
                    </li>
                    <li className="underline my-2 p-2">
                        Earning for each task done. Each learning, review,
                        comment, project etc
                    </li>
                    <li className="underline my-2 p-2">
                        Award for each category. Anyone can create an award and
                        ask for funding. Automate the system for winner
                    </li>
                </ol>
            </div>
        </main>
    );
}
