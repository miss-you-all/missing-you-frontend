import SolarPower from './solarPower.tsx'

const MyPage = () => (
  <>
    <SolarPower name={'코코'} power={90.123492103} />
    <div className="flex justify-around">
      <div className="border border-black w-1/2 mr-2">
        <div>받은태양</div>
        <div>요오런 느낌 ? </div>
      </div>
      <div className="border border-black w-1/2 ml-2">
        <div>보낸 태양</div>
        <div className="h-20">요오런 느낌 ?</div>
      </div>
    </div>
  </>
)

export default MyPage
