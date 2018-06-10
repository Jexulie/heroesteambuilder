import React, { Component } from 'react';
import MyTeam from './components/MyTeam'
import Heroes from './components/Heroes'
import OpTeam from './components/OpTeam'
import InfoBar from './components/InfoBar'
import Filters from './components/Filters'

import './css/App.css';



class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      originalList: [
        {
            "Id": 0,
            "Name": "Abathur",
            "Type": "Melee",
            "Role": "Specialist",
            "Franchise": "Starcraft",
            "Health": 685,
            "Damage": 26,
            "AtkSpeed": 1.43,
            "img": "./img/abathur.png"
        },
        {
            "Id": 1,
            "Name": "Alarak",
            "Type": "Melee",
            "Role": "Assassin",
            "Franchise": "Starcraft",
            "Health": 1900,
            "Damage": 140,
            "AtkSpeed": 1,
            "img": "./img/alarak.png"
        },
        {
            "Id": 2,
            "Name": "Alexstrasza",
            "Type": "Ranged",
            "Role": "Support",
            "Franchise": "Warcraft",
            "Health": 1698,
            "Damage": 73,
            "AtkSpeed": 1,
            "img": "./img/alexstrasza.png"
        },
        {
            "Id": 3,
            "Name": "Ana",
            "Type": "Ranged",
            "Role": "Support",
            "Franchise": "Overwatch",
            "Health": 1598,
            "Damage": 30,
            "AtkSpeed": 1.33,
            "img": "./img/ana.png"
        },
        {
            "Id": 4,
            "Name": "Anub'arak",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Warcraft",
            "Health": 1925,
            "Damage": 91,
            "AtkSpeed": 1,
            "img": "./img/anubarak.png"
        },
        {
            "Id": 5,
            "Name": "Artanis",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Starcraft",
            "Health": 2470,
            "Damage": 111,
            "AtkSpeed": 1,
            "img": "./img/artanis.png"
        },
        {
            "Id": 6,
            "Name": "Arthas",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Warcraft",
            "Health": 2524,
            "Damage": 95,
            "AtkSpeed": 1,
            "img": "./img/arthas.png"
        },
        {
            "Id": 7,
            "Name": "Auriel",
            "Type": "Ranged",
            "Role": "Support",
            "Franchise": "Diablo",
            "Health": 1758,
            "Damage": 68,
            "AtkSpeed": 1.25,
            "img": "./img/auriel.png"
        },
        {
            "Id": 8,
            "Name": "Azmodan",
            "Type": "Ranged",
            "Role": "Specialist",
            "Franchise": "Diablo",
            "Health": 2738,
            "Damage": 85,
            "AtkSpeed": 1,
            "img": "./img/azmodan.png"
        },
        {
            "Id": 9,
            "Name": "Blaze",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Starcraft",
            "Health": 2775,
            "Damage": 55,
            "AtkSpeed": 1,
            "img": "./img/blaze.png"
        },
        {
            "Id": 10,
            "Name": "Brightwing",
            "Type": "Ranged",
            "Role": "Support",
            "Franchise": "Warcraft",
            "Health": 1450,
            "Damage": 81,
            "AtkSpeed": 1.11,
            "img": "./img/brightwing.png"
        },
        {
            "Id": 11,
            "Name": "Cassia",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Diablo",
            "Health": 1660,
            "Damage": 130,
            "AtkSpeed": 1.33,
            "img": "./img/cassia.png"
        },
        {
            "Id": 12,
            "Name": "Chen",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Warcraft",
            "Health": 2473,
            "Damage": 84,
            "AtkSpeed": 1.11,
            "img": "./img/chen.png"
        },
        {
            "Id": 13,
            "Name": "Cho",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Warcraft",
            "Health": 2950,
            "Damage": 130,
            "AtkSpeed": 0.91,
            "img": "./img/cho.png"
        },
        {
            "Id": 14,
            "Name": "Chromie",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 1323,
            "Damage": 73,
            "AtkSpeed": 1,
            "img": "./img/chromie.png"
        },
        {
            "Id": 15,
            "Name": "Diablo",
            "Type": "Melee",
            "Role": "Support",
            "Franchise": "Diablo",
            "Health": 1598,
            "Damage": 63,
            "AtkSpeed": 1,
            "img": "./img/deckard.png"
        },
        {
            "Id": 16,
            "Name": "Dehaka",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Starcraft",
            "Health": 2434,
            "Damage": 100,
            "AtkSpeed": 1.11,
            "img": "./img/dehaka.png"
        },
        {
            "Id": 17,
            "Name": "Diablo",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Diablo",
            "Health": 2567,
            "Damage": 105,
            "AtkSpeed": 0.91,
            "img": "./img/diablo.png"
        },
        {
            "Id": 18,
            "Name": "D.va",
            "Type": "Ranged",
            "Role": "Warrior",
            "Franchise": "Overwatch",
            "Health": 3153,
            "Damage": 24,
            "AtkSpeed": 4,
            "img": "./img/dva.png"
        },
        {
            "Id": 19,
            "Name": "E.T.C",
            "Type": "Melee",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 2180,
            "Damage": 99,
            "AtkSpeed": 1.25,
            "img": "./img/etc.png"
        },
        {
            "Id": 20,
            "Name": "Falstad",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 1365,
            "Damage": 104,
            "AtkSpeed": 1.43,
            "img": "./img/falstad.png"
        },
        {
            "Id": 21,
            "Name": "Fenix",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Starcraft",
            "Health": 1140,
            "Damage": 86,
            "AtkSpeed": 0.74,
            "img": "./img/fenix.png"
        },
        {
            "Id": 22,
            "Name": "Gall",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 0,
            "Damage": 0,
            "AtkSpeed": 1,
            "img": "./img/gall.png"
        },
        {
            "Id": 23,
            "Name": "Garosh",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Warcraft",
            "Health": 2060,
            "Damage": 137,
            "AtkSpeed": 0.83,
            "img": "./img/garrosh.png"
        },
        {
            "Id": 24,
            "Name": "Gazlowe",
            "Type": "Melee",
            "Role": "Specialist",
            "Franchise": "Warcraft",
            "Health": 1826,
            "Damage": 95,
            "AtkSpeed": 1.25,
            "img": "./img/gazlowe.png"
        },
        {
            "Id": 25,
            "Name": "Genji",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Overwatch",
            "Health": 1620,
            "Damage": 44,
            "AtkSpeed": 1,
            "img": "./img/genji.png"
        },
        {
            "Id": 26,
            "Name": "Greymane",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 1876,
            "Damage": 140,
            "AtkSpeed": 1,
            "img": "./img/greymane.png"
        },
        {
            "Id": 27,
            "Name": "Gul'dan",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 1700,
            "Damage": 60,
            "AtkSpeed": 1,
            "img": "./img/guldan.png"
        },
        {
            "Id": 28,
            "Name": "Hanzo",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Overwatch",
            "Health": 1323,
            "Damage": 173,
            "AtkSpeed": 0.66,
            "img": "./img/hanzo.png"
        },
        {
            "Id": 29,
            "Name": "Illidan",
            "Type": "Melee",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 1650,
            "Damage": 78,
            "AtkSpeed": 1.82,
            "img": "./img/illidan.png"
        },
        {
            "Id": 30,
            "Name": "Jaina",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 1365,
            "Damage": 60,
            "AtkSpeed": 1,
            "img": "./img/jaina.png"
        },
        {
            "Id": 31,
            "Name": "Johanna",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Diablo",
            "Health": 2350,
            "Damage": 99,
            "AtkSpeed": 0.91,
            "img": "./img/johanna.png"
        },
        {
            "Id": 32,
            "Name": "Junkrat",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Overwatch",
            "Health": 1350,
            "Damage": 110,
            "AtkSpeed": 1,
            "img": "./img/junkrat.png"
        },
        {
            "Id": 33,
            "Name": "Kael'Thas",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 1520,
            "Damage": 65,
            "AtkSpeed": 1.11,
            "img": "./img/kaelthas.png"
        },
        {
            "Id": 34,
            "Name": "Kel'Thuzad",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 1445,
            "Damage": 72,
            "AtkSpeed": 1,
            "img": "./img/kelthuzad.png"
        },
        {
            "Id": 35,
            "Name": "Kerrigan",
            "Type": "Melee",
            "Role": "Assassin",
            "Franchise": "Starcraft",
            "Health": 1680,
            "Damage": 120,
            "AtkSpeed": 1.25,
            "img": "./img/kerrigan.png"
        },
        {
            "Id": 36,
            "Name": "Kerrigan",
            "Type": "Melee",
            "Role": "Support",
            "Franchise": "Diablo",
            "Health": 2027,
            "Damage": 60,
            "AtkSpeed": 2,
            "img": "./img/kharazim.png"
        },
        {
            "Id": 37,
            "Name": "Leoric",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Diablo",
            "Health": 2468,
            "Damage": 109,
            "AtkSpeed": 0.77,
            "img": "./img/leoric.png"
        },
        {
            "Id": 38,
            "Name": "Li-Li",
            "Type": "Ranged",
            "Role": "Support",
            "Franchise": "Warcraft",
            "Health": 1475,
            "Damage": 60,
            "AtkSpeed": 1.25,
            "img": "./img/li-li.png"
        },
        {
            "Id": 39,
            "Name": "Li-Ming",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Diablo",
            "Health": 1232,
            "Damage": 63,
            "AtkSpeed": 1,
            "img": "./img/li-ming.png"
        },
        {
            "Id": 40,
            "Name": "Lt. Morales",
            "Type": "Ranged",
            "Role": "Support",
            "Franchise": "Starcraft",
            "Health": 1472,
            "Damage": 83,
            "AtkSpeed": 1,
            "img": "./img/lt-morales.png"
        },
        {
            "Id": 41,
            "Name": "Lucio",
            "Type": "Ranged",
            "Role": "Support",
            "Franchise": "Overwatch",
            "Health": 1442,
            "Damage": 23,
            "AtkSpeed": 0.80,
            "img": "./img/lucio.png"
        },
        {
            "Id": 42,
            "Name": "Lunara",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 1430,
            "Damage": 90,
            "AtkSpeed": 1.11,
            "img": "./img/lunara.png"
        },
        {
            "Id": 43,
            "Name": "Maiev",
            "Type": "Melee",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 2021,
            "Damage": 145,
            "AtkSpeed": 1.11,
            "img": "./img/maiev.png"
        },
        {
            "Id": 44,
            "Name": "Malfurion",
            "Type": "Ranged",
            "Role": "Support",
            "Franchise": "Warcraft",
            "Health": 1525,
            "Damage": 60,
            "AtkSpeed": 1.11,
            "img": "./img/malfurion.png"
        },
        {
            "Id": 45,
            "Name": "Malthael",
            "Type": "Melee",
            "Role": "Assassin",
            "Franchise": "Diablo",
            "Health": 1962,
            "Damage": 82,
            "AtkSpeed": 0.91,
            "img": "./img/malthael.png"
        },
        {
            "Id": 46,
            "Name": "Medivh",
            "Type": "Ranged",
            "Role": "Specialist",
            "Franchise": "Warcraft",
            "Health": 1470,
            "Damage": 80,
            "AtkSpeed": 1.11,
            "img": "./img/medivh.png"
        },
        {
            "Id": 47,
            "Name": "Muradin",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Warcraft",
            "Health": 2765,
            "Damage": 88,
            "AtkSpeed": 1.11,
            "img": "./img/muradin.png"
        },
        {
            "Id": 48,
            "Name": "Murky",
            "Type": "Melee",
            "Role": "Specialist",
            "Franchise": "Warcraft",
            "Health": 730,
            "Damage": 60,
            "AtkSpeed": 1.25,
            "img": "./img/murky.png"
        },
        {
            "Id": 49,
            "Name": "Nazeebo",
            "Type": "Ranged",
            "Role": "Specialist",
            "Franchise": "Diablo",
            "Health": 1502,
            "Damage": 88,
            "AtkSpeed": 1.11,
            "img": "./img/nazeebo.png"
        },
        {
            "Id": 50,
            "Name": "Nova",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Starcraft",
            "Health": 1300,
            "Damage": 105,
            "AtkSpeed": 1,
            "img": "./img/nova.png"
        },
        {
            "Id": 51,
            "Name": "Probius",
            "Type": "Ranged",
            "Role": "Specialist",
            "Franchise": "Starcraft",
            "Health": 1310,
            "Damage": 34,
            "AtkSpeed": 1.11,
            "img": "./img/probius.png"
        },
        {
            "Id": 52,
            "Name": "Ragnaros",
            "Type": "Melee",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 2000,
            "Damage": 171,
            "AtkSpeed": 0.83,
            "img": "./img/ragnaros.png"
        },
        {
            "Id": 53,
            "Name": "Raynor",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Starcraft",
            "Health": 1302,
            "Damage": 122,
            "AtkSpeed": 1.25,
            "img": "./img/raynor.png"
        },
        {
            "Id": 54,
            "Name": "Rehgar",
            "Type": "Melee",
            "Role": "Support",
            "Franchise": "Warcraft",
            "Health": 2132,
            "Damage": 125,
            "AtkSpeed": 1.25,
            "img": "./img/rehgar.png"
        },
        {
            "Id": 55,
            "Name": "Rexxar",
            "Type": "Ranged",
            "Role": "Warrior",
            "Franchise": "Warcraft",
            "Health": 1795,
            "Damage": 103,
            "AtkSpeed": 0.83,
            "img": "./img/rexxar.png"
        },
        {
            "Id": 56,
            "Name": "Samuro",
            "Type": "Melee",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 1725,
            "Damage": 110,
            "AtkSpeed": 1.67,
            "img": "./img/samuro.png"
        },
        {
            "Id": 57,
            "Name": "Sgt. Hammer",
            "Type": "Ranged",
            "Role": "Specialist",
            "Franchise": "Starcraft",
            "Health": 1720,
            "Damage": 140,
            "AtkSpeed": 1,
            "img": "./img/sgt-hammer.png"
        },
        {
            "Id": 58,
            "Name": "Sonya",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Diablo",
            "Health": 2435,
            "Damage": 84,
            "AtkSpeed": 1.25,
            "img": "./img/sonya.png"
        },
        {
            "Id": 59,
            "Name": "Stitches",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Warcraft",
            "Health": 3000,
            "Damage": 85,
            "AtkSpeed": 0.91,
            "img": "./img/stitches.png"
        },
        {
            "Id": 60,
            "Name": "Stukov",
            "Type": "Melee",
            "Role": "Support",
            "Franchise": "Starcraft",
            "Health": 1682,
            "Damage": 262,
            "AtkSpeed": 0.67,
            "img": "./img/stukov.png"
        },
        {
            "Id": 61,
            "Name": "Sylvanas",
            "Type": "Ranged",
            "Role": "Specialist",
            "Franchise": "Warcraft",
            "Health": 1425,
            "Damage": 90,
            "AtkSpeed": 1.67,
            "img": "./img/sylvanas.png"
        },
        {
            "Id": 62,
            "Name": "Tassadar",
            "Type": "Ranged",
            "Role": "Support",
            "Franchise": "Starcraft",
            "Health": 1287,
            "Damage": 14,
            "AtkSpeed": 4,
            "img": "./img/tassadar.png"
        },
        {
            "Id": 63,
            "Name": "The Butcher",
            "Type": "Melee",
            "Role": "Assassin",
            "Franchise": "Diablo",
            "Health": 2154,
            "Damage": 130,
            "AtkSpeed": 1.11,
            "img": "./img/the-butcher.png"
        },
        {
            "Id": 64,
            "Name": "The Lost Vikings",
            "Type": "Ranged",
            "Role": "Specialist",
            "Franchise": "Blizzard",
            "Health": 3286,
            "Damage": 185,
            "AtkSpeed": 2.87,
            "img": "./img/the-lost-vikings.png"
        },
        {
            "Id": 65,
            "Name": "Thrall",
            "Type": "Melee",
            "Role": "Specialist",
            "Franchise": "Warcraft",
            "Health": 1876,
            "Damage": 173,
            "AtkSpeed": 0.91,
            "img": "./img/thrall.png"
        },
        {
            "Id": 66,
            "Name": "Tracer",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Overwatch",
            "Health": 1280,
            "Damage": 28,
            "AtkSpeed": 8,
            "img": "./img/tracer.png"
        },
        {
            "Id": 67,
            "Name": "Tychus",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Starcraft",
            "Health": 1925,
            "Damage": 48,
            "AtkSpeed": 4,
            "img": "./img/tychus.png"
        },
        {
            "Id": 68,
            "Name": "Tyrael",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Diablo",
            "Health": 2468,
            "Damage": 78,
            "AtkSpeed": 1.25,
            "img": "./img/tyrael.png"
        },
        {
            "Id": 69,
            "Name": "Tyrande",
            "Type": "Ranged",
            "Role": "Support",
            "Franchise": "Warcraft",
            "Health": 1511,
            "Damage": 82,
            "AtkSpeed": 1.33,
            "img": "./img/tyrande.png"
        },
        {
            "Id": 70,
            "Name": "Uther",
            "Type": "Melee",
            "Role": "Support",
            "Franchise": "Warcraft",
            "Health": 2156,
            "Damage": 75,
            "AtkSpeed": 1,
            "img": "./img/uther.png"
        },
        {
            "Id": 71,
            "Name": "Valeera",
            "Type": "Melee",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 2047,
            "Damage": 79,
            "AtkSpeed": 2,
            "img": "./img/valeera.png"
        },
        {
            "Id": 72,
            "Name": "Valla",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Diablo",
            "Health": 1273,
            "Damage": 75,
            "AtkSpeed": 1.67,
            "img": "./img/valla.png"
        },
        {
            "Id": 73,
            "Name": "Varian",
            "Type": "Melee",
            "Role": "Multiclass",
            "Franchise": "Warcraft",
            "Health": 1924,
            "Damage": 74,
            "AtkSpeed": 1.25,
            "img": "./img/varian.png"
        },
        {
            "Id": 74,
            "Name": "Xul",
            "Type": "Melee",
            "Role": "Specialist",
            "Franchise": "Diablo",
            "Health": 2000,
            "Damage": 110,
            "AtkSpeed": 1.20,
            "img": "./img/xul.png"
        },
        {
            "Id": 75,
            "Name": "Zagara",
            "Type": "Ranged",
            "Role": "Specialist",
            "Franchise": "Starcraft",
            "Health": 1575,
            "Damage": 82,
            "AtkSpeed": 1.25,
            "img": "./img/zagara.png"
        },
        {
            "Id": 76,
            "Name": "Zarya",
            "Type": "Ranged",
            "Role": "Warrior",
            "Franchise": "Overwatch",
            "Health": 2292,
            "Damage": 20,
            "AtkSpeed": 4,
            "img": "./img/zarya.png"
        },
        {
            "Id": 77,
            "Name": "Zeratul",
            "Type": "Melee",
            "Role": "Assassin",
            "Franchise": "Starcraft",
            "Health": 1622,
            "Damage": 126,
            "AtkSpeed": 1.11,
            "img": "./img/zeratul.png"
        },
        {
            "Id": 78,
            "Name": "Zul'jin",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 1875,
            "Damage": 94,
            "AtkSpeed": 1.25,
            "img": "./img/zuljin.png"
        }
      ],
      heroesList : [
        {
            "Id": 0,
            "Name": "Abathur",
            "Type": "Melee",
            "Role": "Specialist",
            "Franchise": "Starcraft",
            "Health": 685,
            "Damage": 26,
            "AtkSpeed": 1.43,
            "img": "./img/abathur.png"
        },
        {
            "Id": 1,
            "Name": "Alarak",
            "Type": "Melee",
            "Role": "Assassin",
            "Franchise": "Starcraft",
            "Health": 1900,
            "Damage": 140,
            "AtkSpeed": 1,
            "img": "./img/alarak.png"
        },
        {
            "Id": 2,
            "Name": "Alexstrasza",
            "Type": "Ranged",
            "Role": "Support",
            "Franchise": "Warcraft",
            "Health": 1698,
            "Damage": 73,
            "AtkSpeed": 1,
            "img": "./img/alexstrasza.png"
        },
        {
            "Id": 3,
            "Name": "Ana",
            "Type": "Ranged",
            "Role": "Support",
            "Franchise": "Overwatch",
            "Health": 1598,
            "Damage": 30,
            "AtkSpeed": 1.33,
            "img": "./img/ana.png"
        },
        {
            "Id": 4,
            "Name": "Anub'arak",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Warcraft",
            "Health": 1925,
            "Damage": 91,
            "AtkSpeed": 1,
            "img": "./img/anubarak.png"
        },
        {
            "Id": 5,
            "Name": "Artanis",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Starcraft",
            "Health": 2470,
            "Damage": 111,
            "AtkSpeed": 1,
            "img": "./img/artanis.png"
        },
        {
            "Id": 6,
            "Name": "Arthas",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Warcraft",
            "Health": 2524,
            "Damage": 95,
            "AtkSpeed": 1,
            "img": "./img/arthas.png"
        },
        {
            "Id": 7,
            "Name": "Auriel",
            "Type": "Ranged",
            "Role": "Support",
            "Franchise": "Diablo",
            "Health": 1758,
            "Damage": 68,
            "AtkSpeed": 1.25,
            "img": "./img/auriel.png"
        },
        {
            "Id": 8,
            "Name": "Azmodan",
            "Type": "Ranged",
            "Role": "Specialist",
            "Franchise": "Diablo",
            "Health": 2738,
            "Damage": 85,
            "AtkSpeed": 1,
            "img": "./img/azmodan.png"
        },
        {
            "Id": 9,
            "Name": "Blaze",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Starcraft",
            "Health": 2775,
            "Damage": 55,
            "AtkSpeed": 1,
            "img": "./img/blaze.png"
        },
        {
            "Id": 10,
            "Name": "Brightwing",
            "Type": "Ranged",
            "Role": "Support",
            "Franchise": "Warcraft",
            "Health": 1450,
            "Damage": 81,
            "AtkSpeed": 1.11,
            "img": "./img/brightwing.png"
        },
        {
            "Id": 11,
            "Name": "Cassia",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Diablo",
            "Health": 1660,
            "Damage": 130,
            "AtkSpeed": 1.33,
            "img": "./img/cassia.png"
        },
        {
            "Id": 12,
            "Name": "Chen",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Warcraft",
            "Health": 2473,
            "Damage": 84,
            "AtkSpeed": 1.11,
            "img": "./img/chen.png"
        },
        {
            "Id": 13,
            "Name": "Cho",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Warcraft",
            "Health": 2950,
            "Damage": 130,
            "AtkSpeed": 0.91,
            "img": "./img/cho.png"
        },
        {
            "Id": 14,
            "Name": "Chromie",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 1323,
            "Damage": 73,
            "AtkSpeed": 1,
            "img": "./img/chromie.png"
        },
        {
            "Id": 15,
            "Name": "Deckard",
            "Type": "Melee",
            "Role": "Support",
            "Franchise": "Diablo",
            "Health": 1598,
            "Damage": 63,
            "AtkSpeed": 1,
            "img": "./img/deckard.png"
        },
        {
            "Id": 16,
            "Name": "Dehaka",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Starcraft",
            "Health": 2434,
            "Damage": 100,
            "AtkSpeed": 1.11,
            "img": "./img/dehaka.png"
        },
        {
            "Id": 17,
            "Name": "Diablo",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Diablo",
            "Health": 2567,
            "Damage": 105,
            "AtkSpeed": 0.91,
            "img": "./img/diablo.png"
        },
        {
            "Id": 18,
            "Name": "D.va",
            "Type": "Ranged",
            "Role": "Warrior",
            "Franchise": "Overwatch",
            "Health": 3153,
            "Damage": 24,
            "AtkSpeed": 4,
            "img": "./img/dva.png"
        },
        {
            "Id": 19,
            "Name": "E.T.C",
            "Type": "Melee",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 2180,
            "Damage": 99,
            "AtkSpeed": 1.25,
            "img": "./img/etc.png"
        },
        {
            "Id": 20,
            "Name": "Falstad",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 1365,
            "Damage": 104,
            "AtkSpeed": 1.43,
            "img": "./img/falstad.png"
        },
        {
            "Id": 21,
            "Name": "Fenix",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Starcraft",
            "Health": 1140,
            "Damage": 86,
            "AtkSpeed": 0.74,
            "img": "./img/fenix.png"
        },
        {
            "Id": 22,
            "Name": "Gall",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 0,
            "Damage": 0,
            "AtkSpeed": 1,
            "img": "./img/gall.png"
        },
        {
            "Id": 23,
            "Name": "Garosh",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Warcraft",
            "Health": 2060,
            "Damage": 137,
            "AtkSpeed": 0.83,
            "img": "./img/garrosh.png"
        },
        {
            "Id": 24,
            "Name": "Gazlowe",
            "Type": "Melee",
            "Role": "Specialist",
            "Franchise": "Warcraft",
            "Health": 1826,
            "Damage": 95,
            "AtkSpeed": 1.25,
            "img": "./img/gazlowe.png"
        },
        {
            "Id": 25,
            "Name": "Genji",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Overwatch",
            "Health": 1620,
            "Damage": 44,
            "AtkSpeed": 1,
            "img": "./img/genji.png"
        },
        {
            "Id": 26,
            "Name": "Greymane",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 1876,
            "Damage": 140,
            "AtkSpeed": 1,
            "img": "./img/greymane.png"
        },
        {
            "Id": 27,
            "Name": "Gul'dan",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 1700,
            "Damage": 60,
            "AtkSpeed": 1,
            "img": "./img/guldan.png"
        },
        {
            "Id": 28,
            "Name": "Hanzo",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Overwatch",
            "Health": 1323,
            "Damage": 173,
            "AtkSpeed": 0.66,
            "img": "./img/hanzo.png"
        },
        {
            "Id": 29,
            "Name": "Illidan",
            "Type": "Melee",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 1650,
            "Damage": 78,
            "AtkSpeed": 1.82,
            "img": "./img/illidan.png"
        },
        {
            "Id": 30,
            "Name": "Jaina",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 1365,
            "Damage": 60,
            "AtkSpeed": 1,
            "img": "./img/jaina.png"
        },
        {
            "Id": 31,
            "Name": "Johanna",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Diablo",
            "Health": 2350,
            "Damage": 99,
            "AtkSpeed": 0.91,
            "img": "./img/johanna.png"
        },
        {
            "Id": 32,
            "Name": "Junkrat",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Overwatch",
            "Health": 1350,
            "Damage": 110,
            "AtkSpeed": 1,
            "img": "./img/junkrat.png"
        },
        {
            "Id": 33,
            "Name": "Kael'Thas",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 1520,
            "Damage": 65,
            "AtkSpeed": 1.11,
            "img": "./img/kaelthas.png"
        },
        {
            "Id": 34,
            "Name": "Kel'Thuzad",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 1445,
            "Damage": 72,
            "AtkSpeed": 1,
            "img": "./img/kelthuzad.png"
        },
        {
            "Id": 35,
            "Name": "Kerrigan",
            "Type": "Melee",
            "Role": "Assassin",
            "Franchise": "Starcraft",
            "Health": 1680,
            "Damage": 120,
            "AtkSpeed": 1.25,
            "img": "./img/kerrigan.png"
        },
        {
            "Id": 36,
            "Name": "Kerrigan",
            "Type": "Melee",
            "Role": "Support",
            "Franchise": "Diablo",
            "Health": 2027,
            "Damage": 60,
            "AtkSpeed": 2,
            "img": "./img/kharazim.png"
        },
        {
            "Id": 37,
            "Name": "Leoric",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Diablo",
            "Health": 2468,
            "Damage": 109,
            "AtkSpeed": 0.77,
            "img": "./img/leoric.png"
        },
        {
            "Id": 38,
            "Name": "Li-Li",
            "Type": "Ranged",
            "Role": "Support",
            "Franchise": "Warcraft",
            "Health": 1475,
            "Damage": 60,
            "AtkSpeed": 1.25,
            "img": "./img/li-li.png"
        },
        {
            "Id": 39,
            "Name": "Li-Ming",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Diablo",
            "Health": 1232,
            "Damage": 63,
            "AtkSpeed": 1,
            "img": "./img/li-ming.png"
        },
        {
            "Id": 40,
            "Name": "Lt. Morales",
            "Type": "Ranged",
            "Role": "Support",
            "Franchise": "Starcraft",
            "Health": 1472,
            "Damage": 83,
            "AtkSpeed": 1,
            "img": "./img/lt-morales.png"
        },
        {
            "Id": 41,
            "Name": "Lucio",
            "Type": "Ranged",
            "Role": "Support",
            "Franchise": "Overwatch",
            "Health": 1442,
            "Damage": 23,
            "AtkSpeed": 0.80,
            "img": "./img/lucio.png"
        },
        {
            "Id": 42,
            "Name": "Lunara",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 1430,
            "Damage": 90,
            "AtkSpeed": 1.11,
            "img": "./img/lunara.png"
        },
        {
            "Id": 43,
            "Name": "Maiev",
            "Type": "Melee",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 2021,
            "Damage": 145,
            "AtkSpeed": 1.11,
            "img": "./img/maiev.png"
        },
        {
            "Id": 44,
            "Name": "Malfurion",
            "Type": "Ranged",
            "Role": "Support",
            "Franchise": "Warcraft",
            "Health": 1525,
            "Damage": 60,
            "AtkSpeed": 1.11,
            "img": "./img/malfurion.png"
        },
        {
            "Id": 45,
            "Name": "Malthael",
            "Type": "Melee",
            "Role": "Assassin",
            "Franchise": "Diablo",
            "Health": 1962,
            "Damage": 82,
            "AtkSpeed": 0.91,
            "img": "./img/malthael.png"
        },
        {
            "Id": 46,
            "Name": "Medivh",
            "Type": "Ranged",
            "Role": "Specialist",
            "Franchise": "Warcraft",
            "Health": 1470,
            "Damage": 80,
            "AtkSpeed": 1.11,
            "img": "./img/medivh.png"
        },
        {
            "Id": 47,
            "Name": "Muradin",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Warcraft",
            "Health": 2765,
            "Damage": 88,
            "AtkSpeed": 1.11,
            "img": "./img/muradin.png"
        },
        {
            "Id": 48,
            "Name": "Murky",
            "Type": "Melee",
            "Role": "Specialist",
            "Franchise": "Warcraft",
            "Health": 730,
            "Damage": 60,
            "AtkSpeed": 1.25,
            "img": "./img/murky.png"
        },
        {
            "Id": 49,
            "Name": "Nazeebo",
            "Type": "Ranged",
            "Role": "Specialist",
            "Franchise": "Diablo",
            "Health": 1502,
            "Damage": 88,
            "AtkSpeed": 1.11,
            "img": "./img/nazeebo.png"
        },
        {
            "Id": 50,
            "Name": "Nova",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Starcraft",
            "Health": 1300,
            "Damage": 105,
            "AtkSpeed": 1,
            "img": "./img/nova.png"
        },
        {
            "Id": 51,
            "Name": "Probius",
            "Type": "Ranged",
            "Role": "Specialist",
            "Franchise": "Starcraft",
            "Health": 1310,
            "Damage": 34,
            "AtkSpeed": 1.11,
            "img": "./img/probius.png"
        },
        {
            "Id": 52,
            "Name": "Ragnaros",
            "Type": "Melee",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 2000,
            "Damage": 171,
            "AtkSpeed": 0.83,
            "img": "./img/ragnaros.png"
        },
        {
            "Id": 53,
            "Name": "Raynor",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Starcraft",
            "Health": 1302,
            "Damage": 122,
            "AtkSpeed": 1.25,
            "img": "./img/raynor.png"
        },
        {
            "Id": 54,
            "Name": "Rehgar",
            "Type": "Melee",
            "Role": "Support",
            "Franchise": "Warcraft",
            "Health": 2132,
            "Damage": 125,
            "AtkSpeed": 1.25,
            "img": "./img/rehgar.png"
        },
        {
            "Id": 55,
            "Name": "Rexxar",
            "Type": "Ranged",
            "Role": "Warrior",
            "Franchise": "Warcraft",
            "Health": 1795,
            "Damage": 103,
            "AtkSpeed": 0.83,
            "img": "./img/rexxar.png"
        },
        {
            "Id": 56,
            "Name": "Samuro",
            "Type": "Melee",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 1725,
            "Damage": 110,
            "AtkSpeed": 1.67,
            "img": "./img/samuro.png"
        },
        {
            "Id": 57,
            "Name": "Sgt. Hammer",
            "Type": "Ranged",
            "Role": "Specialist",
            "Franchise": "Starcraft",
            "Health": 1720,
            "Damage": 140,
            "AtkSpeed": 1,
            "img": "./img/sgt-hammer.png"
        },
        {
            "Id": 58,
            "Name": "Sonya",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Diablo",
            "Health": 2435,
            "Damage": 84,
            "AtkSpeed": 1.25,
            "img": "./img/sonya.png"
        },
        {
            "Id": 59,
            "Name": "Stitches",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Warcraft",
            "Health": 3000,
            "Damage": 85,
            "AtkSpeed": 0.91,
            "img": "./img/stitches.png"
        },
        {
            "Id": 60,
            "Name": "Stukov",
            "Type": "Melee",
            "Role": "Support",
            "Franchise": "Starcraft",
            "Health": 1682,
            "Damage": 262,
            "AtkSpeed": 0.67,
            "img": "./img/stukov.png"
        },
        {
            "Id": 61,
            "Name": "Sylvanas",
            "Type": "Ranged",
            "Role": "Specialist",
            "Franchise": "Warcraft",
            "Health": 1425,
            "Damage": 90,
            "AtkSpeed": 1.67,
            "img": "./img/sylvanas.png"
        },
        {
            "Id": 62,
            "Name": "Tassadar",
            "Type": "Ranged",
            "Role": "Support",
            "Franchise": "Starcraft",
            "Health": 1287,
            "Damage": 14,
            "AtkSpeed": 4,
            "img": "./img/tassadar.png"
        },
        {
            "Id": 63,
            "Name": "The Butcher",
            "Type": "Melee",
            "Role": "Assassin",
            "Franchise": "Diablo",
            "Health": 2154,
            "Damage": 130,
            "AtkSpeed": 1.11,
            "img": "./img/the-butcher.png"
        },
        {
            "Id": 64,
            "Name": "The Lost Vikings",
            "Type": "Ranged",
            "Role": "Specialist",
            "Franchise": "Blizzard",
            "Health": 3286,
            "Damage": 185,
            "AtkSpeed": 2.87,
            "img": "./img/the-lost-vikings.png"
        },
        {
            "Id": 65,
            "Name": "Thrall",
            "Type": "Melee",
            "Role": "Specialist",
            "Franchise": "Warcraft",
            "Health": 1876,
            "Damage": 173,
            "AtkSpeed": 0.91,
            "img": "./img/thrall.png"
        },
        {
            "Id": 66,
            "Name": "Tracer",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Overwatch",
            "Health": 1280,
            "Damage": 28,
            "AtkSpeed": 8,
            "img": "./img/tracer.png"
        },
        {
            "Id": 67,
            "Name": "Tychus",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Starcraft",
            "Health": 1925,
            "Damage": 48,
            "AtkSpeed": 4,
            "img": "./img/tychus.png"
        },
        {
            "Id": 68,
            "Name": "Tyrael",
            "Type": "Melee",
            "Role": "Warrior",
            "Franchise": "Diablo",
            "Health": 2468,
            "Damage": 78,
            "AtkSpeed": 1.25,
            "img": "./img/tyrael.png"
        },
        {
            "Id": 69,
            "Name": "Tyrande",
            "Type": "Ranged",
            "Role": "Support",
            "Franchise": "Warcraft",
            "Health": 1511,
            "Damage": 82,
            "AtkSpeed": 1.33,
            "img": "./img/tyrande.png"
        },
        {
            "Id": 70,
            "Name": "Uther",
            "Type": "Melee",
            "Role": "Support",
            "Franchise": "Warcraft",
            "Health": 2156,
            "Damage": 75,
            "AtkSpeed": 1,
            "img": "./img/uther.png"
        },
        {
            "Id": 71,
            "Name": "Valeera",
            "Type": "Melee",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 2047,
            "Damage": 79,
            "AtkSpeed": 2,
            "img": "./img/valeera.png"
        },
        {
            "Id": 72,
            "Name": "Valla",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Diablo",
            "Health": 1273,
            "Damage": 75,
            "AtkSpeed": 1.67,
            "img": "./img/valla.png"
        },
        {
            "Id": 73,
            "Name": "Varian",
            "Type": "Melee",
            "Role": "Multiclass",
            "Franchise": "Warcraft",
            "Health": 1924,
            "Damage": 74,
            "AtkSpeed": 1.25,
            "img": "./img/varian.png"
        },
        {
            "Id": 74,
            "Name": "Xul",
            "Type": "Melee",
            "Role": "Specialist",
            "Franchise": "Diablo",
            "Health": 2000,
            "Damage": 110,
            "AtkSpeed": 1.20,
            "img": "./img/xul.png"
        },
        {
            "Id": 75,
            "Name": "Zagara",
            "Type": "Ranged",
            "Role": "Specialist",
            "Franchise": "Starcraft",
            "Health": 1575,
            "Damage": 82,
            "AtkSpeed": 1.25,
            "img": "./img/zagara.png"
        },
        {
            "Id": 76,
            "Name": "Zarya",
            "Type": "Ranged",
            "Role": "Warrior",
            "Franchise": "Overwatch",
            "Health": 2292,
            "Damage": 20,
            "AtkSpeed": 4,
            "img": "./img/zarya.png"
        },
        {
            "Id": 77,
            "Name": "Zeratul",
            "Type": "Melee",
            "Role": "Assassin",
            "Franchise": "Starcraft",
            "Health": 1622,
            "Damage": 126,
            "AtkSpeed": 1.11,
            "img": "./img/zeratul.png"
        },
        {
            "Id": 78,
            "Name": "Zul'jin",
            "Type": "Ranged",
            "Role": "Assassin",
            "Franchise": "Warcraft",
            "Health": 1875,
            "Damage": 94,
            "AtkSpeed": 1.25,
            "img": "./img/zuljin.png"
        }
      ],

      currMyTeam : [],
      currOpTeam : [],
    }

  }

  pickHero(hero){
    if(this.state.currMyTeam.indexOf(hero) === -1){
      if(this.state.currMyTeam.length < 5){
        this.setState({
          currMyTeam: [...this.state.currMyTeam, hero]
        })
      }
    }
  }

  pickOpponent(hero){
    if(this.state.currOpTeam.indexOf(hero) === -1){
      if(this.state.currOpTeam.length < 5){
        this.setState({
          currOpTeam: [...this.state.currOpTeam, hero]
        })
      }
    }
  }
  // onContextMenu

  removeMTHero(hero){
    let filtered = this.state.currMyTeam.filter(i => i.Id !== hero.Id)
    this.setState({currMyTeam: filtered})
  }

  removeOTHero(hero){
    
    let filtered = this.state.currOpTeam.filter(i => i.Id !== hero.Id)
    this.setState({currOpTeam: filtered})
  }

  // filtering

  filterByRole(role){
    let filtered = this.state.originalList.filter(i => i.Role === role)
    this.setState({heroesList: filtered})
  }

  filterByType(type){
    let filtered = this.state.originalList.filter(i => i.Type === type)
    this.setState({heroesList: filtered})
  }

  filterByFranchise(franchise){
    let filtered = this.state.originalList.filter(i => i.Franchise === franchise)
    this.setState({heroesList: filtered})
  }

  filterReset(){
    this.setState({heroesList: this.state.originalList})
  }

  resetMyTeam(){
      this.setState({
          currMyTeam: []
      })
  }

  resetOpTeam(){
      this.setState({
          currOpTeam: []
      })
  }

  render() {
    return (
      <div className="App">
        <div className="main">
            <h1>Heroes Of The Storm, Team Info App</h1>
            <div className="MainTop">
                    <Filters
                    role={this.filterByRole.bind(this)}
                    type={this.filterByType.bind(this)}
                    franchise={this.filterByFranchise.bind(this)}
                    reset={this.filterReset.bind(this)}
                    />
            </div>
            <div className="wrapper">
                <div className="MainLeft">
                    <Heroes 
                      list={this.state.heroesList} 
                      picked={this.pickHero.bind(this)} 
                      oppicked={this.pickOpponent.bind(this)}
                    />
                </div>
                <div className="MainRight">
                    <div className="teamwrapper">
                        <MyTeam 
                          team={this.state.currMyTeam} 
                          remove={this.removeMTHero.bind(this)}
                          currTeam={this.state.currMyTeam}
                          resetTeam={this.resetMyTeam.bind(this)}
                        />
                        <OpTeam 
                          team={this.state.currOpTeam} 
                          remove={this.removeOTHero.bind(this)}
                          currTeam={this.state.currOpTeam}
                          resetTeam={this.resetOpTeam.bind(this)}
                        />
                    </div>
                    <InfoBar 
                      myteam={this.state.currMyTeam} 
                      opteam={this.state.currOpTeam}
                    />
                </div>
            </div>
        </div>
        <div className="footer">
            <p>2018 - Made by Jexulie.</p>
            <p>I Do NOT Own Any Pictures and Characters On This Page.</p>
            <p>Heroes Of The Storm Game Made by Blizzard Entertainment.</p>
        </div>
      </div>
    );
  }
}

export default App;
