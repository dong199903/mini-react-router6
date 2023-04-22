import { useParams } from "./../../Router";
const Page2 = () => {
  const params = useParams();
  console.log(params)
  return (
    <div>page2</div>
  )
}
export default Page2;