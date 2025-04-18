"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Phone, Mail, Share2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TarjetaDigital() {
  const [copied, setCopied] = useState(false)

  // Actualizar la información de contacto para incluir el grupo de WhatsApp
  const contactInfo = {
    nombre: "Julia Villagómez Martínez",
    titulo: "Licenciada",
    telefono: "229 422 4577",
    email: "lic.juliavillagomez31@gmail.com",
    facebook: "https://www.facebook.com/profile.php?id=61575199135422",
    instagram: "https://www.instagram.com/juez.juliavillagomezmartinez/",
    paginaweb: "https://juliaweb.vercel.app/", // Agregar el enlace de TikTok cuando esté disponible
    grupoWhatsApp: {
      nombre: "Aprendiendo a votar y ejercer nuestros derechos",
      url: "https://chat.whatsapp.com/GbXi89xvPME1plxumTDtDU",
    },
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: contactInfo.nombre,
          text: `Información de contacto de ${contactInfo.nombre}`,
          url: window.location.href,
        })
      } catch (error) {
        console.error("Error al compartir:", error)
      }
    } else {
      // Fallback para navegadores que no soportan Web Share API
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/52${contactInfo.telefono.replace(/\s/g, "")}`, "_blank")
  }

  return (
    <Card className="w-full max-w-md overflow-hidden border-4 border-pink-500 shadow-xl">
      {/* Encabezado */}
      <div className="bg-gradient-to-r from-pink-500 to-pink-400 p-6 text-white text-center">
        {/* Actualizar la ruta de la imagen del avatar para usar la imagen subida */}
        {/* Actualiza la referencia a la imagen para asegurarte de que funcione en producción */}
        <Avatar className="w-32 h-32 mx-auto border-4 border-white shadow-lg">
          <AvatarImage
            src="/images/julia-portada.png"
            alt={contactInfo.nombre}
            className="object-cover object-center"
          />
          <AvatarFallback className="bg-olive-500 text-white text-2xl">
            {contactInfo.nombre
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <h1 className="mt-4 text-2xl font-bold">{contactInfo.nombre}</h1>
        <p className="text-white/90">{contactInfo.titulo}</p>
      </div>

      {/* Contenido */}
      <CardContent className="p-0">
        <Tabs defaultValue="contacto" className="w-full">
          <TabsList className="grid grid-cols-2 bg-olive-700 text-white rounded-none h-14">
            <TabsTrigger value="contacto" className="data-[state=active]:bg-olive-600">
              Contacto
            </TabsTrigger>
            <TabsTrigger value="redes" className="data-[state=active]:bg-olive-600">
              Redes Sociales
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contacto" className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-olive-700 p-3 rounded-full text-white">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Teléfono</p>
                <a href={`tel:${contactInfo.telefono}`} className="text-olive-700 font-medium">
                  {contactInfo.telefono}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-olive-700 p-3 rounded-full text-white">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Correo electrónico</p>
                <a href={`mailto:${contactInfo.email}`} className="text-olive-700 font-medium break-all">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Añadir el botón del grupo de WhatsApp en la sección de contacto */}
            {/* Añadir después del botón de WhatsApp existente */}
            <Button onClick={handleWhatsApp} className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white">
              Contactar por WhatsApp
            </Button>

            <Button
              onClick={() => window.open(contactInfo.grupoWhatsApp.url, "_blank")}
              className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white"
            >
              {contactInfo.grupoWhatsApp.nombre}
            </Button>
          </TabsContent>

          <TabsContent value="redes" className="p-6 space-y-4">
            <a
              href={contactInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="bg-blue-600 p-3 rounded-full text-white">
                <Facebook size={20} />
              </div>
              <div>
                <p className="font-medium">Facebook</p>
                <p className="text-sm text-gray-500 truncate max-w-[200px]">{contactInfo.facebook.split("?")[0]}</p>
              </div>
            </a>

            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-3 rounded-full text-white">
                <Instagram size={20} />
              </div>
              <div>
                <p className="font-medium">Instagram</p>
                <p className="text-sm text-gray-500 truncate max-w-[200px]">@juez.juliavillagomezmartinez</p>
              </div>
            </a>

            <a
              href={contactInfo.paginaweb}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="bg-black p-3 rounded-full text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                  <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                  <path d="M15 8v8a4 4 0 0 1-4 4" />
                  <line x1="15" y1="4" x2="15" y2="12" />
                </svg>
              </div>
              <div>
                <p className="font-medium">TikTok</p>
                <p className="text-sm text-gray-500">Próximamente</p>
              </div>
            </a>
          </TabsContent>
        </Tabs>
      </CardContent>

      {/* Botón de compartir */}
      <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-center">
        <Button onClick={handleShare} variant="outline" className="w-full flex items-center justify-center gap-2">
          <Share2 size={16} />
          {copied ? "¡Enlace copiado!" : "Compartir tarjeta"}
        </Button>
      </div>
    </Card>
  )
}
