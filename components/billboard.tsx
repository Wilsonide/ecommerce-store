import { Billboard} from "@/types";
import Search from "./Search";

interface BillboardProps {
  data: Billboard;
}

const BillboardPage = ({
  data
}: BillboardProps) => {
  const styling = { backgroundImage:`url('${data?.imageUrl}')` }
  
  return ( 
    <div className="mt-16">
      <div className='flex items-center justify-center pt-4 w-full bg-white lg:hidden'>
        <Search/>
      </div> 
      <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
        <div style={styling} className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
          <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
            <div className="font-bold text-3xl text-white sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
              {data?.label}
            </div>
          </div>
        </div>
      </div>
    </div>
   );
};

export default BillboardPage;