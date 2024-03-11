import Header from "@/components/header/index";
import MaterialMenu from "@/components/materialmenu";
// import MyButton from "./button";

export default async function Page() {

  return (
    <>
      <Header />
      <MaterialMenu/>      
      <div className="bg-white p-6 rounded-lg">
        <h1 className="font-bold text-black mb-4">Paper</h1>
        <p className="text-gray-700 mb-4">Press the packaging tightly together. It saves space and reduces overload. The corrugated cardboard can be printed, plastic-coated and colored. Tapes may be included.</p>
        <p className="text-gray-700 mb-4">Plastic or food scraps, which reduce the recycling value of the material, should be removed.</p>
      </div>
    </>
  )
}