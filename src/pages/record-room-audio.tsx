import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"

const isRecordingSupported = 
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === "function" &&
  typeof window.MediaRecorder === "function"


export function RecordRoomAudio(){
  const [isRecording, setIsRecording] = useState(false)
  const recorder = useRef<MediaRecorder | null>(null)

  function stopRecording(){
    setIsRecording(false)

    if (recorder.current && recorder.current.state !== "inactive"){
      recorder.current.stop()
    }
  }

  async function startRecording(){
    if (!isRecordingSupported) {
      alert("Gravação de áudio não é suportada neste navegador.")
      return
    }
    setIsRecording(true)

    const audio = await navigator.mediaDevices.getUserMedia({ 
      audio: {
        echoCancellation: true, // Reduz o eco
        noiseSuppression: true, // Reduz o ruído de fundo
        sampleRate: 44_100, // Taxa de amostragem padrão para áudio
      } 
    })

    recorder.current = new MediaRecorder(audio, {
      mimeType: "audio/webm", // Formato de áudio comum
      audioBitsPerSecond: 64_000, // Taxa de bits para áudio
    })

    recorder.current.ondataavailable = (event) => {
      if (event.data.size > 0){
        console.log(event.data)
      }
    }

    recorder.current.onstart = () => {
      console.log("Gravação iniciada!")
    }

    recorder.current.onstop = () => {
      console.log("Gravação encerrada/pausada")
    }

    recorder.current.start()
  }


  
  return(
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      {isRecording ? (
        <Button onClick={stopRecording}>Pausar gravação</Button>
      ) : (
        <Button onClick={startRecording}>Gravar Áudio</Button>
      )}
      {isRecording ? <p>Gravando</p> : <p>Pausado</p>}
    </div>
  )
}