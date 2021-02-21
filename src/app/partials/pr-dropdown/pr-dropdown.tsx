import { forwardRef, useState, useImperativeHandle, Ref } from 'react'
import { PrDropdownProps, PrDropdownRefProps, OptionProps } from './data/type'
import ReactSelect from 'react-select'
import moment from 'moment'
import Language from './data/languages'
import { FormattedMessage } from 'react-intl'

const PrDropdown = forwardRef((props: PrDropdownProps, ref: Ref<PrDropdownRefProps>) => {
  const {
    defaultValue,
    isMulti,
    isClearable,
    placeholder,
    options,
    onChange,
    isDisabled,
    label,
    required,
    isLanguage,
    requiredMesseage
  } = props
  const [dataDropdown, setDataDropdown] = useState<OptionProps | OptionProps[] | null>(defaultValue || null)
  const [validateRequired, setValidateRequired] = useState<boolean>(false)
  const [focus, setFocus] = useState<boolean>(false)

  useImperativeHandle(ref, () => ({
    getValue() {
      return dataDropdown
    },
    setValue(data: OptionProps | OptionProps[] | null) {
      setDataDropdown(data)
    },
    checkRequired() {
      if (!dataDropdown) {
        setValidateRequired(true)
        setFocus(true)
        return false
      }
      return true
    },
    reset() {
      setDataDropdown(null)
      setValidateRequired(false)
    }
  }))

  const onSelected = (e: any) => {
    setDataDropdown(e)
    onChange && onChange(e)
    setValidateRequired(false)
  }

  return (
    <div className="w-full h-full">
      <Language>
        <div className="w-full h-full">
          <span className="font-medium block mb-1 text-base">
            {isLanguage && label ? <FormattedMessage id={label} /> : label}
            {required && <span className="text-red-500 font-bold">&nbsp;*</span>}
          </span>
          <ReactSelect
            className="w-full h-full"
            key={moment().valueOf()}
            defaultValue={defaultValue}
            value={dataDropdown}
            isMulti={isMulti}
            autoFocus={focus}
            isClearable={isClearable || typeof isClearable === 'undefined'}
            placeholder={isLanguage ? <FormattedMessage id={placeholder || 'SELECT'} /> : placeholder || 'Select...'}
            options={options}
            onChange={(e: any) => onSelected(e)}
            isDisabled={isDisabled}
          />
          {validateRequired && (
            <span className="text-red-500 font-medium block text-base">
              {isLanguage ? <FormattedMessage id={requiredMesseage || 'REQUIRED'} /> : requiredMesseage || 'Required !'}
            </span>
          )}
        </div>
      </Language>
    </div>
  )
})

PrDropdown.displayName = 'PrDropdown'

export default PrDropdown
