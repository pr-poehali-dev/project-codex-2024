import { ServicesAndAdvantages } from "@/components/sections/services-and-advantages"
import { ProjectsAndProcess } from "@/components/sections/projects-and-process"
import { ReviewsFaqCta } from "@/components/sections/reviews-faq-cta"

interface MainSectionsProps {
  selectedFeature: number
  setSelectedFeature: (i: number) => void
  imageFade: boolean
  setImageFade: (v: boolean) => void
  setAutoRotationKey: (fn: (prev: number) => number) => void
  openFaqIndex: number | null
  setOpenFaqIndex: (i: number | null) => void
  formData: {
    name: string
    phone: string
    email: string
    houseType: string
    budget: string
    mortgage: string
  }
  setFormData: (data: MainSectionsProps["formData"]) => void
}

export function MainSections({
  selectedFeature,
  setSelectedFeature,
  imageFade,
  setImageFade,
  setAutoRotationKey,
  openFaqIndex,
  setOpenFaqIndex,
  formData,
  setFormData,
}: MainSectionsProps) {
  return (
    <>
      <ServicesAndAdvantages />

      <ProjectsAndProcess
        selectedFeature={selectedFeature}
        setSelectedFeature={setSelectedFeature}
        imageFade={imageFade}
        setImageFade={setImageFade}
        setAutoRotationKey={setAutoRotationKey}
      />

      <ReviewsFaqCta
        openFaqIndex={openFaqIndex}
        setOpenFaqIndex={setOpenFaqIndex}
        formData={formData}
        setFormData={setFormData}
      />
    </>
  )
}
