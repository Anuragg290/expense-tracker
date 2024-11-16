'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import budget from './images/budget.png'
import logo from './images/logo-black.png'

const navigation = [
  { name: 'Home', href: '#'},
  { name: 'Features', href: '#' },
  { name: 'Reviews', href: '#' },
  { name: 'About', href: '#' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true') // Set login state
    navigate('/Signin') // Redirect to the dashboard
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <a href="#" className="flex lg:flex-1 -m-3 p-1.7">
          <span className="sr-only">Your Company</span>
          <img
            src={logo}
            alt="logo"
            className="w-40"
          />
        </a>
        <div className="flex lg:hidden">
          <button onClick={() => setMobileMenuOpen(true)} className="-m-2.5 p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex text-sm/6 font-semibold text-gray-900 lg:flex-1 lg:justify-end">
          <button onClick={handleLogin}>Log in </button>
          <span aria-hidden="true">&rarr;</span>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <DialogPanel className="fixed inset-y-0 right-0 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                src={budget}
                alt=""
                className="h-8 w-auto"
              />
            </a>
    
          </div>
          <div className="mt-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  {item.name}
                </a>
              ))}
            </div>
            <button
              onClick={handleLogin}
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
            >
              Log in
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
