import { useParams } from "./../../Router";
const Page3 = () => {
  const params = useParams();
  console.log(params)
  return (
    <div>Page3</div>
  )
}
export default Page3;