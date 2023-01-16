import React from 'react'

// Icons
import { AiFillHeart, AiFillPhone, AiFillPicture } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { GiTwoCoins } from 'react-icons/gi'
import { RiNewspaperFill } from 'react-icons/ri'
//

// Media Queries
export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const device = {
  landscape: `(orientation: landscape)`,
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}
//

// Navigation Links
export const links = [
  {
    id: 1,
    name: 'Aktualności',
    url: '/aktualnosci',
    icon: <RiNewspaperFill />,
  },
  {
    id: 2,
    name: 'O mnie',
    url: '/o-mnie',
    icon: <BsFillPersonFill />,
  },
  {
    id: 3,
    name: 'Oferta',
    url: '/oferta',
    icon: <AiFillHeart />,
  },
  {
    id: 4,
    name: 'Cennik',
    url: '/cennik',
    icon: <GiTwoCoins />,
  },
  {
    id: 5,
    name: 'Galeria',
    url: '/galeria',
    icon: <AiFillPicture />,
  },
  {
    id: 6,
    name: 'Kontakt',
    url: '/kontakt',
    icon: <AiFillPhone />,
  },
]
//

// About Therapy Component
export const aboutTherapy = [
  {
    id: 1,
    title: 'Dla kogo jest terapia SI?',
    points: [
      [
        'dla dzieci nadruchliwych, ciągle poszukujących nowych aktywności ruchowych',
      ],
      [
        'dla dzieci często potykających się, wpadających w przeszkody, ludzi stojących na ich drodze, przewracających się',
      ],
      [
        'dla dzieci które pragną  podnoszenia lub pchania ciężkich przedmiotów, dotykania wszystkich i wszystkiego, mocnego przytulania',
      ],
      [
        'dla dzieci z trudnościami  manualnymi i samoobsługą ( piciem, jedzeniem, rysowaniem, cięciem nożyczkami, zapinaniem guzików, sznurowaniem butów)',
      ],
      [
        'dla dzieci z nadwrażliwych na  dotyk (przesadnie reagujących na drobne urazy; oporujące przed: myciem głowy, czesaniem myciem zębów, dotykiem innych, chodzeniem boso po trawie i pasku, różnymi fakturami ubrań, metkami; dotykiem innych, głaskaniem, dotykaniem różnych cieczy, faktur)',
      ],
      [
        'dla dzieci z nadwrażliwością lub niedowrażliwością wzrokową (nie lubiących patrzeć na określone kształty, ruchy, światła, zapatrujących się na określone kształty, ruchy, światła)',
      ],
      [
        'dla dzieci z nadwrażliwością na dźwięki  (źle toleruje: wysokie lub niskie dźwięki, śmiech, krzyk, rozmowy, odgłosy odkurzacza, blendera, kosiarki, płaczące dzieci, klaksony samochodowe, szczekające psy)',
      ],
      ['dla dzieci  nadmiernie spokojnych nie lubiących zajęć ruchowych'],
    ],
  },
]
