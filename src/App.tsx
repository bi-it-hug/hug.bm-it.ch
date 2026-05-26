import { PrivacyPolicy } from "@/components/privacy-policy"
import { ThemeSelector } from "@/components/theme-selector"
import { useTheme } from "./components/theme-provider"
import { MailForm } from "./components/mail-form"
import { Toaster } from "@/components/ui/sonner"
import { Button } from "@/components/ui/button"
import Grainient from "@/components/Grainient"
import { Construction } from "lucide-react"
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyTitle,
} from "@/components/ui/empty"

export function App() {
    const { theme } = useTheme()

    return (
        <>
            <Toaster />
            {/* 
            <div className="pointer-events-none absolute inset-0 size-full">
                <LightPillar
                    topColor="#8faea0"
                    bottomColor="#b198b4"
                    intensity={1}
                    rotationSpeed={0.3}
                    glowAmount={0.002}
                    pillarWidth={3}
                    pillarHeight={0.4}
                    noiseIntensity={0.7}
                    pillarRotation={-25}
                    interactive={false}
                    mixBlendMode="screen"
                    quality="high"
                />
            </div> */}

            <div className="pointer-events-none absolute inset-0 -z-1 size-full">
                <Grainient
                    color1="#67787c"
                    color2={theme === "dark" ? "#171717" : "#ffffff"}
                    color3="#79697b"
                    timeSpeed={0.25}
                    colorBalance={0}
                    warpStrength={1}
                    warpFrequency={5}
                    warpSpeed={2}
                    warpAmplitude={50}
                    blendAngle={0}
                    blendSoftness={0.05}
                    rotationAmount={500}
                    noiseScale={2}
                    grainAmount={0.1}
                    grainScale={2}
                    grainAnimated={false}
                    contrast={1}
                    gamma={theme === "dark" ? 0.4 : 2}
                    saturation={1}
                    centerX={0}
                    centerY={0}
                    zoom={0.9}
                />
            </div>

            <header className="flex p-4">
                <ThemeSelector />
            </header>
            <main className="flex h-full min-w-max flex-col items-center justify-center gap-2 px-4">
                <Empty className="max-w-xs p-0 sm:max-w-lg">
                    <EmptyHeader>
                        <Construction
                            size={128}
                            strokeWidth={1}
                            className="opacity-25"
                        />

                        <EmptyTitle className="text-4xl">
                            Work in Progress
                        </EmptyTitle>
                        <EmptyDescription>
                            This site's getting worked on. Meanwhile, you can
                            check out my stuff on the Links below.
                        </EmptyDescription>
                        <EmptyContent>
                            <Button variant="default" size="icon-sm" asChild>
                                <a href="https://github.com/bi-it-hug">
                                    <img
                                        src={
                                            theme === "dark"
                                                ? "/GitHub_Invertocat_Black.svg"
                                                : "/GitHub_Invertocat_White.svg"
                                        }
                                        alt="GitHub Invertocat"
                                        className="p-1"
                                    />
                                </a>
                            </Button>
                        </EmptyContent>
                    </EmptyHeader>
                </Empty>
            </main>
            <footer className="flex items-center justify-center p-4">
                <PrivacyPolicy />
                <MailForm buttonText="Contact me" />
            </footer>
        </>
    )
}
