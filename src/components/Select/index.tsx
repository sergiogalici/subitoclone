import { ReactNode } from 'react'
import { theme } from '../../style/theme'
import { StyledSelect, StyledSelectProps } from './styled'

type Props = Partial<StyledSelectProps> & {
  options?: string[]
  name?: string
  label?: string
  onChange?: (value: string) => void
  value: string
}

export const Select = ({
  color,
  padding = 'sm',
  borderRadius,
  fullWidth = false,
  options = [''],
  label,
  name,
  onChange,
  value
}: Props) => {
  return (
    <>
      {label && name && <label htmlFor={name}>{label}</label>}
      <StyledSelect
        borderRadius={borderRadius}
        color={color}
        padding={padding}
        fullWidth={fullWidth}
        name={name}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        value={value}
      >
        <optgroup>
          {options.map((opt, index) => (
            <option value={opt} key={opt + index}>
              {opt}
            </option>
          ))}
        </optgroup>
      </StyledSelect>
    </>
  )
}
