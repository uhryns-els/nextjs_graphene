import type {Metadata} from 'next'

import HomePageUI from "@/app/ui/homepage/homePageUI";


// this part of code allow you to have different <head> content
export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Home Page',
}

export default function Page() {
  return (
      <main>
        <HomePageUI/>
      </main>
  );
}
