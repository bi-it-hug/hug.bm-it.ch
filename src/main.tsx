import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import { App } from "@/App.tsx"
import "@/index.css"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="system">
            <TooltipProvider>
                <App />
            </TooltipProvider>
        </ThemeProvider>
    </StrictMode>
)
