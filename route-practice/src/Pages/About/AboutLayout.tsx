import { Outlet } from "react-router-dom"

const AboutLayout = () => {
  return (
    <>    
     <div>
        <Outlet /> { /**  This is where the About Child Routes Loads */ }
     </div>
    </>

  )
}

export default AboutLayout