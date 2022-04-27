{/* <div className="looper-media">
          {audioClips.map((audioClip,index) =>
            <div className="audio-clip" key={audioClip.label} style={{backgroundColor:colors[index],width:audioDuration*25}} >
              <button  className="salice" onClick={()=>{mute(index)}}>
                {audioClip.mute  ? <VolumeOffIcon/> : <VolumeUpIcon/> }
                </button>
              <p>{audioClip.label}</p>
              </div>
            )}
            <div  style={{left}}  className="line"></div>
            </div> */}

import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

 export function LooperMedia ({audioClips,mute,left,colors ,audioDuration}) {
     return (
          <div className="looper-media">
          {audioClips.map((audioClip,index) =>
            <div className="audio-clip" key={audioClip.label} style={{backgroundColor:colors[index],width:audioDuration*25}} >
              <button  className="salice" onClick={()=>{mute(index)}}>
                {audioClip.mute  ? <VolumeOffIcon/> : <VolumeUpIcon/> }
                </button>
              <p>{audioClip.label}</p>
              </div>
            )}
            <div  style={{left}}  className="line"></div>
            </div> 
     )
 }