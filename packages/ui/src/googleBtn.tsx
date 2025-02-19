import { signIn } from "next-auth/react"
export const GoogleBtn = () =>{
    return(
        <button
            type="button"
            onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl cursor-pointer backdrop-blur-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Continue with google</span>
          </button>
    )
}

