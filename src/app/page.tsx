// app/page.tsx
import SignInCard from '@/component/Abc';
import BGComponent from '@/component/BG';
import {Button} from '@heroui/button'; 

export default function Page() {
  return (
    <div className='border border-red-400'>

      <div className="h-screen w-full flex items-center justify-center bg-gray-900">
      <svg width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1440" height="900" fill="url(#paint0_radial)" />
        <defs>
          <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
            gradientTransform="translate(720 450) rotate(90) scale(600 960)">
            <stop stopColor="#111827" />
            <stop offset="1" stopColor="#1F2937" />
          </radialGradient>
        </defs>
      </svg>
    </div>
      </div>
  )
}