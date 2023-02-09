import { ReactNode, useContext } from 'react'
import { CurrencyContext, RatesKeys } from '../../contexts/currency'
import { Icon } from '../Icon'
import { Select } from '../Select'
import { Text } from '../Text'
import { StyledHeaderBanner, StyledHeaderBannerProps } from './styled'

type Props = Partial<StyledHeaderBannerProps> & {
  title: ReactNode
}

export const HeaderBanner = ({ title }: Props) => {
  const { activeCurrency, setActiveCurrency } = useContext(CurrencyContext)

  const currencyOptions: RatesKeys[] = ['EUR', 'GBP', 'USD', 'JPY']

  const updateActiveCurrency = (newCurrency: string) => {
    setActiveCurrency(newCurrency as RatesKeys)
  }

  return (
    <StyledHeaderBanner>
      {title}
      <Select
        options={currencyOptions}
        onChange={(value) => updateActiveCurrency(value)}
        value={activeCurrency}
      />
    </StyledHeaderBanner>
  )
}
