"use client"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const goToLanding = true // questa variabile verrà inizializzata da un database in true in caso sia stato scelto "dove vorrei investire in /landing"
   
  useEffect(() => {
    goToLanding ? router.push("/landing") : pass;
  },[])

  if (goToLanding){
    return(<div>loading...</div>)
  }else {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>this is the homepage</p>
      </main>
    )
  }
}
