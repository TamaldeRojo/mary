import React, {useState} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const imgs = [
    "/mary1.png",
    "/mary2.png",
    "/mary13.png",
    "/mary4.png",
    "/mary5.png",
    "/amor.png",
    "/Elsy.png",
    "/mary3.png",
    "/mary12.png",   
    "/mary6.png",
    "/mary7.png",
    "/mary8.png",
    "/mary9.png",
    "/mary10.png",
    "/mary11.png",
]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    console.log("[+] Array Shuffled")
  }

function Gallery() {
    shuffleArray(imgs)
    const [data,setData] = useState({img:'', i:0})
    const viewImage = (img,i)=>{
      setData({img,i})
    } 
  return (
    <>
    {/* {
      data.img &&
      <div className='w-[50%] h-[50%] bg-black fixed flex justify-center'  style={{
        justifyContent:'center',
        alignItems:'top',
        overflow:'hidden'
      }} >
        <img src={data.img} style={{width:'auto',maxWidth:'90%',maxHeight:'90%'}} />
      </div>
    } */}
    <div style={{padding: '10px'}}>
    <ResponsiveMasonry
        columnsCountBreakPoints={{350:1,750:2,900:3}}
    >
        <Masonry gutter='5px'>
        <iframe
              src={'https://www.tiktok.com/embed/7337771078728600838'}
              width="100%"
              height="500px"
              allowFullScreen
              title="TikTok Video"
              allow="encrypted-media;"
              className='rounded-xl'
            ></iframe>
            {
                imgs.map((img,i)=>(
                    <img
                        key={i}
                        src={img}
                        style={{width:"100%",display:"block",borderRadius:"2%",cursor:"pointer"}}
                        alt=''
                        // onClick={()=> viewImage(img,i)}
                    />
                ))
                
            }
              
        </Masonry>
    </ResponsiveMasonry>
    </div>
    </>
  )
}

export default Gallery