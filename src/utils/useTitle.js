import { useEffect } from "react"

export function useTitle(title) {
    useEffect(() => {
        const prevTitle = document.title
        document.title = `${title} | Movies`
        return () => {
            document.title = prevTitle
        }
    })
}

export default useTitle