import React from 'react'
import { useForm} from "react-hook-form";

const Login = () => {

  const {register,handleSubmit,formState:{ errors},}=useForm();

  const navigate =useNavigate();

 useEffect(() => {
   user && navigate("/dashboard")
      },[user]);

 


  return (
 <div className="w-full min-h-screen flex items-center flex-col lg:flex-row bg-[#f3f4f6]" >

<div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-">

<div className="h-full w-full lg:w-2/3 flex flex-col items-center justify-center">
<div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center gap-5 md:gap-y-10 2xl:-mt-20">
  <span className="flex gap-1 py-1 px-3 bprder rounded-full text-sm md:text-base bordergray-300 text-gray-600">  Manage all your task in one place!</span>
  <p className="flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-blue-700">
    <span>
      Cloud-Based
    </span>
    <span>Tsk Manager</span>
  </p>
</div>

</div>
<div></div>

</div>

 </div>
  )
}

export default Login