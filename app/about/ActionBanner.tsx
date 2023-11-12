'use client'

import Link from "next/link";
import Image from "next/image";
import whatsApp from "../assets/whatsapp.svg";
import { useMediaQuery } from "react-responsive";

const ActionBanner = () => {
  const isMobile: boolean = useMediaQuery({ query: '(max-width: 760px)' })

  return (
    <div className="w-full px-[7.5%] sm:px-8 py-16">
      <div className={`text-center flex sm:flex-col ${isMobile ? 'flex-col' : ''} p-6 bg-[#f5f5f5] rounded-3xl justify-center items-center gap-2 shadow-lg`}>
        <div className={`${isMobile ? 'text-lg' : 'text-2xl'} gap-2 font-semibold flex-1`}>
          <div className="text-gray-900">
            We've got a diverse selection of devices in stock to meet your
            preferences.
          </div>
          <div className="text-primary-500">WhatsApp us Today!</div>
        </div>

        <div className="whitespace-no-wrap bg-[#25D366] cursor-pointer rounded-2xl flex items-center sm:flex-1">
          <Link href="https://wa.me/263778752702" target="_blank">
            <div className="flex items-center text-white px-4 py-2">
              <Image
                src={whatsApp}
                height={28}
                width={28}
                alt=""
                className="pr-2"
              />
              <span className="ml-2">Message Us</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ActionBanner;
