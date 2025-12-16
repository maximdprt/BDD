"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-white to-background flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4">
          <span className="text-primary">Eugenia</span> Challenge
        </h1>
        <p className="text-lg text-secondary/70 mb-8">Plateforme éducative interactive</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/select-school">
            <Button size="lg">
              Commencer <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

