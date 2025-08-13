import { useEffect, useState, type RefObject } from "react";

type Props = {
    parentElement?: RefObject<HTMLElement | null>;
}

export function Fade({ parentElement }: Props) {

    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {

        function handleScroll() {
            setScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)

    }, [parentElement])

    return (
        <>
            <div className={`${scrollY > 25 ? "opacity-100" : "opacity-0"} duration-700 pointer-events-none fixed top-0 left-0 z-10 h-2/10 w-full bg-black/75 mask-(--mask-overflow-top) backdrop-blur-sm`}>{scrollY}</div >
            <div className={`${window.innerHeight + window.scrollY >= document.body.offsetHeight ? "opacity-0" : "opacity-100"} duration-700 pointer-events-none fixed bottom-0 left-0 z-10 h-2/10 w-full bg-black/75 mask-(--mask-overflow-bottom) backdrop-blur-sm`}></div >
        </>
    );
}
