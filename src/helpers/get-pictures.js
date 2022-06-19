import bobaFettPicture from '../resources/images/characters/Boba Fett.webp';
import chewbaccaPicture from '../resources/images/characters/Chewbacca.jpeg';
import darthVaderPicture from '../resources/images/characters/Darth Vader.jpg';
import hanSoloPicture from '../resources/images/characters/Han Solo.webp';
import jabbaTheHutPicture from '../resources/images/characters/Jabba the hut.jpeg';
import leiaOrganaPicture from '../resources/images/characters/Leia Organa.webp';
import lukeSkywalerPicture from '../resources/images/characters/Luke Skywalker.webp';
import palpatinePicture from '../resources/images/characters/palpatine.jpg';
import r2d2Picture from '../resources/images/characters/R2D2.webp';
import c3poPicture from '../resources/images/characters/c3po.jpeg';

import noImage from '../resources/images/no-images/Star_Wars_Logo.png';

import alderaanPicture from '../resources/images/planets/Alderaan.webp';
import bespinPicture from '../resources/images/planets/Bespin.webp';
import coruscantPicture from '../resources/images/planets/Coruscant.webp';
import dagobahPicture from '../resources/images/planets/Dagobah.webp';
import endorPicture from '../resources/images/planets/Endor.webp';
import hothPicture from '../resources/images/planets/Hoth.webp';
import mustafarPicture from '../resources/images/planets/Mustafar.webp';
import nabooPicture from '../resources/images/planets/Naboo.webp';
import tatooinePicture from '../resources/images/planets/Tatooine.webp';
import yavinPicture from '../resources/images/planets/Yavin.webp';

import aWingPicture from '../resources/images/starships/A-wing.webp';
import bWingPicture from '../resources/images/starships/B-wing.webp';
import calamariCrusierPicture from '../resources/images/starships/calamari cruiser.jpeg';
import corelianCorvettePicture from '../resources/images/starships/corelian corvette.webp';
import deathStarPicture from '../resources/images/starships/death star.webp';
import destructorPicture from '../resources/images/starships/destructor.webp';
import millenniumFalconPicture from '../resources/images/starships/millennium falcon.jpg';
import tiePicture from '../resources/images/starships/tie.webp';
import xWingPicture from '../resources/images/starships/x-wing.jpg';
import yWingPicture from '../resources/images/starships/Y-Wing.jpeg';

const charactersPictures = {
  'Boba Fett': bobaFettPicture,
  'Chewbacca': chewbaccaPicture,
  'Darth Vader': darthVaderPicture,
  'Han Solo': hanSoloPicture,
  'Jabba Desilijic Tiure': jabbaTheHutPicture,
  'C-3PO': c3poPicture,
  'Leia Organa': leiaOrganaPicture,
  'Luke Skywalker': lukeSkywalerPicture,
  'Palpatine': palpatinePicture,
  'R2-D2': r2d2Picture,
};

const planetsPictures = {
  'Alderaan': alderaanPicture,
  'Bespin': bespinPicture,
  'Coruscant': coruscantPicture,
  'Dagobah': dagobahPicture,
  'Endor': endorPicture,
  'Hoth': hothPicture,
  'Mustafar': mustafarPicture,
  'Naboo': nabooPicture,
  'Tatooine': tatooinePicture,
  'Yavin IV': yavinPicture
};

const starshipsPictures = {
  'A-wing': aWingPicture,
  'B-wing': bWingPicture,
  'Calamari Cruiser': calamariCrusierPicture,
  'Y-wing': yWingPicture,
  'X-wing': xWingPicture,
  'CR90 corvette': corelianCorvettePicture,
  'Death Star': deathStarPicture,
  'Star Destroyer': destructorPicture,
  'Millennium Falcon': millenniumFalconPicture,
  'TIE Advanced x1': tiePicture
}

export const getCharactesPicture = (name) => charactersPictures[name] || noImage;
export const getPlanetsPicture = (name) => planetsPictures[name] || noImage;
export const getStarshipsPicture = (name) => starshipsPictures[name] || noImage;