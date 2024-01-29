import type {Metadata} from 'next'

import ProfilePageUI from "@/app/ui/profilePage/profilePageUI";

// this part of code allow you to have different <head> content
export const metadata: Metadata = {
    title: 'Profile Page',
    description: 'Welcome to Profile Page',
}

export default function Page() {
    return (
        <main>
            <ProfilePageUI/>
        </main>
    );
}
