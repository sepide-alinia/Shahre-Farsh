import React from 'react'
import SigninTitle from '../components/signinTitle/SigninTitle'
import signupCover from '../assets/images/signupCovre.png'

export default function SignupSignInLayout({children}:{children:React.ReactNode}) {
  return (
    <div>
         <div className="flex h-screen ">
      <div className="w-1/2 content-center">
        <img
          className="h-[90vh] mx-auto "
          src={signupCover}
          alt="signupCover"
        />
      </div>
      <div className="w-1/2 flex flex-col  ">
        <SigninTitle/>
        <div className="w-5/6 pt-4">

        {children}

          
        </div>
      </div>
    </div>
    </div>
  )
}
