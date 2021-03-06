import { PrInputRefProps } from 'app/partials/pr-input'
import PrInputCV from 'app/partials/pr-input-cv'
import { forwardRef, Ref, useImperativeHandle, useRef, useState } from 'react'
import { MetaDataStyle } from '../template-1.style'
import { EducationItemRef, EducationValue, FocusBlurType } from 'app/partials/metadata/metadata.type'

interface EducationProps extends FocusBlurType {}

export const EducationItem1 = forwardRef((props: EducationProps, ref: Ref<EducationItemRef>) => {
  const { onFocus, onBlur } = props
  const [status, setStatus] = useState<boolean>(true)
  const majorRef = useRef<PrInputRefProps>(null)
  const nameRef = useRef<PrInputRefProps>(null)

  const getValue = () => {
    if (!status) {
      return null
    }
    const major = majorRef.current?.getValue() || ''
    const name = nameRef.current?.getValue().trim() || ''
    if (!major && !name) {
      return null
    }
    return { major, name }
  }

  useImperativeHandle(ref, () => ({
    getValue() {
      return getValue()
    },
    setValue(value: EducationValue) {
      const { name, major } = value
      nameRef.current?.setValue(name)
      majorRef.current?.setValue(major || '')
    }
  }))

  const onRemove = () => {
    setStatus(false)
  }

  if (!status) {
    return null
  }

  return (
    <MetaDataStyle>
      <div className="metadata-root flex w-full pb-1 relative">
        <div className="w-full metadata-content">
          <PrInputCV
            placeholder="- Trường học/Trung tâm"
            divClassName="h-8 w-full mt-0.5"
            onFocus={onFocus}
            onBlur={onBlur}
            className="bg-transparent w-full uppercase font-semibold text-gray-600"
            ref={nameRef}
          />
          <PrInputCV
            placeholder=" + Chuyên ngành"
            divClassName="h-8 w-full"
            ref={majorRef}
            onFocus={onFocus}
            onBlur={onBlur}
            className="bg-transparent w-full pl-8 text-gray-600"
          />
        </div>
        <div className="flex justify-end metadata-control absolute -top-3 -right-2.5">
          <span
            onClick={onRemove}
            className="cursor-pointer bg-red-400 flex justify-center items-center w-5 h-5 rounded-full hover:bg-red-500 duration-300"
          >
            <i className="text-white fas fa-times text-sm"></i>
          </span>
        </div>
      </div>
    </MetaDataStyle>
  )
})
