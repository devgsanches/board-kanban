import orgnizeLogo from '../../assets/orgnize-logo.svg'

export default function Logo() {
  return (
    <div className="flex justify-center gap-1">
      <span className="font-[Jaro] text-[1.75rem]">ORGNIZE</span>
      <img src={orgnizeLogo} alt="Orgnize Logo" />
    </div>
  )
}
