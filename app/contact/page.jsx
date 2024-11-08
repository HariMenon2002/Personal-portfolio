'use client';

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {FaPhoneAlt,FaEnvelope,FaMapMarkedAlt} from 'react-icons/fa'

const info=[
  {
    icon:<FaPhoneAlt/>,
    title:'Phone',
    description:'(+91) 6282159533'
  },
  {
    icon:<FaEnvelope/>,
    title:'Email',
    description:'ultronhari7@gmail.com'
  },
  {
    icon:<FaMapMarkedAlt/>,
    title:'Address',
    description:'Thrissur, Kerala.'
  },
]

import { motion } from "framer-motion";
import { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Basic validation (you can expand this as needed)
    if (!formData.firstname || !formData.lastname || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
  
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };
  







  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:'easeIn'}}} className="py-6 ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">Feel free to contact me either via email or by posting a message here</p>

              {/*input*/}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {/* <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" /> */}
                <Input type="firstname" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="Firstname" />
                <Input type="lastname" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Lastname" />
                <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email address" />
                <Input type="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" />
              </div>

              {/*select */}
              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="select a service"/>
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">App Development</SelectItem>
                    <SelectItem value="mst">Hiring purposes</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/*text area*/}
              <Textarea className="h-[200px]" placeholder="Type your message here." name="message" value={formData.message} onChange={handleChange} />

              <Button type="submit" size="md" className="max-w-40">Send Message</Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item,index)=>{
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1 ">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                    
                  </div>
                </li>
              })}
            </ul>
          </div>

        </div>
      </div>
    </motion.section>
  )
}

export default Contact
