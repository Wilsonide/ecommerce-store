"use client"
import { Color, Size } from "@/types"
import { Plus, X } from "lucide-react"
import { useState } from "react"
import {Button} from "./ui/button"
import { Dialog } from '@headlessui/react'
import IconButton from "./ui/iconButton"
import Filter from "./filter"

interface ComponentProps {
    sizes: Size[],
    colors: Color[]
}

function MobileFilter({sizes, colors}:ComponentProps) {
    const [open, setOpen] = useState(false)

    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)
    
  return (
    <>
        <Button className="flex items-center gap-x-2 lg:hidden" onClick={onOpen}>
            Filters
            <Plus size={20}/>
        </Button>

        <Dialog open={open} as='div' onClose={onClose} className='relative z-50 lg:hidden'>
            <div className="fixed inset-0 bg-black bg-opacity-25"/>
            <div className="fixed inset-0 flex">
                <Dialog.Panel className='w-full h-full max-w-xs relative ml-auto flex flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl'>
                    <div className="flex items-center justify-end px-4">
                        <IconButton onClick={onClose} icon={<X size={15}/>}/>
                    </div>
                    <div className="px-4">
                        <Filter
                        valueKey='sizeId'
                        name='Sizes'
                        data={sizes}
                        />

                        <Filter
                        valueKey='colorId'
                        name='Colors'
                        data={colors}
                        />
                    </div>

                </Dialog.Panel>
            </div>
        </Dialog>
    </>
  )
}

export default MobileFilter