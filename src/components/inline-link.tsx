import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

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
                className={cn(
                    "h-fit px-0 text-xs transition-[colors,opacity,shadow,transform]",
                    className
                )}
                asChild
            >
                <a href={href}>{children}</a>
            </Button>
            {/* <a
                href={href}
                className={cn(
                    buttonVariants({
                        variant: "link",
                        size: "sm",
                    }),
                    "h-fit px-0 text-sm transition-[colors,opacity,shadow,transform]",
                    className
                )}
            >
                {children}
            </a> */}
        </>
    )
}
