import { useLocations,useNavigate } from "./../../Router";
const Page1 = () => {
  const nav = useNavigate()
  return (
    <div>
      page1
      <div onClick={()=>nav.push('/page2')}>跳转page2</div>
    </div>
  )
}
export default Page1;