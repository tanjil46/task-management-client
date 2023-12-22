import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const navigate=useNavigate()


    const formHandler=(e)=>{
        e.preventDefault()
        emailjs.sendForm('service_48nbrtk', 'template_tbp96r4', form.current, '_pe9KJl66OcsHBRsb')
              .then((result) => {
                  console.log(result.text);
                    Swal.fire(
                        'success',
                        'Message Sent Succesfully',
                        'success'
                    )
                    navigate('/')
              }, (error) => {
                  console.log(error.text);
              });
        
        }
    return (
        <div className="min-h-screen bg-black py-8">
            
            <p className="text-center  md:text-2xl text-lg  font-bold text-white  my-6 ">Contact Us</p>

      <form ref={form} onSubmit={formHandler} className="max-w-3xl mx-auto my-12">

      <div className="form-control w-full my-6">
  <label className="label">
    <span className="text-slate-300 font-bold">Your Name</span>
   
  </label>
  <input  type="text" name="from_name" className="input  input-bordered input-primary w-full " />
  
</div>

<div className="form-control w-full my-6">
  <label className="label">
    <span className="text-slate-300 font-bold">Your Email</span>
   
  </label>
  <input   type="email" name="from_email" className="input  input-bordered input-primary w-full " />
  
</div>





<div className="form-control">
  <label className="label">
    <span className="text-slate-300 font-bold">Your Message</span>
   
  </label>
  <textarea name="message" className="textarea textarea-bordered h-24" ></textarea>
  
  </div>

<button type="submit" className="btn bg-pink-600 font-bold text-white hover:bg-slate-500 input  input-bordered input-primary w-full my-6">Send</button>



      </form>









        </div>
    );
};

export default Contact;