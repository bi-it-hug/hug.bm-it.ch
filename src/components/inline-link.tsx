import { Button } from "@/components/ui/button"

export function InlineLink({
    href,
    className,
    children,
}: {
    href: string
    className?: string
    children: React.ReactNode
}) {
    return (
        <>
            {" "}
            <Button
                variant="link"
                size="sm"
                className={`h-fit px-0 text-sm transition-[colors,opacity,shadow,transform] ${className}`}
                asChild
            >
                <a href={href}>{children}</a>
            </Button>
        </>
    )
}
