import { ClerkProvider, useAuth } from "@clerk/clerk-expo"
import { router, Slot } from "expo-router"
import { useEffect } from "react"


const PUBLIC_CLERK_PUBLISHABLE_KEY = "pk_test_aGFybWxlc3MtYWlyZWRhbGUtNDcuY2xlcmsuYWNjb3VudHMuZGV2JA"

function InitialLayout() {
    const { isSignedIn, isLoaded } = useAuth()

    

    useEffect(() => {
        if(!isLoaded) return
        if(isSignedIn) {
            router.replace("(auth)")
        } else {
            router.replace("(public)")
        }
    }, [isSignedIn])


    return <Slot/>
}

export default function Layout() {
    return (
        <ClerkProvider publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}>
            <InitialLayout />
        </ClerkProvider>
    )
}