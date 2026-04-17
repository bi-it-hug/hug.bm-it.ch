import { Button } from "@/components/ui/button"
import { ThemeSelector } from "@/components/theme-selector"
import { PrivacyPolicyDialog } from "@/components/privacy-policy-dialog"

export default function App() {
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
                        out my stuff on{" "}
                        <Button
                            variant="link"
                            size="sm"
                            className="h-fit px-0 text-sm sm:text-base"
                            asChild
                        >
                            <a href="https://github.com/bi-it-hug">GitHub</a>
                        </Button>
                        .
                    </p>
                </div>
            </main>
            <footer className="flex items-center justify-center p-4">
                <PrivacyPolicyDialog />
            </footer>
        </>
    )
}
