
import * as React from 'react';
import { useState } from 'react';
import {View, Text, Button, Alert, StyleSheet, TouchableOpacity, } from 'react-native';
import { CustomPicker } from 'react-native-custom-picker'
 
const carMakerNames = [
  {
    index: '0',
    makerName: 'Ashok Leyland',
    models: [
      {
        index: '0', 
        modelName: 'Dost', 
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
        ]
      },
      {
        index: '1', 
        modelName: 'Stile', 
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
        ]
      },
    ]
  },
  {
    index: '1',
    makerName: 'Audi',
    models: [
      { 
        index: '0',
        modelName: 'A3', 
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.4L','1.8L']},
        ]
      },
      {
        index: '1',
        modelName: 'A3 (8P7)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.6L Tdi','1.9L Tdi','2.0L Tdi']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L Tfsi','1.4 Tfsi','1.6L','1.8L Tfsi','2.0L Tfsi']},
        ]
      },
      {
        index: '2',
        modelName: 'A3 (8V7)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.6 Tdi','2.0 Tdi']},
          {index:'1', variantName: 'Petrol', modifications: ['1.4 Tfsi','1.8 Tfsi','1.8 Tfsi Quattro']},
        ]
      },
      {
        index: '3',
        modelName: 'A3 Cabriolet',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.4L','1.8L']}
        ]
      },
      {
        index: '4',
        modelName: 'A4 (8E2, B6)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.9L Tdi','2.5L','2.5L Tdi']},
          {index:'1', variantName: 'Petrol', modifications: ['1.8L/T','2.0L','2.4L','3.0 Quadro','3.0L']},
        ]
      },
      {
        index: '5',
        modelName: 'A4 (8EC, B7)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.9 Tdi','2.0L Tdi','2.5 Tdi','3.0 Tdi Quattro']},
          {index:'1', variantName: 'Petrol', modifications: ['1.6L','1.8L T Quattro','2.0 Tfsi Quattro','2.0L','3.0 Quattro']},
        ]
      },
      {
        index: '6',
        modelName: 'A4 (8W, B9)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.4L Tfsi']},
        ]
      },
      {
        index: '7',
        modelName: 'A4 (8k2, B8)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0 Tdi Quattro','2.0L Tdi','2.7L Tdi','3.0L Tdi','3.0L Tdi Quattro']},
          {index:'1', variantName: 'Petrol', modifications: ['2.0L Tfsi','2.0L Tfsi Quattro','3.0L Tfsi Quattro','3.2 Fsi Quattro']},
        ]
      },
      {
        index: '8',
        modelName: 'A5',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
        ]
      },
      {
        index: '9',
        modelName: 'A5 Cabriolet',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
        ]
      },
      {
        index: '10',
        modelName: 'A6 (4F2, C6)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L','2.0L Tdi','2.7L','2.7L Tdi Quattro','3.0L Tdi','3.0L Tdi Quattro']},
          {index:'1', variantName: 'Petrol', modifications: ['2.0 Tfsi','2.8L Fsi','3.0L','3.2L','3.2 Fsi Quattro','4.2L','4.2L Fsi Quattro','4.2L Quattro','5.0L RS6 Quattro']},
        ]
      },
      {
        index: '11',
        modelName: 'A6 (4G2, C7)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L Tdi','3.0L Tdi','3.0L Tdi Quattro']},
          {index:'1', variantName: 'Petrol', modifications: ['2.0 Tfsi','2.8L Fsi Quattro','3.0L Tfsi Quattro']},
        ]
      },
      {
        index: '12',
        modelName: 'A7',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['Default']},
          {index:'1', variantName: 'Petrol', modifications: ['1.6L Tdi','1.9L Tdi','2.0 Tdi','3.0 Quattro']},
        ]
      },
      {
        index: '13',
        modelName: 'A8 (4E)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['3.0L Tdi Quattro','4.2 Tdi Quattro']},
          {index:'1', variantName: 'Petrol', modifications: ['2.8L Fsi','3.2L Fsi Quattro','3.7L Quattro','4.2 Quattro','4.2L Fsi Quattro','6.0L W12 Quattro']},
        ]
      },
      {
        index: '14',
        modelName: 'A8 (4H)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['3.0L Tdi','3.0L Tdi Quattro','4.2L Tdi Quattro']},
          {index:'1', variantName: 'Petrol', modifications: ['3.0L Tfsi Quattro','4.0L Tfsi Quattro','4.2L Tfsi Quattro']},
        ]
      },
      {
        index: '15',
        modelName: 'Q3',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
        ]
      },
      {
        index: '16',
        modelName: 'Q3 (8U)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L Tdi','2.0L Tdi']},
          {index:'1', variantName: 'Petrol', modifications: ['1.4 Tfsi','2.0 Tfsi Quattro']},
        ]
      },
      {
        index: '17',
        modelName: 'Q5 (8R)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L Tdi','2.0L Tdi Quattro','3.0L Tdi Quattro']},
          {index:'1', variantName: 'Petrol', modifications: ['2.0 Hybrid Quattro','2.0 Tfsi Hybrid Quattro','2.0 Tfsi Quattro','3.0L Tfsi Quattro','3.2 Fsi Quattro']},
        ]
      },
      {
        index: '18',
        modelName: 'Q7 (4L)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['3.0L Tdi','4.2L Tdi','6.0L Tdi']},
          {index:'1', variantName: 'Petrol', modifications: ['3.0L Tfsi','3.6L Fsi','4.2L Fsi']},
        ]
      },
      {
        index: '19',
        modelName: 'R8',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['4.2L Fsi Quattro','5.2L Fsi Quattro']},
        ]
      },
      {
        index: '20',
        modelName: 'RS5',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['3.0L']},
        ]
      },
      {
        index: '21',
        modelName: 'S5',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['3.0L']},
        ]
      },
      {
        index: '22',
        modelName: 'TT',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L Tdi']},
          {index:'1', variantName: 'Petrol', modifications: ['2.0 Tfsi']},
        ]
      },
      {
        index: '23',
        modelName: 'TT (8J3)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.8L Tfsi','2.0L Tfsi','3.2L V6 Quattro']},
        ]
      },
      {
        index: '24',
        modelName: 'TT (8N3)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.8L T/Quadro','3.2L Vr6 Quadro']},
        ]
      },
    ]
  },
  {
    index: '2',
    makerName: 'BMW',
    models: [
      { 
        index: '0',
        modelName: '1 (F20)', 
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['118d 2.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['116i 1.6L']},
        ]
      },
      {
        index: '1',
        modelName: '3 (E90)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['320d 2.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['320i 2.0L','325i 2.5L','330i 3.0L']},
        ]
      },
      {
        index: '2',
        modelName: '3 (F30)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['320d 2.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['320i 2.0L','328i 2.0L']},
        ]
      },
      {
        index: '3',
        modelName: '3 (F80 M3)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['M3 3.0L']}
        ]
      },
      {
        index: '4',
        modelName: '3GT (F34)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['320d 2.0L']},
        ]
      },
      {
        index: '5',
        modelName: '4 (F82)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['M4 3.0L']},
        ]
      },
      {
        index: '6',
        modelName: '5 (E60)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['520d 2.0L','525d 3.0L','530d 3.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['523i 2.5L','525i 2.5L','530 3.0L']},
        ]
      },
      {
        index: '7',
        modelName: '5 (F10)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['520d 3.0L','525d 2.0L','525d 3.0L','530d 3.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['520i 2.0L','523i 2.5L','M5 4.4L']},
        ]
      },
      {
        index: '8',
        modelName: '5GT (F07)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['530d 3.0L']},
        ]
      },
      {
        index: '9',
        modelName: '6 (F06)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['640d 3.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['M6 4.4L']},
        ]
      },
      {
        index: '10',
        modelName: '6 (F13)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['M6 4.4L']},
        ]
      },
      {
        index: '11',
        modelName: '7 (F02)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['730d 3.0L','7L 3.0L Hybrid']},
        ]
      },
      {
        index: '12',
        modelName: '7 (G12)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['730d 3.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['750Li 3.0L']},
        ]
      },
      {
        index: '13',
        modelName: 'X1 (E84)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['20d 2.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['18i 2.0L']},
        ]
      },
      {
        index: '14',
        modelName: 'X1 (F48)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['20dx 2.0L']},
        ]
      },
      {
        index: '15',
        modelName: 'X3 (F25)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['20dx 2.0L','30dx 3.0L']},
        ]  
      },
      {
        index: '16',
        modelName: 'X5 (E70)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['3.0L']},
        ]
      },
      {
        index: '17',
        modelName: 'X5 M (F85)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['M 4.4L']},
        ]
      },
      {
        index: '18',
        modelName: 'X6 (E71)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['30dx 3.0L']},
        ]
      },
      {
        index: '19',
        modelName: 'X6 (F16)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['40dx 3.0L']},
        ]
      },
      {
        index: '20',
        modelName: 'X6 M (F86)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['M 4.4L']},
        ]
      },
      {
        index: '21',
        modelName: 'Z4 (E89)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['35i 3.0L']},
        ]
      },
      {
        index: '22',
        modelName: 'i8',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['i8 1.5L']},
        ]
      },
    ]    
  },
  {
    index: '3',
    makerName: 'Chevrolet',
    models: [
      {
        index: '0',
        modelName: 'Aveo',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.4L','1.6L']},
        ]
      },
      {
        index: '1',
        modelName: 'Aveo - U-VA',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.4L','1.6L']},
        ]
      },
      {
        index: '2',
        modelName: 'Beat',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
          {index:'2', variantName: 'LPG', modifications: ['1.2L']},
        ]
      },
      {
        index: '3',
        modelName: 'Captiva',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L','2.0L / 4wd','2.2L','2.2L / 4wd']},
        ]  
      },
      {
        index: '4',
        modelName: 'Captiva Refresh',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L','2.2L Awd']},
        ]
      },
      {
        index: '5',
        modelName: 'Cruze',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
        ]
      },
      {
        index: '6',
        modelName: 'Enjoy',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.4L']},
        ]
      },
      {
        index: '7',
        modelName: 'Forester',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['2.0L']},
        ]
      },
      {
        index: '8',
        modelName: 'Optra',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.6L','1.8L']},
        ]
      },
      {
        index: '9',
        modelName: 'Optra Magnum',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['2.0L']},
        ]
      },
      {
        index: '10',
        modelName: 'Optra S-Rv',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.6L']},
        ]
      },
      {
        index: '11',
        modelName: 'SAIL',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '12',
        modelName: 'SAIL Hatchback',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '13',
        modelName: 'Spark',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['0.8L','1.0L']},
        ]
      },
      {
        index: '14',
        modelName: 'Tavera',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L','2.5L']},
        ]  
      },
      {
        index: '15',
        modelName: 'Trailblazer',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.8L 2wd']},
        ]
      },
    ]
  },
  {
    index: '4',
    makerName: 'Datsun',
    models: [
      {
        index: '0',
        modelName: 'GO',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '1',
        modelName: 'Go +',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '2',
        modelName: 'Redigo',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['0.8L']},
        ]
      },
    ]
  },
  {
    index: '5',
    makerName: 'Daweoo',
    models: [
      {
        index: '0',
        modelName: 'Cielo Saloon',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.5L']},
        ]
      },
      {
        index: '1',
        modelName: 'Matiz',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['0.8L','1.0L']},
        ]
      },
    ]
  },
  {
    index: '6',
    makerName: 'Fiat',
    models: [
      {
        index: '0',
        modelName: 'Abarath 595',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.4L']},
        ]
      },
      {
        index: '1',
        modelName: 'Abarath Punto',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.4L']},
        ]
      },
      {
        index: '2',
        modelName: 'Avventura',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.4L']},
        ]
      },
      {
        index: '3',
        modelName: 'Avventura Urban Cross',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.4L']},
        ]
      },
      {
        index: '4',
        modelName: 'EVO Pure',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '5',
        modelName: 'Grande Punto',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L','1.4L']},
        ]
      },
      {
        index: '6',
        modelName: 'Linea',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.4L']},
        ]
      },
      {
        index: '7',
        modelName: 'Palio',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L','1.9L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L','1.6L']},
        ]
      },
      {
        index: '8',
        modelName: 'Palio Adventure weekend',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.9L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.6L']},
        ]
      },
      {
        index: '9',
        modelName: 'Palio NV',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '10',
        modelName: 'Palio Stile',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.1L','1.6L']},
        ]
      },
      {
        index: '11',
        modelName: 'Petra',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.6L']},
        ]
      },
      {
        index: '12',
        modelName: 'Punto Evo',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '13',
        modelName: 'Siena',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.7L','1.9']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L','1.6L']},
        ]
      },
      {
        index: '14',
        modelName: 'Uno',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.7L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.0L','1.3L']},
        ]
      },
    ]
  },
  {
    index: '7',
    makerName: 'Ford',
    models: [
      {
        index: '0',
        modelName: 'Eco-Sport',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.6L']},
        ]
      },
      {
        index: '1',
        modelName: 'Endeavour',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.2L / MT','2.2L / AT','2.5L - 2 Wheel Drive','2.5L - 4 Wheel Drive','3.0L AT - 2 Wheel Drive','3.2L / AT']},
        ]
      },
      {
        index: '2',
        modelName: 'Fiesta',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L Zxi','1.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.5L','1.6L Sxi']},
        ]
      },
      {
        index: '3',
        modelName: 'Fiesta Classics',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.6L']},
        ]
      },
      {
        index: '4',
        modelName: 'Figo',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '5',
        modelName: 'Figo Aspire',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L','1.5L']},
        ]
      },
      {
        index: '6',
        modelName: 'Figo Nexgen',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L','1.5L']},
        ]
      },
      {
        index: '7',
        modelName: 'Fusion',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.6L']},
        ]
      },
      {
        index: '8',
        modelName: 'Ikon',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L','1.8L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.3L','1.6L']},
        ]
      },
      {
        index: '9',
        modelName: 'Mondeo',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['2.0L']},
        ]
      },
      {
        index: '10',
        modelName: 'Mustang GT',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['5.0L V8']},
        ]
      },
    ]
  },
  {
    index: '8',
    makerName: 'Honda',
    models: [
      {
        index: '0',
        modelName: 'Accord 6th Gen',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['2.3L','2.3L (AT)']},
        ]
      },
      {
        index: '1',
        modelName: 'Accord 7th Gen',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['2.4L','2.4L AT','3.0L AT']},
        ]
      },
      {
        index: '2',
        modelName: 'Accord 8th Gen',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['2.4L','2.4L AT','3.5L AT']},
        ]
      },
      {
        index: '3',
        modelName: 'Accord 8th Gen (Facelift)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['2.4L','2.4L AT','3.5L V6 AT']},
        ]
      },
      {
        index: '4',
        modelName: 'Accord Hybrid 9th Gen',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['2.0L Tech CVT Hybrid']},
        ]
      },
      {
        index: '5',
        modelName: 'Amaze 1st Gen',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L','1.2L AT','1.2L CNG']},
        ]
      },
      {
        index: '6',
        modelName: 'Amaze 1st Gen (Facelift)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
          {index:'2', variantName: 'CNG', modifications: ['1.2L','1.2L CVT']},
        ]
      },
      {
        index: '7',
        modelName: 'Amaze 2nd Gen',
        variants: [
          {index:'0', variantName: 'Hybrid', modifications: ['2.0L Tech CVT Hybrid']},
        ]
      },
      {
        index: '8',
        modelName: 'BR-V',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.5L','1.5L CVT']},
        ]
      },
      {
        index: '9',
        modelName: 'Brio 1st Gen',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.2L','1.2L AT','1.5L']},
        ]
      },
      {
        index: '10',
        modelName: 'Brio 1st Gen (Facelift)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.2L','1.2L AT']},
        ]
      },
      {
        index: '11',
        modelName: 'CR-V IV (RE) 4th Gen',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['2.0L','2.0L AT','2.4L AT']},
        ]
      },
      {
        index: '12',
        modelName: 'CR-V MK 3rd Gen',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['2.0L','2.4L','2.4L AT']},
        ]
      },
      {
        index: '13',
        modelName: 'CR-V 2nd Gen',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['2.0L AT','2.4L','2.4L AT']},
        ]
      },
      {
        index: '14',
        modelName: 'City (GM) 5th Gen',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.5L','1.5L AT']},
        ]
      },
      {
        index: '15',
        modelName: 'City 3rd Gen',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.3L','1.5L','1.5L AT']},
        ]
      },
      {
        index: '16',
        modelName: 'City 4th Gen',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.5L']},
        ]
      },
      {
        index: '17',
        modelName: 'City 8th Gen (Facelift)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.8L','1.8L AT']},
        ]
      },
      {
        index: '18',
        modelName: 'City Zx 4th Gen (Facelift)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.5L']},
        ]
      },
      {
        index: '19',
        modelName: 'Civic 8th Gen',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.8L','1.8L AT']},
        ]
      },
      {
        index: '20',
        modelName: 'Civic 8th Gen (Facelift)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.8L','1.8L AT']},
        ]
      },
      {
        index: '21',
        modelName: 'Civic 9th Gen',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['2.0L','2.0L AT']},
        ]
      },
      {
        index: '22',
        modelName: 'Jazz 1st Gen',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '23',
        modelName: 'Jazz 1st Gen (Facelift)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '24',
        modelName: 'Jazz 2nd Gen',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.2L','1.2L CVT']},
        ]
      },
      {
        index: '25',
        modelName: 'Mobilio',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.5L']},
        ]
      },
      {
        index: '26',
        modelName: 'WR-V',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.2L','1.5L']},
        ]
      },
    ]
  },
  {
    index: '9',
    makerName: 'Hyundai',
    models: [
      {
        index: '0',
        modelName: 'Accent',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.5L','1.6L']},
        ]
      },
      {
        index: '1',
        modelName: 'Creta',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L','1.6L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.6L']},
        ]
      },
      {
        index: '2',
        modelName: 'Elantra',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.8L']},
        ]
      },
      {
        index: '3',
        modelName: 'Eon',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['0.8L','1.0L']},
        ]
      },
      {
        index: '4',
        modelName: 'Fluidic Elantra',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.6L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.8L']},
        ]
      },
      {
        index: '5',
        modelName: 'Getz',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.1L','1.3L']},
        ]
      },
      {
        index: '6',
        modelName: 'Getz Prime',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.1L','1.3L']},
        ]
      },
      {
        index: '7',
        modelName: 'Grand i10',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.1L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.0L','1.2L']},
        ]
      },
      {
        index: '8',
        modelName: 'Grand i10 Facelift',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.2L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '9',
        modelName: 'Santa FE',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.2L']},
          {index:'1', variantName: 'Petrol', modifications: ['2.4L']},
        ]
      },
      {
        index: '10',
        modelName: 'Santro',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.0L','1.1L']},
        ]
      },
      {
        index: '11',
        modelName: 'Santro Xing',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.2L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.1L','2.4L']},
        ]
      },
      {
        index: '12',
        modelName: 'Sonata Embra',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['2.4L']},
        ]
      },
      {
        index: '13',
        modelName: 'Sonata FE-III',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.2L']},
        ]
      },
      {
        index: '14',
        modelName: 'Sonata Fluidic',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['2.4L']},
        ]
      },
      {
        index: '15',
        modelName: 'Sonata Gold (EF-B)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['2.0L','2.7L']},
        ]
      },
      {
        index: '16',
        modelName: 'Terracan',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.9L']},
        ]
      },
      {
        index: '17',
        modelName: 'Tucson 1st Gen',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L','2.0L (Turbo)']},
        ]
      },
      {
        index: '18',
        modelName: 'Tucson 2nd Gen',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['2.0','2.4L']},
        ]
      },
      {
        index: '19',
        modelName: 'Tucson 3rd Gen',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['2.0L']},
        ]
      },
      {
        index: '20',
        modelName: 'Verna',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L','1.6L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.6L']},
        ]
      },
      {
        index: '21',
        modelName: 'Verna Fluidic',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L','1.6L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.4L','1.6L']},
        ]
      },
      {
        index: '22',
        modelName: 'Xcent',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.1L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.0L','1.2L']},
        ]
      },
      {
        index: '23',
        modelName: 'i10',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.1L','1.2L']},
        ]
      },
      {
        index: '24',
        modelName: 'i10 Facelift',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.1L','1.2L']},
        ]
      },
      {
        index: '25',
        modelName: 'i20',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L','1.4L']},
        ]
      },
      {
        index: '26',
        modelName: 'i20 Active',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '27',
        modelName: 'i20 Elite',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
    ]
  },
  {
    index: '10',
    makerName: 'Isuzu',
    models: [
      {
        index: '0',
        modelName: 'D-Max',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['3.0L']},
        ]
      },
      {
        index: '1',
        modelName: 'Dmax Cross',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['3.0L']},
        ]
      },
      {
        index: '2',
        modelName: 'MU-7',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['3.0L Diesel']},
        ]
      },
      {
        index: '3',
        modelName: 'MUX',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['3.0L Diesel']},
        ]
      },
    ]
  },
  {   
    index: '11',
    makerName: 'Mahindra',
    models: [
      {
        index: '0',
        modelName: 'Bolero 1st Gen',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.5L']},
        ]
      },
      {
        index: '1',
        modelName: 'Bolero Camper',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.5L']}, 
        ]
      },
      {
        index: '2',
        modelName: 'Bolero Invader',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.5L']},
        ]
      },
      {
        index: '3',
        modelName: 'Bolero Pickup',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.5L']},
        ]
      },
      {
        index: '4',
        modelName: 'Commander',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.5L','2.5L 4*4']},
        ]
      },
      {
        index: '5',
        modelName: 'E20',
        variants: [
          {index:'0', variantName: 'Electric', modifications: ['Electric']},
        ]
      },
      {
        index: '6',
        modelName: 'E20 Plus',
        variants: [
          {index:'0', variantName: 'Electric', modifications: ['Electric']},
        ]
      },
      {
        index: '7',
        modelName: 'GIO',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['0.5L']},
        ]
      },
      {
        index: '8',
        modelName: 'Genio DC',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.5L']},
        ]
      },
      {
        index: '9',
        modelName: 'Genio SC',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.5L']},
        ]
      },
      {
        index: '10',
        modelName: 'Imperio DC',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.5L']},
        ]
      },
      {
        index: '11',
        modelName: 'Imperio SC',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.5L']},
        ]
      },
      {
        index: '12',
        modelName: 'Jeeto',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['Default']},
          {index:'1', variantName: 'Petrol', modifications: ['0.6L BS III','0.6L BS IV','0.6L CNG']},
        ]
      },
      {
        index: '13',
        modelName: 'Jeeto Mini Van',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['0.6L']},
        ]
      },
      {
        index: '14',
        modelName: 'KUV 100',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.2L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '15',
        modelName: 'KUV 100 Nxt',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.2L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '16',
        modelName: 'Marshal',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.5L']},
        ]
      },
      {
        index: '17',
        modelName: 'Maxi Truck',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.5L']},
          {index:'1', variantName: 'CNG', modifications: ['2.5L']},
        ]
      },
      {
        index: '18',
        modelName: 'Maximo Minivan',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['0.9L']},
        ]
      },
      {
        index: '19',
        modelName: 'Maximo Plus',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['0.9L']},
          {index:'1', variantName: 'Petrol/CNG', modifications: ['0.9L']},
        ]
      },
      {
        index: '20',
        modelName: 'Maxx',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.5L']},
        ]
      },
      {
        index: '21',
        modelName: 'Maxx Pickup',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.5L']},
        ]
      },
      {
        index: '22',
        modelName: 'Nuvo Sport',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
        ]
      },
      {
        index: '23',
        modelName: 'Quanto',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
        ]
      },
      {
        index: '24',
        modelName: 'Rexton',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.7L']},
        ]
      },
      {
        index: '25',
        modelName: 'Savari',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.5L']},
        ]
      },
      {
        index: '26',
        modelName: 'Scorpio 1st Gen',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.6L Crde','2.6L Turbo']},
          {index:'1', variantName: 'Petrol', modifications: ['2.2L']},
        ]
      },
      {
        index: '27',
        modelName: 'Scorpio 1st Gen Facelift',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.2L','2.5L','2.6L']},
        ]
      },
      {
        index: '28',
        modelName: 'Scorpio 2nd Gen',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.2L','2.5L']},
        ]
      },
      {
        index: '29',
        modelName: 'Scorpio 3rd Gen',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L','2.2L','2.5L',]},
        ]
      },
      {
        index: '30',
        modelName: 'Scorpio 3rd Gen Facelift',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.2L']},
        ]
      },
      {
        index: '31',
        modelName: 'Scorpio Getaway Ver 1',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.6L']},
        ]
      },
      {
        index: '32',
        modelName: 'Scorpio Getaway Ver 2',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.2L','2.5L']},
        ]
      },
      {
        index: '33',
        modelName: 'Scorpio Getaway Ver 3',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.2L']},
        ]
      },
      {
        index: '34',
        modelName: 'Supro',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['0.9L']},
        ]
      },
      {
        index: '35',
        modelName: 'Supro Cargo Van',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['0.9L','2.5L']},
        ]
      },
      {
        index: '36',
        modelName: 'Supro Mini Truck',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['0.9L']},
        ]
      },
      {
        index: '37',
        modelName: 'Supro Mini Van',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['0.9L']},
          {index:'1', variantName: 'Petrol/CNG', modifications: ['0.9L']},
        ]
      },
      {
        index: '38',
        modelName: 'Thar',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.5L']},
        ]
      },
      {
        index: '39',
        modelName: 'Tuv 300',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
        ]
      },
      {
        index: '40',
        modelName: 'Verito',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.4L']},
        ]
      },
      {
        index: '41',
        modelName: 'Verito Executive',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
        ]
      },
      {
        index: '42',
        modelName: 'Verito Facelift',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
        ]
      },
      {
        index: '43',
        modelName: 'Verito Vibe',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
        ]
      },
      {
        index: '44',
        modelName: 'XUV 500',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.2L','2.2L Awd']},
        ]
      },
      {
        index: '45',
        modelName: 'XUV 500 2nd Gen',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.2L','2.2L Awd']},
        ]
      },
      {
        index: '46',
        modelName: 'Xylo 1st Gen',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.5L']},
        ]
      },
      {
        index: '47',
        modelName: 'Xylo 2nd Gen',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.5L']},
        ]
      },
      {
        index: '48',
        modelName: 'Xylo 3rd Gen',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.2L','2.5L']},
        ]
      },
    ]
  },
  {
    index: '12',
    makerName: 'Maruti Suzuki',
    models: [
      {
        index: '0',
        modelName: '1000',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.0L']},
        ]
      },
      {
        index: '1',
        modelName: '800',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['0.8L (Type 2)','0.8 (Type 3)','0.8L 5 speed (Type2)','0.8L AT (Type 3)','0.8L Dx 4 speed']},
        ]
      },
      {
        index: '2',
        modelName: 'A-Star',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.0L','1.0L ABS Type 1']}
        ]
      },
      {
        index: '3',
        modelName: 'Alto',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['0.8L Type 1','0.8L Type 2','1.1L (Type 1)']}
        ]
      },
      {
        index: '4',
        modelName: 'Alto 800',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['0.8L','0.8L Airbag','0.8L CNG','0.8L CNG Airbag']}
        ]
      },
      {
        index: '5',
        modelName: 'Alto K10',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.0L Type 1']}
        ]
      },
      {
        index: '6',
        modelName: 'Baleno 1st Gen',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.6L (Type 1)','1.6L (Type 2)','1.6L (Type3)']}
        ]
      },
      {
        index: '7',
        modelName: 'Baleno 2nd Gen',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '8',
        modelName: 'Baleno Altura',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.6L (Type 1)','1.6L (Type 2)','1.6L (Type3)']}
        ]
      },
      {
        index: '9',
        modelName: 'Baleno RS',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.0L']}
        ]
      },
      {
        index: '10',
        modelName: 'Brezza',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L']},
        ]
      },
      {
        index: '11',
        modelName: 'Celerio',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.0L','1.0L / AT','1.0L CNG','1.0L Dual Airbag']}
        ]
      },
      {
        index: '12',
        modelName: 'Ciaz',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.4L']},
        ]
      },
      {
        index: '13',
        modelName: 'Eeco',
        variants: [
          {index:'0', variantName: 'CNG', modifications: ['1.2L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L','1.2L w/o AC','1.2L With AC']},
        ]
      },
      {
        index: '14',
        modelName: 'Ertiga',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.4L']},
        ]
      },
      {
        index: '15',
        modelName: 'Esteem',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.3L AT (Type 2)','1.5L Diesel (Type 2)']}
        ]
      },
      {
        index: '16',
        modelName: 'Grand Vitara',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['2.0L AT','2.0L MT']}
        ]
      },
      {
        index: '17',
        modelName: 'Gypsy',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.3L 4wd']}
        ]
      },
      {
        index: '18',
        modelName: 'Ignis',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '19',
        modelName: 'Kizashi',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['2.4L AT','2.4L MT']}
        ]
      },
      {
        index: '20',
        modelName: 'Omni 1st Gen',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['0.8L']}
        ]
      },
      {
        index: '21',
        modelName: 'Omni 2nd Gen',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['0.8L']}
        ]
      },
      {
        index: '22',
        modelName: 'Omni 3rd Gen',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['0.8L']}
        ]
      },
      {
        index: '23',
        modelName: 'Ritz',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '24',
        modelName: 'Ritz 2nd Gen',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L','1.3L ABS']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L','1.2L ABS','1.2L AT (Type 1)']},
        ]
      },
      {
        index: '25',
        modelName: 'S-Cross',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.6L']},
        ]
      },
      {
        index: '26',
        modelName: 'Stingray',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.0L','1.0L ABS']}
        ]
      },
      {
        index: '27',
        modelName: 'Super Carry',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['0.8L']},
        ]
      },
      {
        index: '28',
        modelName: 'Swift 1st Gen',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L (Type 2)','1.3L (Type 2) with ABS']},
          {index:'1', variantName: 'Petrol', modifications: ['1.3L (Type 1)']},
        ]
      },
      {
        index: '29',
        modelName: 'Swift 2nd Gen',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L Type 1']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L Type 1']},
        ]
      },
      {
        index: '30',
        modelName: 'Swift Dzire 1st Gen',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.3L']},
        ]
      },
      {
        index: '31',
        modelName: 'Swift Dzire 2nd Gen',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L (Type 1)']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L AT (Type 1)']},
        ]
      },
      {
        index: '32',
        modelName: 'Swift Dzire 3rd Gen',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '33',
        modelName: 'Sx4',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.6L (Type 1)','1.6L (Type 2)']}
        ]
      },
      {
        index: '34',
        modelName: 'Sx4 1st Facelift',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.6L']}
        ]
      },
      {
        index: '35',
        modelName: 'Sx4 2nd Facelift',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.6L']}
        ]
      },
      {
        index: '36',
        modelName: 'Versa',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.3L']}
        ]
      },
      {
        index: '37',
        modelName: 'Wagon R',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.1L','1.1L ABS']}
        ]
      },
      {
        index: '38',
        modelName: 'Zen',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.6L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.0L','1.0L AT']},
        ]
      },
      {
        index: '39',
        modelName: 'Zen 2nd Gen',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.6L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.0L']},
        ]
      },
      {
        index: '40',
        modelName: 'Zen Classic',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.6L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.0L','1.0L AT']},
        ]
      },
      {
        index: '41',
        modelName: 'Zen Estilo',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.1L W/o ABS','1.1L With ABS']}
        ]
      },
      {
        index: '42',
        modelName: 'Zen Estilo 2nd Gen',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.1L (Type 2) With ABS','1.1L (Type 2) W/o ABS','1.1L (Type 2)']}
        ]
      },
    ]
  },
  {
    index: '13',
    makerName: 'Mercedes Benz',
    models: [
      {
        index: '0',
        modelName: 'A Class (W176)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['180 CDI 1.8L','220 CDI 2.1L']},
        ]
      },
      {
        index: '1',
        modelName: 'B Class (W245)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['200 2.0L']},
        ]
      },
      {
        index: '2',
        modelName: 'B Class (W246)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['180 1.6L']},
        ]
      },
      {
        index: '3',
        modelName: 'C Class (CL 203)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['C200 Cdi 2.2L','C220 Cdi 2.2L','C30 CDI AMG 3.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['C160 Compressor 1.6L','C180 Compressor 1.8L','C200 CGI Compressor','C200 Compressor 1.8L','C230 2.5L','C230 Compressor 1.8L','C320 3.2L','C350 3.5L']},
        ]
      },
      {
        index: '4',
        modelName: 'C Class (W203)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['200 CDI 2.2L','220 CDI 2.2L']},
          {index:'1', variantName: 'Petrol', modifications: ['180 2.0L','180 Compressor 1.8L','200 Cgi 1.8L','200 Compressor 2.0L','230 Compressor 1.8L']},
        ]
      },
      {
        index: '5',
        modelName: 'C Class (W204)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['220 cdi 2.1L','250 Cdi 2.1L','320 Cdi 3.0L','350 Cdi 3.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['180 Compressor 1.6L','200 Compressor 1.8L','230 2.5L','280 3.0L']},
        ]
      },
      {
        index: '6',
        modelName: 'C Class (W205)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['180 BlueTEC 1.6L','200 BlueTEC 1.6L','220 BlueTEC 2.1L','250 BlueTEC 2.1L']},
          {index:'1', variantName: 'Petrol', modifications: ['180 1.6L','200 2.0L']},
        ]
      },
      {
        index: '7',
        modelName: 'CLA (C117)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['180 Cdi 1.5L','200 Cdi 1.8L','220 Cdi 2.1L']},
          {index:'1', variantName: 'Petrol', modifications: ['180 1.6L','200 1.6L','250 2.0L','45 AMG 2.0L']},
        ]
      },
      {
        index: '8',
        modelName: 'Cls (C219)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['320 Cdi 3.0L']},
        ]
      },
      {
        index: '9',
        modelName: 'DES Benz SLS AMG (C197)',
        variants: [
          {index:'0', variantName: 'Default', modifications: ['Default']},
        ]
      },
      {
        index: '10',
        modelName: 'E Class (W211)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['200 Cdi 2.2L','220 Cdi 2.1L','240 Cdi 2.7L','270 Cdi 2.7L','280 Cdi 3.2L','320 Cdi 3.0L','320 Cdi 3.2L']},
          {index:'1', variantName: 'Petrol', modifications: ['200 Compressor 1.8L','280 3.0L','320 3.2L Petrol','350 3.5L']},
        ]
      },
      {
        index: '11',
        modelName: 'E Class (W212)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['200 Cdi 2.1L','220 Cdi 2.1L','250 Cdi 2.1L','350 BlueTEC 3.0L','350 Cdi 3.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['250 Cgi 1.8L','300 3.0L','350 3.5L']},
        ]
      },
      {
        index: '12',
        modelName: 'E Class Cabriolet',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['E400 3.0L']},
        ]
      },
      {
        index: '13',
        modelName: 'E Class Coupe (C207)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['250 Cgi 1.8L']},
          {index:'1', variantName: 'Petrol', modifications: ['250 Cdi 2.2L']},
        ]
      },
      {
        index: '14',
        modelName: 'E63',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['5.5L AMG']},
        ]
      },
      {
        index: '15',
        modelName: 'G Class (W461)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['250 GD 2.5L','290 GD 2.9L','G 270 Cdi 2.7L','G 280 Cdi 3.0L','G 290 Tdi 2.9L','G 300 Cdi 3.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['230 GE 2.3L']},
        ]
      },
      {
        index: '16',
        modelName: 'G Class (W463)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['250 GD 2.5L','300 GD 3.0L','350 Turbo GD 3.4L','G270 Cdi 2.7L','G300 TD 3.0L','G320 Cdi 3.0L','G350 Cdi 3.0L','G400 Cdi 4.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['300 GE 3.0L','G320 3.2L','G36 AMG 3.6L','G500 5.0L','G500 E 4.9L','G55 AMG 5.5L','G550 5.5L','G63 AMG 5.5L']},
        ]
      },
      {
        index: '17',
        modelName: 'GL Class (W164)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['320 Cdi 3.0L','350 Cdi 3.0L','420 Cdi 4.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['450 4.7L','550 5.5L']},
        ]
      },
      {
        index: '18',
        modelName: 'GL Class (X166)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['3.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['400 4-Matic 3.0L','450 4.7L','500 4.7L','63 AMG 5.5L']},
        ]
      },
      {
        index: '19',
        modelName: 'GLA Class (X156)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['200 Cdi 2.1L','220 Cdi 2.1L']},
          {index:'1', variantName: 'Petrol', modifications: ['200 1.6L','250 2.0L','45 AMG 2.0L']},
        ]
      },
      {
        index: '20',
        modelName: 'GLC',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['220 CD 2.1L']},
          {index:'1', variantName: 'Petrol', modifications: ['300 3.0L']},
        ]
      },
      {
        index: '21',
        modelName: 'GLE',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['250 Cdi','350 Cdi']},
        ]
      },
      {
        index: '22',
        modelName: 'GLS',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['350d 3.0L','400 4Matric 3.0L']},
        ]
      },
      {
        index: '23',
        modelName: 'M Class (W163)',
        variants: [
          {index:'0', variantName: 'default', modifications: ['default']},
        ]
      },
      {
        index: '24',
        modelName: 'M Class (W164)',
        variants: [
          {index:'0', variantName: 'default', modifications: ['default']},
        ]
      },
      {
        index: '25',
        modelName: 'M Class (W166)',
        variants: [
          {index:'0', variantName: 'default', modifications: ['default']},
        ]
      },
      {
        index: '26',
        modelName: 'R-350',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['3.5L']},
        ]
      },
      {
        index: '27',
        modelName: 'S Class (W220)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['320 Cdi','400 Cdi']},
          {index:'1', variantName: 'Petrol', modifications: ['280 2.8L','320 3.2L','350 3.7L','430 4.3L']},
        ]
      },
      {
        index: '28',
        modelName: 'S Class (W221)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['320 Cdi 3.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['350 3.5L','450 4.7L']},
        ]
      },
      {
        index: '29',
        modelName: 'S Class (W222)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['350 BlueTEC 3.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['320 3.0L','400 3.5L','500 4.7L']},
        ]
      },
      {
        index: '30',
        modelName: 'SLC 43 AMG (R172)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['SLC-43 AMG 3.0L']},
        ]
      },
      {
        index: '31',
        modelName: 'SLK (R171)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['200 Compressor 1.8L','280 3.0L','350 3.5L','55 AMG 5.5L']},
        ]
      },
      {
        index: '32',
        modelName: 'SLK (R172)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['250 Cdi 2.1L']},
          {index:'1', variantName: 'Petrol', modifications: ['200 1.8L','250 1.8L','350 3.5L','55 AMG 5.5L']},
        ]
      },
    ]
  },
  {
    index: '14',
    makerName: 'Nissan',
    models: [
      {
        index: '0',
        modelName: 'Evalia',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
        ]
      },
      {
        index: '1',
        modelName: 'GT-R (R35)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['3.8 V6']},
        ]
      },
      {
        index: '2',
        modelName: 'Micra',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '3',
        modelName: 'Micra (K13K)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '4',
        modelName: 'Micra Active',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '5',
        modelName: 'Sunny (N17KK)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.5L']},
        ]
      },
      {
        index: '6',
        modelName: 'Sunny (N17K)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.5L']},
        ]
      },
      {
        index: '7',
        modelName: 'Teana (J32)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['2.5L']},
        ]
      },
      {
        index: '8',
        modelName: 'Teana (J31)',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['2.3L (230JM)']},
        ]
      },
      {
        index: '9',
        modelName: 'Terrano',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.6L']},
        ]
      },
      {
        index: '10',
        modelName: 'X-Trail (T30)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.2L']},
        ]
      },
      {
        index: '11',
        modelName: 'X-Trail (T31)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L Dci']},
        ]
      },
    ]
  },
  {
    index: '15',
    makerName: 'Renault',
    models: [
      {
        index: '0',
        modelName: 'Captur',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.5L']},
        ]
      },
      {
        index: '1',
        modelName: 'Duster',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.5L','1.6L']},
        ]
      },
      {
        index: '2',
        modelName: 'Fluence',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['2.0L']},
        ]
      },
      {
        index: '3',
        modelName: 'Koleos',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
        ]
      },
      {
        index: '4',
        modelName: 'Kwid',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['0.8L','1.0L']},
        ]
      },
      {
        index: '5',
        modelName: 'Lodgy',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
        ]
      },
      {
        index: '6',
        modelName: 'Logan',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.4L','1.6L CNG']},
        ]
      },
      {
        index: '7',
        modelName: 'Pulse',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '8',
        modelName: 'Scala',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.5L']},
        ]
      },
    ]
  },
  {
    index: '16',
    makerName: 'Skoda',
    models: [
      {
        index: '0',
        modelName: 'Fabia',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.2L','1.4L','1.6','1.9L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L','1.4L','1.6L']},
        ]
      },
      {
        index: '1',
        modelName: 'Kodiaq',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
        ]
      },
      {
        index: '2',
        modelName: 'Laura (1Z3)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.9L','2.0']},
          {index:'1', variantName: 'Petrol', modifications: ['1.8L','1.9L','2.0L']},
        ]
      },
      {
        index: '3',
        modelName: 'Octavia',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.4L','1.8L','2.0L Rs']},
        ]
      },
      {
        index: '4',
        modelName: 'Octavia (1U2)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.9L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.8L','2.0L']},
        ]
      },
      {
        index: '5',
        modelName: 'Octavia (5E3)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.8L','2.0L']},
        ]
      },
      {
        index: '6',
        modelName: 'Rapid',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.6L']},
        ]
      },
      {
        index: '7',
        modelName: 'Rapid (NA2)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.6L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.6L']},
        ]
      },
      {
        index: '8',
        modelName: 'Superb',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L/Tdi/AT']},
          {index:'1', variantName: 'Petrol', modifications: ['1.8L/MT/Tsi']},
        ]
      },
      {
        index: '9',
        modelName: 'Superb (3T4)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.9L','2.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.8L','2.0L']},
        ]
      },
      {
        index: '10',
        modelName: 'Superb Saloon (3U4)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.9L','2.0L','2.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['2.0L','2.4L V6']},
        ]
      },
      {
        index: '11',
        modelName: 'Yeti',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.6L','2.0L','2.0L 4*4']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L','1.4L','1.8L','1.8L 4*4']},
        ]
      },
    ]
  },
  {
    index: '17',
    makerName: 'Tata',
    models: [
      {
        index: '0',
        modelName: '207',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['3.0L']},
        ]
      },
      {
        index: '1',
        modelName: 'ACE Refresh',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['0.7L','0.8L (Turbo)']},
        ]
      },
      {
        index: '2',
        modelName: 'Ace',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['0.7L']},
        ]
      },
      {
        index: '3',
        modelName: 'Ace Refresh',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['0.7L','0.8']},
        ]
      },
      {
        index: '4',
        modelName: 'Ace Zip',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['0.6L']},
        ]
      },
      {
        index: '5',
        modelName: 'Aria',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.2L']},
        ]
      },
      {
        index: '6',
        modelName: 'Aria LET',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.2L']},
        ]
      },
      {
        index: '7',
        modelName: 'Bolt',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '8',
        modelName: 'Indica V2',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L','1.4L (Turbo)','1.4L (Turbomax)']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2','1.4L']},
        ]
      },
      {
        index: '9',
        modelName: 'Indica V2 Xeta',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.2L','1.4L']},
        ]
      },
      {
        index: '10',
        modelName: 'Indica Vista',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L','1.4L','1.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L','1.4L']},
        ]
      },
      {
        index: '11',
        modelName: 'Indica Vista Tech',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L','1.4L']},
        ]
      },
      {
        index: '12',
        modelName: 'Indigo',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.4L']},
        ]
      },
      {
        index: '13',
        modelName: 'Indigo CS',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '14',
        modelName: 'Indigo Marina',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.4L']},
        ]
      },
      {
        index: '15',
        modelName: 'Indigo Vista Refresh',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L','1.4L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.4L']},
        ]
      },
      {
        index: '16',
        modelName: 'Indigo XL',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.4L']},
        ]
      },
      {
        index: '17',
        modelName: 'Indigo eCs',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '18',
        modelName: 'Magic',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['0.6L','0.7L']},
          {index:'1', variantName: 'Petrol', modifications: ['0.7L']},
        ]
      },
      {
        index: '19',
        modelName: 'Magic IRIS',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['0.6L']},
        ]
      },
      {
        index: '20',
        modelName: 'Manza',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.4L']},
        ]
      },
      {
        index: '21',
        modelName: 'Manza Club Class',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.4L']},
        ]
      },
      {
        index: '22',
        modelName: 'Nano',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['0.6L']},
        ]
      },
      {
        index: '23',
        modelName: 'Nano GenX',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['0.6L']},
        ]
      },
      {
        index: '24',
        modelName: 'Nano Twist',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['0.6L',]},
        ]
      },
      {
        index: '25',
        modelName: 'Nexa',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '26',
        modelName: 'Safari',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.1L']},
          {index:'1', variantName: 'Petrol', modifications: ['2.0L']},
        ]
      },
      {
        index: '27',
        modelName: 'Safari Dicor',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.2L','3.0L']},
        ]
      },
      {
        index: '28',
        modelName: 'Safari Dicor Facelift',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.2L']},
        ]
      },
      {
        index: '29',
        modelName: 'Safari Srtrome',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.2L']},
        ]
      },
      {
        index: '30',
        modelName: 'Spacio',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['3.0L']},
        ]
      },
      {
        index: '31',
        modelName: 'Sumo',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L','3.0L']},
        ]
      },
      {
        index: '32',
        modelName: 'Sumo Gold',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['3.0L']},
        ]
      },
      {
        index: '33',
        modelName: 'Sumo Grande',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L','2.2L','2.2L (Defence)']},
        ]
      },
      {
        index: '34',
        modelName: 'Sumo Victa',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
        ]
      },
      {
        index: '35',
        modelName: 'Super Ace',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L']},
        ]
      },
      {
        index: '36',
        modelName: 'Telcoline',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
        ]
      },
      {
        index: '37',
        modelName: 'Tiago',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.1L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '38',
        modelName: 'Venture',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L']},
        ]
      },
      {
        index: '39',
        modelName: 'Winger',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
        ]
      },
      {
        index: '40',
        modelName: 'Xenon',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['3.0L']},
        ]
      },
      {
        index: '41',
        modelName: 'Xenon XT',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.2L']},
        ]
      },
      {
        index: '42',
        modelName: 'Zest',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.3L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
    ]
  },
  {
    index: '18',
    makerName: 'Toyota',
    models: [
      {
        index: '0',
        modelName: 'Camry Xv30',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['2.0L/AT','2.4L/MT','2.4L/AT','3.0L/AT']},
        ]
      },
      {
        index: '1',
        modelName: 'Camry Xv40',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['2.4L / AT','2.4L / MT','3.5L / AT']},
        ]
      },
      {
        index: '2',
        modelName: 'Camry Xv50',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['2.5L / AT / Hybrid','2.5L / AT']},
        ]
      },
      {
        index: '3',
        modelName: 'Corolla Atlis E140 (X gen)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L / MT']},
          {index:'1', variantName: 'Petrol', modifications: ['1.8L / AT','1.8L / MT']},
        ]
      },
      {
        index: '4',
        modelName: 'Corolla Atlis E170 (XI Gen)',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L / MT']},
          {index:'1', variantName: 'Petrol', modifications: ['1.8L / AT','1.8L / MT']},
        ]
      },
      {
        index: '5',
        modelName: 'Corolla Atlis E120',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.8L AT','1.8L / MT']},
        ]
      },
      {
        index: '6',
        modelName: 'Etios',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.5L']},
        ]
      },
      {
        index: '7',
        modelName: 'Etios Cross',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L','1.5L']},
        ]
      },
      {
        index: '8',
        modelName: 'Etios Liva',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '9',
        modelName: 'Etios Liva Facelift',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '10',
        modelName: 'Fortuner 1st Gen',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['3.0L / 4wd']},
        ]
      },
      {
        index: '11',
        modelName: 'Fortuner 1st Gen Facelift',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.5L / AT','2.5L / MT','3.0L / 2wd / AT','3.0L / 2wd / MT']},
        ]
      },
      {
        index: '12',
        modelName: 'Fortuner 2nd Gen',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.8L','2.8L / AT']},
          {index:'1', variantName: 'Petrol', modifications: ['2.7L','2.7L / AT']},
        ]
      },
      {
        index: '13',
        modelName: 'Innova',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['2.0L']},
        ]
      },
      {
        index: '14',
        modelName: 'Innova Crysta',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.4L','2.8L / AT']},
          {index:'1', variantName: 'Petrol', modifications: ['2.7L','2.7L / AT']},
        ]
      },
      {
        index: '15',
        modelName: 'Landcruiser',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['4.5L']},
        ]
      },
      {
        index: '16',
        modelName: 'Landcruiser J100',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['4.2L / AT','4.2L / MT']},
          {index:'1', variantName: 'Petrol', modifications: ['4.7L / AT']},
        ]
      },
      {
        index: '17',
        modelName: 'Landcruiser J120 Prado',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['3.0L / AT','3.0L / MT']},
          {index:'1', variantName: 'Petrol', modifications: ['4.0L / AT']},
        ]
      },
      {
        index: '18',
        modelName: 'Landcruiser J200',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['4.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['4.7L / V8']},
        ]
      },
      {
        index: '19',
        modelName: 'Landcruiser Prado J150',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['3.0L','3.0L 4wd']},
        ]
      },
      {
        index: '20',
        modelName: 'Platinum Etios',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.4L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.5L']},
        ]
      },
      {
        index: '21',
        modelName: 'Prius',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.8L / AT','1.8L / AT / Hybrid']},
        ]
      },
      {
        index: '22',
        modelName: 'Qualis',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L','2.4L']},
          {index:'1', variantName: 'Petrol', modifications: ['2.0L']},
        ]
      },
    ]
  },
  {
    index: '19',
    makerName: 'Vokswagon',
    models: [
      {
        index: '0',
        modelName: 'Ameo',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L']},
        ]
      },
      {
        index: '1',
        modelName: 'Gti',
        variants: [
          {index:'0', variantName: 'Petrol', modifications: ['1.8L']},
        ]
      },
      {
        index: '2',
        modelName: 'Tiguan',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
        ]
      },
      {
        index: '3',
        modelName: 'Touareg',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['3.0L V6 Diesel']},
        ]
      },
      {
        index: '4',
        modelName: 'Vento 1st Gen',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.6L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.6L']},
        ]
      },
      {
        index: '5',
        modelName: 'Vento 1st Gen - Facelift',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['1.5L AT','1.5L MT']},
          {index:'1', variantName: 'Petrol', modifications: ['1.2L','1.6L']},
        ]
      },
    ]
  },
  {
    index: '20',
    makerName: 'Volvo',
    models: [
      {
        index: '0',
        modelName: 'S60',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L','2.4L']},
          {index:'1', variantName: 'Petrol', modifications: ['2.0L']},
        ]
      },
      {
        index: '1',
        modelName: 'S60 Cross Country',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.4L']},
        ]
      },
      {
        index: '2',
        modelName: 'S80',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L','2.4L']},
          {index:'1', variantName: 'Petrol', modifications: ['2.4L','3.0L','4.4L']},
        ]
      },
      {
        index: '3',
        modelName: 'S90',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
        ]
      },
      {
        index: '4',
        modelName: 'V40',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.6L']},
        ]
      },
      {
        index: '5',
        modelName: 'V40 Cross Country',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['1.6L']},
        ]
      },
      {
        index: '6',
        modelName: 'XC 90',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L']},
          {index:'1', variantName: 'Petrol', modifications: ['4.4L']},
        ]
      },
      {
        index: '7',
        modelName: 'XC 60',
        variants: [
          {index:'0', variantName: 'Diesel', modifications: ['2.0L','2.4L']},
        ]
      },
    ]
  }
]

export default class HomeScreen extends React.Component {
  state = {
    makerNameIndex: '0',
    modelNameIndex: '0',
    variantNameIndex: '0',
  }
  render(){
    
    return (
      <View style={styles.mainContainer}>
      <View style={styles.mainSubContainer}>
        <View style={{flex: 1, width: '100%', }}>
          <View style={styles.headerContainer}>
            <Text style = {{fontSize: 18, paddingLeft:10, color:'grey'}} >Search spare parts by car</Text>
          </View>  
        </View>
        <View style={styles.searchFieldContainer}>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <CustomPicker
              placeholder={'Car Maker'}
              options={carMakerNames}
              modalAnimationType = 'slide'
              getLabel={item => item.makerName}
              fieldTemplate={this.renderField}
              optionTemplate={this.renderOption}
              headerTemplate={this.renderHeader}
              // Set flags here so that the next fields show default values
              onValueChange={value => {
                this.setState({makerNameIndex:value.index,modelNameIndex: '0',variantNameIndex: '0'}) 
              }}
            />
          </View> 
        </View>  
        <View style={styles.searchFieldContainer}>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <CustomPicker
              placeholder={'Model'}
              options={carMakerNames[this.state.makerNameIndex].models}
              modalAnimationType = 'slide'
              getLabel={item => item.modelName}            
              fieldTemplate={this.renderField}
              optionTemplate={this.renderOption}
              headerTemplate={this.renderHeader}
              // Set Flags here to make the next field contain default values.
              onValueChange={value => {
                this.setState({modelNameIndex:value.index,variantNameIndex:'0'})
              }}
            />
          </View>
        </View>
        <View style={styles.searchFieldContainer}>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <CustomPicker
              placeholder={'Variant'}
              options={carMakerNames[this.state.makerNameIndex].models[this.state.modelNameIndex].variants}
              getLabel={item => item.variantName}
              fieldTemplate={this.renderField}
              optionTemplate={this.renderOption}
              headerTemplate={this.renderHeader}
              onValueChange={value => {
                this.setState({variantNameIndex:value.index,})
              }}
            />
          </View>
        </View>
        <View style={styles.searchFieldContainer}>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <CustomPicker
              placeholder={'Modification'}
              options={carMakerNames[this.state.makerNameIndex].models[this.state.modelNameIndex].variants[this.state.variantNameIndex].modifications}
              getLabel={item => item}
              fieldTemplate={this.renderField}
              optionTemplate={this.renderOption}
              headerTemplate={this.renderHeader}
            />
          </View>
        </View>
        <View style={styles.searchButtonContainer}>
          <Button
            title = "search"
            color = 'black'
            onPress = {()=>{Alert.alert('Please Confirm!!')}}
          />     
        </View>    
      </View>
    </View>
    )
  }
  
  renderField(settings){
    const { selectedItem, defaultText, getLabel, clear } = settings
    return (
      <View >
        <View>
          {!selectedItem && <Text style={{fontSize: 18, color: 'grey',marginLeft: 10}}>{defaultText}</Text>}
          {selectedItem && (
            <View style={styles.innerContainer}>
              <TouchableOpacity style={styles.clearButton} onPress={clear}>
                <Text style={{ color: '#fff' }}>Clear</Text>
              </TouchableOpacity>
              <Text style={styles.text}>
                {getLabel(selectedItem)}
              </Text>
            </View>
          )}
        </View>
      </View>
    )
  }
  renderOption(settings){
    const { item, getLabel } = settings
    return (
      <View style={styles.optionContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.optionCircle} />
          <Text style={{fontSize: 22, alignSelf: 'flex-start' }}>{getLabel(item)}</Text>
        </View>
      </View>
    )
    }
  renderHeader(){
  return (
    <View style={styles.headerFooterContainer}>
      <Text style={{fontSize: 23, fontWeight: 'bold',}}>Select Car Maker</Text>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    //container for fieldName before search
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10
  },
  text: {
    //text of the search field      
    fontSize: 22,
    color: 'red',
    fontWeight: '500'
  },
  headerFooterContainer: {
    padding: 10,
    alignItems: 'center',
    borderBottomWidth:1,
    borderBottomColor:'gray',
  },
  clearButton: {
    backgroundColor: 'grey', 
    borderRadius: 5, 
    marginRight: 10, 
    padding: 5 
  },
  optionContainer: {
    padding: 10,
    //borderBottomColor: 'grey',
    //borderBottomWidth: 1
  },
  optionInnerContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  optionCircle: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderWidth: 2,
    borderRadius:10,
    borderColor: 'blue'

  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor:'#06d6a0',
    backgroundColor:'lightblue'
  },
  mainSubContainer: {
    //flex: 1,
    width: '88%',
    height: '60%',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginTop:'10%',
  },
  headerContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomWidth:1,
    borderBottomColor:'darkgray',
    
  },
  searchFieldContainer: {
    flex: 1,
    margin: 10,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor:'#06d6a0',
  },
  searchButtonContainer: {
    flex: 1.5,
    width: '70%',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    }
})
