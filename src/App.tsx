import { PrivacyPolicy } from "@/components/privacy-policy"
import { ThemeSelector } from "@/components/theme-selector"
import { InlineLink } from "./components/inline-link"

export function App() {
    return (
        <>
            <header className="flex p-4">
                <ThemeSelector />
            </header>
            <main className="flex h-full min-w-max flex-col items-center justify-center px-4">
                <div className="w-xs text-center text-pretty sm:w-sm">
                    <h1 className="text-3xl font-semibold sm:text-4xl">
                        Work in Progress
                    </h1>
                    <p className="mt-2 w-full text-sm leading-normal text-muted-foreground sm:mt-3 sm:text-base sm:leading-6">
                        This site's getting worked on. Meanwhile, you can check
                        out my stuff on
                        <InlineLink
                            href="https://github.com/bi-it-hug"
                            className="sm:text-base"
                        >
                            GitHub
                        </InlineLink>
                        .
                    </p>
                </div>
            </main>
            <footer className="flex items-center justify-center p-4">
                <PrivacyPolicy />
            </footer>
        </>
    )
}
