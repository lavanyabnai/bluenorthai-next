import Image from 'next/image'
import logo from '../images/logo1.png'

function LogomarkPaths() {
  return <Image className="" src={logo} alt="" width={40} height={40} />
}

export function Logomark(props) {
  return (
    <div>
      <LogomarkPaths />
    </div>
  )
}

export function Logo(props) {
  return (
    <div className="flex items-center " aria-hidden="true">
      <LogomarkPaths />
      <h1 className="ml-2 flex items-center text-2xl font-bold tracking-wide">
        BlueNorth AI
      </h1>
    </div>
  )
}
