import { IonIcon } from "@ionic/react"

function App() {
    return (
        <a href="https://github.com/bi-it-hug" className="flex justify-center items-center gap-2 text-base font-mono text-neutral-100 bg-neutral-800 hover:bg-neutral-700 rounded-full py-2 pl-2 pr-3">
            <IonIcon name="logo-github" className="text-3xl" />
            <p className="font-mono">bi-it-hug</p>
        </a>
    )
}

export default App
