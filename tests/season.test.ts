import { describe, expect, test } from 'vitest';
import { csfd } from '../src';
import { Season } from '../src/interfaces/season.interface';

describe('season', () => {
  test('gets season details for big bang theory', async () => {
    const expectedSeason: Season = {
      description: "Dva fyzici Leonard a Sheldon rozumí úplně všemu, od nepřekonatelné gravitace černých děr po spletitou strukturu atomů. Jenže když vezmete ty atomy a zformujete z nich ženu, jsou oba vědátoři v koncích. Když se do sousedního bytu přistěhuje Penny, žena se všemi atomy na těch pravých místech, začne se soukromý vesmír pánů Leonarda a Sheldona rozpínat do netušených rozměrů. Tvůrci série Chuck Lorre (Dva a půl chlapa) a Bill Prady (Dharma & Greg) vytvořili skvělou melanž vědy, superhrdinů i sexu. Johnny Galecki (Roseanne) a Jim Parsons (Soudkyně Amy) v hlavních rolích rozesmějí každého. (Magic Box)",
      thumbnail: "//image.pmgstatic.com/cache/resized/w140/files/images/film/posters/157/797/157797756_1d26d3.jpg",
      episodeList: [
        {
          "linkToDetail": "/film/234260-teorie-velkeho-tresku/470331-pilot/",
          "name": "Pilot",
          "seasonEpisodeIdentifier": " (S01E01)"
        },
        {
          "linkToDetail": "/film/234260-teorie-velkeho-tresku/470332-hypoteza-otrubove-vlakniny/",
          "name": "Hypotéza otrubové vlákniny",
          "seasonEpisodeIdentifier": " (S01E02)"
        },
        {
          "linkToDetail": "/film/234260-teorie-velkeho-tresku/470333-korolar-serzanta-snehulky/",
          "name": "Korolár seržanta Sněhulky",
          "seasonEpisodeIdentifier": " (S01E03)"
        },
        {
          "linkToDetail": "/film/234260-teorie-velkeho-tresku/470334-efekt-svetelkujici-rybky/",
          "name": "Efekt světélkující rybky",
          "seasonEpisodeIdentifier": " (S01E04)"
        },
        {
          "linkToDetail": "/film/234260-teorie-velkeho-tresku/470335-hamburgerovy-postulat/",
          "name": "Hamburgerový postulát",
          "seasonEpisodeIdentifier": " (S01E05)"
        },
        {
          "linkToDetail": "/film/234260-teorie-velkeho-tresku/470336-paradigma-pana-prstenu/",
          "name": "Paradigma Pána prstenů",
          "seasonEpisodeIdentifier": " (S01E06)"
        },
        {
          "linkToDetail": "/film/234260-teorie-velkeho-tresku/470337-knedlickovy-paradox/",
          "name": "Knedlíčkový paradox",
          "seasonEpisodeIdentifier": " (S01E07)"
        },
        {
          "linkToDetail": "/film/234260-teorie-velkeho-tresku/470338-koktejlovy-experiment/",
          "name": "Koktejlový experiment",
          "seasonEpisodeIdentifier": " (S01E08)"
        },
        {
          "linkToDetail": "/film/234260-teorie-velkeho-tresku/470339-cooper-hofstadterova-polarizace/",
          "name": "Cooper-Hofstadterova polarizace",
          "seasonEpisodeIdentifier": " (S01E09)"
        },
        {
          "linkToDetail": "/film/234260-teorie-velkeho-tresku/470340-loobenfelduv-rozpad/",
          "name": "Loobenfeldův rozpad",
          "seasonEpisodeIdentifier": " (S01E10)"
        },
        {
          "linkToDetail": "/film/234260-teorie-velkeho-tresku/470341-livancova-anomalie/",
          "name": "Lívancová anomálie",
          "seasonEpisodeIdentifier": " (S01E11)"
        },
        {
          "linkToDetail": "/film/234260-teorie-velkeho-tresku/470342-jeruzalemska-dualita/",
          "name": "Jeruzalémská dualita",
          "seasonEpisodeIdentifier": " (S01E12)"
        },
        {
          "linkToDetail": "/film/234260-teorie-velkeho-tresku/470343-batnadoba-a-chybny-predpoklad/",
          "name": "Batnádoba a chybný předpoklad",
          "seasonEpisodeIdentifier": " (S01E13)"
        },
        {
          "linkToDetail": "/film/234260-teorie-velkeho-tresku/470344-zkaza-mimonoraje/",
          "name": "Zkáza mimoňoráje",
          "seasonEpisodeIdentifier": " (S01E14)"
        },
        {
          "linkToDetail": "/film/234260-teorie-velkeho-tresku/470345-rostenkove-distribucni-dilema/",
          "name": "Roštěnkové distribuční dilema",
          "seasonEpisodeIdentifier": " (S01E15)"
        },
        {
          "linkToDetail": "/film/234260-teorie-velkeho-tresku/470346-reakce-na-arasidy/",
          "name": "Reakce na arašídy",
          "seasonEpisodeIdentifier": " (S01E16)"
        },
        {
          "linkToDetail": "/film/234260-teorie-velkeho-tresku/470347-mandarinkovy-faktor/",
          "name": "Mandarinkový faktor",
          "seasonEpisodeIdentifier": " (S01E17)"
        }
      ],
      origin: 'USA, \n\t\t\t\t\t\t\t(2007–2008), 5 h 57 min\n\t\t\t\t\t\t\t(Minutáž: 20–23 min)\n\n\t\t\t\t\t\t'
    }

    const season = await csfd.seasonDetails("/film/234260-teorie-velkeho-tresku/470330-serie-1/")


    expect(trimWhiteSpace(season)).toEqual(trimWhiteSpace(expectedSeason))
  })

});

function trimWhiteSpace(season: Season): Season {
  return {
    ...season,
    description: season.description.replace(/\s/g, ""),
    origin: season.origin.replace(/\s/g, ""),
    thumbnail: season.thumbnail.replace(/\s/g, ""),
  }
}
