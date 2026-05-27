import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export function ThemeIconButton({
    href,
    src,
    alt,
}: {
    href: string
    src: {
        dark: string
        light: string
    }
    alt: string
}) {
    const { resolvedTheme } = useTheme()

    return (
        <>
            <Button variant="default" size="icon-sm" asChild>
                <a href={href}>
                    <img
                        src={resolvedTheme === "dark" ? src.dark : src.light}
                        alt={alt}
                        className="p-0.75"
                    />
                </a>
            </Button>
        </>
    )
}
