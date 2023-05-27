"use client"

import React from "react"
import ReactDOM from "react-dom"
import SignupForm from "../components/SignupForm"
import LoginForm from "../components/LoginForm"
import { BrowserRouter } from "react-router-dom"

export default function Home() {
  return (
    <BrowserRouter>
      <SignupForm />
      <LoginForm />
    </BrowserRouter>
  )
}
