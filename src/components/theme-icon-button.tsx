import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ThemeIconButton({
    href,
    src,
    alt,
    children,
}: {
    href: string
    src: {
        dark: string
        light: string
    }
    alt: string
    children?: React.ReactNode
}) {
    const { resolvedTheme } = useTheme()

    return (
        <>
            <Button
                variant="default"
                size={children ? "sm" : "icon-sm"}
                asChild
            >
                <a href={href}>
                    <img
                        src={resolvedTheme === "dark" ? src.dark : src.light}
                        alt={alt}
                        className={cn(
                            children ? "size-3.5" : "size-4",
                            "pointer-events-none"
                        )}
                        data-icon="inline-start"
                    />
                    {children}
                </a>
            </Button>
        </>
    )
}
