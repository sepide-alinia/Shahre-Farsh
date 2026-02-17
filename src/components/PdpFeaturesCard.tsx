
import type {Traits} from "@/types"


export default function PdpFeaturesCard({quality,shape,bgColor,provider}: Traits) {
  return (
  <div className="bg-searchInput rounded-xl h-20"> 
  {quality}
  {shape}{bgColor}{provider}
   </div> 
)
}
