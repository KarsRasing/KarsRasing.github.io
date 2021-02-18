var elementen = [
    'Aluminium',
    'Barium',
    'Calcium',
    'Chroom',
    'Goud',
    'Ijzer',
    'Kalium',
    'Cobalt',
    'Koper',
    'Kwik',
    'Lithium',
    'Lood',
    'Magnesium',
    'Mangaan',
    'Natrium',
    'Nikkel',
    'Platina',
    'Tin',
    'Titaan',
    'Uraan',
    'Zilver',
    'Zink',
    'Argon',
    'Boor',
    'Broom',
    'Chloor',
    'Fluor',
    'Fosfor',
    'Helium',
    'Jood',
    'Koolstof',
    'Krypton',
    'Neon',
    'Silicium',
    'Stikstof',
    'Waterstof',
    'Zuurstof',
    'Zwavel',
]

var colors = [
    'Al',
    'Ba',
    'Ca',
    'Cr',
    'Au',
    'Fe',
    'K',
    'Co',
    'Cu',
    'Hg',
    'Li',
    'Pb',
    'Mg',
    'Mn',
    'Na',
    'Ni',
    'Pt',
    'Sn',
    'Ti',
    'U',
    'Ag',
    'Zn',
    'Ar',
    'B',
    'Br',
    'Cl',
    'F',
    'P',
    'He',
    'I',
    'C',
    'Kr',
    'Ne',
    'Si',
    'N',
    'H',
    'O',
    'S',
]

var Namen [
    'Water', 'Methaan', 'Ammoniak', 'Koolstofdioxide', 'Koolstofmono-oxide', 'Ethanol', 'Glucose', 'Suiker (sacharose)', 'Waterstof', 'Zuurstof', 'Stikstof', 'Fluor', 'Chloor', 'Broom', 'Jood',
]

var Molf [
    'H<sub>2</sub>O (l)', 'CH<sub>4</sub> (g)', 'NH<sub>3</sub> (g)', 'CO<sub>2</sub> (g)', 'CO (g)', 'C<sub>2</sub>H<sub>6</sub>O (l)', 'C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (s)', 'C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> (s)', 'H<sub>2</sub> (g)',
]

function randomize() {
    var randomNumber = Math.floor(Math.random() * (elementen.length));
    document.getElementById('imageDisplay').innerHTML = elementen[randomNumber];
    document.getElementById('colorDisplay').innerHTML = colors[randomNumber];
}