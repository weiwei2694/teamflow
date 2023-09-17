"use client";
import { Menu } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { routes } from "@/constants"
import { Button } from "../ui/button"
import { useEffect, useState } from "react";

const MobileNavbar = () => {
    const [isMutation, setIsMutation] = useState(false);

    useEffect(() => {
        setIsMutation(true)
    }, [])

    if (!isMutation) return null;

  return (
    <Sheet>
        <SheetTrigger>
            <Button variant="ghost" size="icon">
                <Menu size="30" className="text-light-100" />
            </Button>
        </SheetTrigger>
        <SheetContent side="top">
            <ul className="p-3 flex flex-col gap-y-3">
                {routes.map(route => (
                    <li
                        key={route.title}
                        className="tracking-wide font-medium text-2xl text-dark-400"
                    >
                        {route.title}
                    </li>
                ))}
                <div className="flex gap-x-4">
                    <Button>Login</Button>
                    <Button>Sign Up</Button>
                </div>
            </ul>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNavbar