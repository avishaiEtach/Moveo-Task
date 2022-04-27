
import _tambourine_shake_higher from './Loop files/_tambourine_shake_higher.mp3';
import  ALL_TRACK  from './Loop files/ALL TRACK.mp3';
import B_VOC from './Loop files/B VOC.mp3';
import DRUMS from './Loop files/DRUMS.mp3';
import HE_HE_VOC from './Loop files/HE HE VOC.mp3';
import HIGH_VOC from './Loop files/HIGH VOC.mp3';
import JIBRISH from './Loop files/JIBRISH.mp3';
import LEAD_1 from './Loop files/LEAD 1.mp3';
import UUHO_VOC from './Loop files/UUHO VOC.mp3';


export const audioClips = [
    {sound : new Audio(_tambourine_shake_higher) , label : '_tambourine_shake_higher', mute  : false },
    {sound :  new Audio(ALL_TRACK ), label : 'ALL_TRACK' , mute  : false},
    {sound :  new Audio(B_VOC ), label : 'B_VOC' , mute  : false},
    {sound :  new Audio(DRUMS) , label : 'DRUMS' , mute  : false},
    {sound :  new Audio(HE_HE_VOC) , label : 'HE_HE_VOC', mute  : false },
    {sound :  new Audio(HIGH_VOC) , label : 'HIGH_VOC', mute  : false },
    {sound :  new Audio(JIBRISH) , label : 'JIBRISH', mute  : false },
    {sound :  new Audio(LEAD_1 ), label : 'LEAD_1' , mute  : false},
    {sound :  new Audio(UUHO_VOC) , label : 'UUHO_VOC' , mute  : false},
]

