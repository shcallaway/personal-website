"use client"

import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from 'next/navigation'

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <div className="sticky top-0 z-10 bg-background border-b w-full">
      <nav className="max-w-4xl mx-auto px-4 py-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => router.push(link.href)}
            >
              {link.label}
            </Button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            className="-ml-4 px-4 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>

          {isOpen && (
            <div className="fixed inset-0 z-50 bg-background">
              <div className="flex flex-col">
                <div className="flex justify-end p-4">
                  <Button
                    variant="ghost"
                    className="hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <div className="flex flex-col pt-8">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-6 py-6 text-2xl hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

