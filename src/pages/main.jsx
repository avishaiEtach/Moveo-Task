import { useEffect, useRef, useState } from "react";
import { audioService } from "../services/audio.service";
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import StopOutlinedIcon from '@mui/icons-material/StopOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import {LooperMedia} from '../components/looper-media'


export const Main = () => {

  const [audioClips , setAudioClips]  = useState(null)
  const [audioDuration , setAudioDuration]  = useState(0)
  const [left,setleft] =  useState(80) ; /// var that moving the left possion of the line each time
  const [disable,setDisable] =  useState(false) ;
  const [loop,setLoop] =  useState(false) ;
  const colors = ['#F94144','#F3722C','#F8961E','#F9844A','#F9C74F','#90BE6D','#43AA8B','#4D908E','#577590']  /// colors palnte 


  const interval =  useRef() ; /// ref for intervale
  const loopRef = useRef(); /// ref for take the loop value
  loopRef.current = loop /// enter the loop value to the ref

  useEffect(()=>{
      getgetAudioClips();
      return () =>{
        clearInterval(interval.current);
      }
     },[])

     useEffect(()=>{
       if(!audioClips) return
       audioClips[0].sound.addEventListener('canplay',function(){
        setAudioDuration(prev=>prev=audioClips[0].sound.duration)
       })
     },[audioClips])

     const getgetAudioClips = async () => {      /// get the audio clip arry from the srevice 
                                                ///  and put the value in setAudioClips state var
      const clips  =  await audioService.getAudio();
      setAudioClips ( prev => prev = clips )
     }
     
     const mute = (index) => {   
      const audioClipsd =  audioClips.slice();
      audioClipsd[index].mute  = !audioClipsd[index].mute ;
      setAudioClips ( prev => prev = audioClipsd )
      if(audioClipsd[index].mute ){
        audioClipsd[index].sound.volume = 0;
      }else{
        audioClipsd[index].sound.volume = 1;
      }
     }  

     const playSound = () => {          /// start paly all audios and start the interval
       audioClips.forEach((audio) => {
        setleft(prev=>prev=80)
         setDisable(prev => prev= true)
         audio.sound.play()
      });
      const firstAudio =  audioClips.find( audio => {       /// find the first audio that not salice
       return !audio.mute 
      })
      firstAudio.sound.onplay = function() { 
        if(interval.current) clearInterval(interval.current);
        interval.current = setInterval(()=>{            /// start the intravl
          setleft(prev=>prev=(firstAudio.sound.currentTime*25)+80)
        },1000);
      }
      
      firstAudio.sound.onended = function() { 
        if(interval.current) clearInterval(interval.current);    /// stop the intravl and stop all audio  if loop is true strat over the audio ----> Loop
       if(loopRef.current){
        playSound()
       }else{
        stop()
       }
    };
    }
    
    const stop = () => {     /// stop paly all audio and stop the intreval
      audioClips.forEach(audio => {
        clearInterval(interval.current);
        audio.sound.pause();
        audio.sound.currentTime = 0;
        setleft(prev=>prev = 80)
        setDisable(prev => prev= false)
     });
    }

  
    const looping = () => {             /// set the loop state var
      setLoop(prev => prev = !prev )
    }

    
    
     if(!audioClips || !audioDuration) return <div>loder...</div> /// show loding... until the files are ready
    return (
        <section >
          <h1>My Lopper</h1>
          <LooperMedia audioClips={audioClips} mute={mute} left={left} colors={colors} audioDuration={audioDuration}  />
          <div className="looper-panel">
            <button title="play" disabled={disable} onClick={()=>playSound()}><PlayArrowOutlinedIcon/></button>
            <button title="stop" onClick={()=>stop()}><StopOutlinedIcon/></button>
            <button  onClick={()=> looping()}> {loop ? <LoopOutlinedIcon titleAccess=" disable loop" /> : <LoopOutlinedIcon titleAccess="loop" style={{color:"gray"}}  /> }</button> 
          </div>
        </section>
    );
};