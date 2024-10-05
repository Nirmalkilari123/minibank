"use client"
import React, { useContext } from "react"
import Image from "next/image"
import logo from "@/assets/Images/logo.png"
import Link from "next/link"
import InstagramIcon from "@/assets/svg/InstagramIcon"
import YoutubeIcon from "@/assets/svg/YoutubeIcon"
import FacebookIcon from "@/assets/svg/FacebookIcon"
const XplosFooter = () => {
  return (
    <footer className="bg-blue-400  p-8 mt-8">
    <div className="max-w-screen-xl flex flex-col justify-evenly gap-4 lg:flex-row items-center lg:items-start mx-auto">
      <div className="flex flex-col items-center lg:items-start gap-3">
        <div className="flex items-center gap-2 md:gap-4 lg:gap-8">
          <div className="flex whitespace-nowrap cursor-pointer">
            <Link href="/">
              <Image src={logo} width={420} height={420} alt="logo" className="max-w-32" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="w-12 h-12 p-3 rounded-full flex items-center justify-center cursor-pointer bg-secondary transition duration-300">
              <Link href="https://www.instagram.com/urslittlemoments/">
                <InstagramIcon color="white" />
              </Link>
            </div>
            <div className="w-12 h-12 p-3 rounded-full flex items-center justify-center cursor-pointer bg-secondary transition duration-300">
              <Link href="https://www.facebook.com/people/Little-Moments/61560562524258/">
                <FacebookIcon color="white" />
              </Link>
            </div>
            <div className="w-12 h-12 p-3 rounded-full flex items-center justify-center cursor-pointer bg-secondary transition duration-300">
              <Link href="https://www.youtube.com/@urslittlemoments">
                <YoutubeIcon color="white" />
              </Link>
            </div>
          </div>
        </div>
        { (
          <p className="py-2  medium-text-bold">
            <span className="underline cursor-pointer medium-text-bold">
              Register
            </span>{" "}
            Your MiniBank Account Here
          </p>
        )}
      </div>
      <div className="grid grid-cols-2 gap-6 md:gap-16 justify-center max-sm:flex-wrap">
        <ul className="small-text-regular">
          <li className="py-2 whitespace-nowrap ">
            <Link href={"/about-us"}>About Us</Link>
          </li>
          <li className="py-2 whitespace-nowrap ">
            <Link href={"/privacy-policy"}>Privacy Policy</Link>
          </li>
          <li className="py-2 whitespace-nowrap ">
            <Link href={"/terms-and-conditions"}>Terms & Conditions</Link>
          </li>
          <div className="">
          <li className="py-2 whitespace-nowrap ">
            <Link href={"/terms-and-conditions"}>Contact Us</Link>
          </li>
          <li className="py-2 whitespace-nowrap ">
            <Link href={"/terms-and-conditions"}>FAQ</Link>
          </li>
          <li className="py-2 whitespace-nowrap ">
            <Link href={"/terms-and-conditions"}>Disclaimer</Link>
          </li>
          </div>
        </ul>
      </div>
    </div>
    <div className="mt-6 text-center whitespace-nowrap">
      <p className="text-secondary/55">© All rights reserved 2024 by MiniBank.</p>
    </div>
  </footer>
  )
}

export default XplosFooter