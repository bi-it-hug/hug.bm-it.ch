import App from "./App.tsx"
import { createRoot } from "react-dom/client"
import "./index.css"
import { StrictMode } from "react"
import { ThemeProvider } from "@/components/theme-provider"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="system">
            <App />
        </ThemeProvider>
    </StrictMode>
)
