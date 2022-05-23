import Image from "next/image";


export const Steps_video = (props) => {
  return (
    <>
        
        {/* <video src={props.steps_video.videoCard} width="575" height="380" autoPlay={true} /> */}
        <Image src={props.steps_video.videoCard} width="575" height="380" className="rounded"></Image>
    </>
  )
}


export default Steps_video;