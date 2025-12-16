"use client"

import Link from "next/link"
import { GraduationCap, School, ArrowRight } from "lucide-react"

export default function SelectSchoolPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-white to-background">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4">
            Sélectionnez votre <span className="text-primary">École</span>
          </h1>
          <p className="text-lg text-secondary/70">Choisissez votre établissement pour commencer</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Link href="/eugenia-school/login">
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-xl p-8 text-white cursor-pointer hover:scale-105 transition-transform">
              <GraduationCap className="h-12 w-12 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Eugenia School</h2>
              <p className="text-white/90 mb-4">École d'excellence en Data Science et IA</p>
              <div className="flex items-center gap-2 font-semibold">
                Continuer <ArrowRight className="h-5 w-5" />
              </div>
            </div>
          </Link>

          <Link href="/albert-school/login">
            <div className="bg-gradient-to-br from-success to-success/80 rounded-2xl shadow-xl p-8 text-white cursor-pointer hover:scale-105 transition-transform">
              <School className="h-12 w-12 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Albert School</h2>
              <p className="text-white/90 mb-4">Excellence académique et innovation pédagogique</p>
              <div className="flex items-center gap-2 font-semibold">
                Continuer <ArrowRight className="h-5 w-5" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

