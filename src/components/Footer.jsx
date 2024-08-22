import React from 'react'

const Footer = () => {
  return (
    <footer className="relative py-20 flex flex-col items-center bg-tertiary overflow-hidden md:py-40">
    <div className="relative z-[1] container m-auto px-6 md:px-12">
        <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12 xl:h-[100px] ">
            <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
                <div className="w-full space-x-12 flex justify-center text-secondary sm:w-7/12 md:justify-start">
                   
                    <ul role="list" className="space-y-8">
                        <li>
                            <a href="https://github.com/BishwayanDebRoy" className="flex items-center space-x-3 hover:text-white-100 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                                <span>Github</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/Bishwayan11_dr" className="flex items-center space-x-3 hover:text-sky-400 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5" viewBox="0 0 24 24">
            <path d="M22.66 0H19.7l-7.68 10.38L4.35 0H1.38L10.5 12 1.22 24h2.95l7.61-10.27L19.47 24h2.95L13.41 12 22.66 0z"/>
        </svg>
                                <span>Twitter</span>
                            </a>
                        </li>
                  

                        <li>
                            <a href="https://www.linkedin.com/in/bishwayandebroy11/" className="flex items-center space-x-3 hover:text-blue-500  transition">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.401 0 .725.513.725 1.146v13.708c0 .633-.324 1.146-.725 1.146H.725A.723.723 0 010 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.213c-.837 0-1.401-.554-1.401-1.248 0-.706.576-1.247 1.427-1.247.851 0 1.401.541 1.411 1.247 0 .694-.56 1.248-1.437 1.248H3.743zM13.306 9.8c0-1.234-.66-1.815-1.54-1.815-.771 0-1.141.432-1.338.731V6.169h-2.4c.03.579 0 7.225 0 7.225h2.4v-4.036c0-.216.015-.433.08-.589.174-.434.573-.881 1.243-.881.876 0 1.226.665 1.226 1.639v3.867h2.4V9.8z"/>
        </svg>
               
                                      <span>LinkedIn</span>
                            </a>
                        </li>
                     
                    
                   
                        <li>
                            <a href="https://www.instagram.com/bishwayandebroy11/" className="flex items-center space-x-3 hover:text-pink-500 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                </svg>
                                <span>Instagram</span>
                            </a>
                        </li>
                        
                    </ul>
                </div>
                <div className="w-10/12 m-auto  mt-16 space-y-6 text-center sm:text-left sm:w-5/12 sm:mt-auto">
                    

                    <span className="block text-gray-300">Bishwayan Deb Roy &copy; 2024</span>

                    <span className="flex justify-between text-white"> 
                        <a href="#" className="font-semibold">Terms of Use </a>
                        <a href="#" className="font-semibold"> Privacy Policy</a> 
                    </span>

                    <span className="block text-gray-300">Need help? <a href="#contact" className="font-semibold text-white"> Contact Us</a></span>
                </div>
            </div>
        </div>
    </div>
    <div aria-hidden="true" className="absolute h-full inset-0 flex items-center">
        <div aria-hidden="true" className="bg-layers bg-scale w-80 h-80 m-auto blur-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full xs:w-[35rem] xs:h-[35rem] md:blur-3xl"></div>
    </div>
    <div aria-hidden="true" className="absolute inset-0 w-full h-full bg-[#020314] opacity-80"></div>
</footer>
  )
}

export default Footer