import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";

export function Home() {


    return (
        <>
            <Header />

            <h1 className="text-center text-zinc-100 text-lg font-medium mt-4">O maior laboratório de exames sanguíneos da região.</h1>

            <Carousel />

            <div className="m-auto max-w-[800px] indent-3 mt-10">
                <h2 className="font-semibold text-[17px] text-zinc-100 indent-0">Quem somos nós?</h2>

                <div className="space-y-1 mt-2">
                    <p className="text-zinc-200">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                    <p className="text-zinc-200">pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.</p>
                    <p className="text-zinc-200">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.</p>
                </div>
            </div>

            <div className="m-auto max-w-[800px] indent-3 mt-10">
                <h2 className="font-semibold text-[17px] text-zinc-100 indent-0">Qual nosso objetivo?</h2>

                <div className="space-y-1 mt-2">
                    <p className="text-zinc-200">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                    <p className="text-zinc-200">pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.</p>
                    <p className="text-zinc-200">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.</p>
                </div>
            </div>
        </>
    )
}