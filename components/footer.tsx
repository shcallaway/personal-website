import Link from "next/link"
import { LinkedinIcon, GithubIcon, TwitterIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-4 md:py-6 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
        <div className="text-xs sm:text-sm text-center md:text-left text-muted-foreground">
          © 2024 Your Company Name. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <LinkedinIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <GithubIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <TwitterIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

