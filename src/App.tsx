import { useEffect, useState, useRef } from "react";
import { Coaster } from "@models/coaster";
import { Fade } from "@components/Fade";

function App() {
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [waitingtimes, setWaitingtimes] = useState([]);

    const parentElement = useRef<HTMLElement>(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch("/api/waitingtimes", {
                    method: "GET",
                    headers: {
                        park: "30816cc0-aedb-4bfc-a180-b269a3a2f31d",
                        language: "de",
                    },
                });

                if (response.status === 429) {
                    setError(true)
                    setErrorMessage(`Error ${response.status}: ${response.statusText}`)

                } else {
                    const result = await response.json();

                    // const nameDescending = (a: Coaster, b: Coaster) => a.name.localeCompare(b.name)
                    const waitingtimeDescending = (a: Coaster, b: Coaster) => b.waitingtime - a.waitingtime
                    setWaitingtimes(result.sort(waitingtimeDescending));
                }


            } catch (error) {
                setError(true)
                console.error(error);
            }
        };

        getData();
        const interval = setInterval(getData, 10_000);
        return () => clearInterval(interval);
    }, []);

    if (error) {
        return <div className="text-red-500 px-4 py-3 bg-red-950/40 rounded-lg border-(length:--width-border) border-red-950">{errorMessage}</div>

    } else {
        return (
            <>
                <main ref={parentElement} className="flex size-full flex-1 flex-col items-center justify-center gap-5 p-5">
                    <Fade parentElement={parentElement} />
                    <ul className="text-neutral-50 text-md text-center flex size-full flex-col gap-0">
                        {waitingtimes.map((coaster: Coaster) => {
                            let color;

                            if (coaster.waitingtime > 60) {
                                color = "bg-red-500/30";

                            } else if (coaster.waitingtime > 30) {
                                color = "bg-orange-400/30";

                            } else {
                                color = "bg-green-400/20";
                            }

                            return (
                                <li key={coaster.uuid} className="flex items-center gap-3 border-b-(length:--width-border) first:pt-0 last:pb-0 last:border-0 border-white/10 py-2">
                                    <div className={`size-10 flex justify-center items-center ${color} border-(length:--width-border) border-white/10 rounded-lg`}>
                                        <span className="font-semibold text-white/75">{coaster.waitingtime}</span>
                                    </div>
                                    <span className="text-neutral-400 capitalize">{coaster.name}</span>
                                </li>
                            );
                        })}
                    </ul>
                </main>

                <footer className="sticky bottom-0 flex gap-5 p-5 z-40">
                    <button className="flex h-fit rounded-full border-(length:--width-border) border-white/10 bg-neutral-950 shadow-[0_0_10px_0px] shadow-black">
                        <a href="https://www.wartezeiten.app/" className="size-full px-3 py-2 text-xs leading-none font-semibold text-neutral-400">API-Dokumentation</a>
                    </button>
                </footer>
            </>
        );
    }
}

export default App;
