"use client"

import usePreviewModal from "@/hooks/usePreview-modal"
import Gallery from "./gallery"
import Info from "./info"
import { Modal } from "./ui/modal"

const PreviewModal = ()=>{
    const PreviewModal= usePreviewModal()
    const product = usePreviewModal(state => state.data)

    if (!product){
        return null
    }

    return(
        <Modal open={PreviewModal.isOpen} onClose={PreviewModal.onClose}>
            <div className="grid w-full grid-col-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="sm:col-span-4 lg:col-span-5">
                    <Gallery images={product.Image}/>
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                    {/* @ts-ignore */}
                    <Info data={product} orders={[]}/>
                </div>
            </div>
        </Modal>
    )
}

export default PreviewModal