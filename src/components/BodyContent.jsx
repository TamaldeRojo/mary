import React from 'react'
// import { useHistory } from 'react-router-dom';

function BodyContent() {
  // const history = useHistory()

  const handleClick = () => {
    // history.push('/comisiones')
  }
  return (
    <>
    <section classname="pb-12 bg-gradient-to-b from-[#E8E3F5] via-[#EDEAFB] to-[#F7FAFC]">
                <div class="items-center pt-12 px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
                  <div class="justify-center w-full text-center lg:p-10 max-auto">
                    <div class="justify-center w-full mx-auto">

                    <div class="flex flex-col items-center justify-center max-w-xl gap-3 mx-auto lg:flex-row">
                    <img
                        class='w-32 h-32 rounded-full border border-[#E8E3F4]'
                        src='./mary5.png'
                    />
                    </div>


                    <p class="mt-4 sm:px-32 text-[#10172A] sm:text-xl text-sm font-semibold tracking-tighter">
                       by @esyzero 💕
                      </p>

                      <p class="sm:mt-8 mt-3 sm:px-44 text-[#10172A] text-4xl sm:text-6xl font-semibold tracking-tighter">
                      ¡Echa una mirada a mis <span class="underline leading-8 underline-offset-8	decoration-8 decoration-[#8B5CF6]">dibujos</span>!
                      </p>

                      <p class="sm:mt-8 mt-2.5 text-[#10172A] sm:px-72  sm:leading-loose text-lg font-normal tracking-tighter">
                      ✨Soy una <span class="font-semibold">diseñadora</span> que dibuja por hobby <span class="font-semibold">desde pequeñita</span>. Mira mis dibujitos de abajo<span class="font-semibold">. Cualquier cosa</span> aquí está mi correo: elsypazruiz@gmail.com ✨<span class="font-semibold"></span>
                      </p>
                    </div>
                  </div>
              
                </div>
           


        <div class="text-center space-x-4 mt-6">
        <button class="bg-[#8B5CF6] translate-y-1 text-[#fff] sm:text-lg text-xs font-bold py-2.5 px-6  rounded-full inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" />
        </svg>

            &nbsp; &nbsp;<span><button onClick={handleClick()}> Comisiones próximamente...</button> </span>
        </button>
        </div>
      <div>
      
      </div>
        </section>
    </>
  )
}

export default BodyContent