import { Header } from "../components/Header"
import img_1 from '../assets/img_1.jpg'
import img_2 from '../assets/img_1.jpg'
import { CampaignItem } from "../components/CampaignItem"

export function Campaign() {
    return (
        <>
            <Header />
            <div className="flex flex-col gap-12 [&>*:nth-child(even)]:flex-row-reverse   ">
                <CampaignItem
                    image={img_1}
                    title="Teste do HIV"
                    text={
                        <>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                            <p>PariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.Duis aute irure dolor in reprehenderit.</p>
                        </>
                    }
                />

                <CampaignItem
                    image={img_2}
                    title="Campanha da Felicidade"
                    text={
                        <>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                            <p>PariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.Duis aute irure dolor in reprehenderit.</p>
                        </>
                    }
                />

                <CampaignItem
                    image={img_2}
                    title="Campanha da Felicidade"
                    text={
                        <>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                            <p>PariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.Duis aute irure dolor in reprehenderit.</p>
                        </>
                    }
                />

                <CampaignItem
                    image={img_2}
                    title="Campanha da Felicidade"
                    text={
                        <>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                            <p>PariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.Duis aute irure dolor in reprehenderit.</p>
                        </>
                    }
                />
            </div>
        </>
    )
}