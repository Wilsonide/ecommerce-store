"use client"

import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"
import { LoginForm } from "./LoginForm"

interface loginButtonProps{
    children : React.ReactNode,
    mode? : 'modal'|'redirect',
    asChild? : boolean
}

export const LoginButton = ({
    children
    ,mode = 'redirect'
    ,asChild}:loginButtonProps)=>{
        const router = useRouter()
        const onClick = () => {
            router.push('/auth/login')
        }

        if (mode === "modal"){
            return (
                <Dialog>
                    <DialogTrigger asChild={asChild}>
                        {children}
                    </DialogTrigger>
                    <DialogContent>
                        <LoginForm/>
                    </DialogContent>
                </Dialog>
            )
            
        }

        return (
            <span className="cursor-pointer" onClick={onClick}>{children}</span>
        )

}