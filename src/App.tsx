import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ThemeProvider } from 'styled-components'
import { BSBanner } from './components/BSBanner'
import { BSCardBox } from './components/BSCardsBox'
import { BSInfoBox } from './components/BSInfoBox'
import { Button } from './components/Button'
import { BSCard } from './components/BuySellCard'
import { CategoryCard } from './components/CategoryCard'
import { Icon } from './components/Icon'
import { Image } from './components/Image'
import { Input } from './components/Input'
import { MagazineBanner } from './components/MagazineBanner'
import { OfferBanner } from './components/OfferBanner'
import { Select } from './components/Select'
import { Text } from './components/Text'
import { GlobalStyle } from './style/GlobalStyle'
import { theme } from './style/theme'

const foo = () => {
  console.log('button clicked')
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Button color="primary" backgroundColor="transparent">
        Base Button
      </Button>
      <Button variant="tertiary" outlined>
        BBBBB
      </Button>
      <Button variant="secondary">AAAA</Button>
      <Button variant="secondary">Button 1</Button>
      <Button size="sm">Button 2</Button>
      <Button size="md" icon={['fas', 'search']}>
        Button 3
      </Button>
      <Button icon="search" />
      <Icon icon="search" size="2x" />
      <Input placeText="my placeholder" />
      <Select options={['opt1', 'opt2', 'opt3']} label="Ciao" name="ciao" />
      <Select options={['opt1', 'opt2', 'opt3']} fullWidth={true} />
      <Button icon="search">asdasd</Button>
      <Icon icon="search" size="3x" />
      <FontAwesomeIcon icon={'search'} />
      <CategoryCard
        backgroundColor="primary"
        title="Motori"
        buttonTitle="Cerca in Motori"
        width={150}
        height={100}
        borderRadius={1}
        shadow={true}
      />
      <BSCard
        title="Ciao"
        buttonSize="sm"
        imageSrc="https://images.pexels.com/photos/7500307/pexels-photo-7500307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <BSInfoBox
        title="my title"
        subTitles={[
          'my subtitle ',
          'my other subtitle',
          'my third subtitle',
          'my fourth subtitle',
          'my fifth subtitle'
        ]}
        width={680}
        buttonTitle="My Button"
        padding="sm"
      />
      <BSBanner
        width={850}
        title="Scegli TuttoSubito"
        subTitles={
          <Text color={'secondaryLight'} bold={false}>
            Il nostro servizio di <b>spedizione tracciata</b> e <b>pagamento sicuro</b>
          </Text>
        }
        buttonTitle="Scopri di più"
        cards={[
          {
            title: 'Compra',
            imageSrc: 'https://www.subito.it/ekhaya/pay.jpg?v=4',
            id: 1
          },
          { title: 'Vendi', imageSrc: 'https://www.subito.it/ekhaya/sell.jpg?v=4', id: 2 }
        ]}
      /> */}
      <br />
      <OfferBanner
        imageSrc="https://www.subito.it/ekhaya/001_DESKTOP_inserisciannuncio.jpg"
        title="Comincia a guadagnare"
        subTitle="Dai al tuo usato una seconda occasione: vendi quello che non usi più, subito."
        buttonText="Inserisci annuncio"
        buttonIcon={'plus-square'}
        width="1300px"
      />
      <br />
      <MagazineBanner
        title="L'arte di donare nuova vita al tuo regalo"
        subTitle="Con il regifting è sempre festa, anche per il pianeta."
        imageSrc="https://www.subito.it/ekhaya/_next/static/media/cover_hp.83da4941.webp"
      />
    </ThemeProvider>
  )
}

export default App
