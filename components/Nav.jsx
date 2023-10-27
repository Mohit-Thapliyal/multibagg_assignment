"use client"
import Link from "next/link"
import { useContext } from "react"
import { MyContext } from "./Context"

const Nav = () => {
  const {isLogin, user} = useContext(MyContext)
  return (
    <div className="nav">
        <Link href={"/"} className="home_btn">Home</Link>
        <Link href={"/login"} className="login_btn">{isLogin?user.email:"Login"}</Link>
    </div>
  )
}

export default Nav