import { useRouter } from "next/router"
import { FaGoogle } from "react-icons/fa"
import { googleLogin } from "../firebase"

function Oauth() {

  const router = useRouter()

  const onGoogleClick = () => {
    
    googleLogin()
    router.push("dashboard/")
  }

  console.log(router.pathname)
  return (
    <div className="socialLogin">
      <p>Sign { router.pathname === "/signup" ? "Up" : "In"} with </p>
      <button className="socialIcon" onClick={onGoogleClick}>
        <FaGoogle className="w-10 h-10"/>
      </button>
    </div>
  )
}

export default Oauth