"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import Script from 'next/script'
import { createOrder, fetchuser, fetchpayments } from '@/actions/Useraction'
import { useSession } from 'next-auth/react'
import AnimatedContent from '@/animations/Scroll-reveal'
import FadeContent from '@/animations/Fade'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { useRouter } from 'next/navigation'

const Payment = ({profiles}) => {
    const [paymentform, setPaymentform] = useState({ name: "", amount: "", message: "" })
    const [toggle, setToggle] = useState(false)
    const { data: session } = useSession()
    const [currentUser, setCurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const searchParams=useSearchParams()
    const router = useRouter()

    useEffect(() => {
        if (session && session.user) {
            getData();
        }
    }, [session])

    useEffect(() => {
        if (searchParams.get('paymentStatus') == 'success') {
      toast('Profile Updated', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        }router.push(`/${profiles}`)
    }, [])
    

    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
        console.log(paymentform)
    }
    const getData = async () => {
        let User = session.user.name
        let pay = await fetchpayments(User)
        setPayments(pay)

        let user = await fetchuser(User)
        console.log(user)
        setCurrentUser(user)


        console.log(payments[0].fromUserId)
    }

    const pay = async (amount) => {
        let a = await (createOrder(amount, session.user.name, paymentform))

        let orderId = a.id; // This is the Order ID returned by Razorpay
        console.log('first', session.user.name)
        console.log(orderId)
        let user = await fetchuser(session.user.name)
        console.log(user.razorpayid, user.razorpaysecret)
        var options = {
            "key": user.razorpayid || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Acme Corp", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        var rzp1 = new Razorpay(options);
        rzp1.open();


    }


    return (



        <div>
           
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
             <ToastContainer /> 
            <div className='w-full'>
      <div className='relative'>
        <div id='bg-cover' className='h-[65vh] w-full overflow-hidden'>
          <video className="w-full h-full object-cover" autoPlay loop muted  >
            <source src="https://v1.pinimg.com/videos/mc/720p/0f/3a/40/0f3a40f8053cb24b8599b44bf7db1693.mp4" type="video/mp4" />
            Your browser does not support the video tag.

          </video>
        </div>
        <div id='profile-img' className='absolute inset-0 top-11/12 flex items-center justify-center pointer-events-none' >
          <img src="https://avatars.githubusercontent.com/u/175535857?v=4" width={90} alt="" className="" />
        </div>
      </div>
      <div id='info' className='text-center mt-10 text-white '>
        <h1 className='text-3xl'>@{profiles}</h1>
        <div className='text-slate-500'>I am a lazy coder</div>
        <div>18,732 members • 99 Posts • $18,270/release</div>
      </div>

            <div className='flex justify-center mt-3 gap-2'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'>Follow</button>

                {/* <!-- Modal toggle --> */}
                <button onClick={() => { setToggle(!toggle) }} className=' w-2xs text-white
    bg-gradient-to-r from-orange-500 via-red-500 to-red-600
    hover:from-orange-400 hover:via-red-400 hover:to-red-500
    focus:ring-4 focus:outline-none focus:ring-orange-300
    dark:focus:ring-orange-800
    shadow-lg shadow-orange-500/50
    hover:shadow-orange-600/60
    font-medium rounded-lg  px-3 py-2.5 text-center
    transition-colors duration-200 ease-in-out text-xl'>₹ Donate</button>
                {/* <!-- Main modal --> */}
                <div id="crud-modal" tabIndex="-1" aria-hidden="true" className={` ${toggle ? "" : "hidden"} overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        {/* <!-- Modal content --> */}
                        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Thanks For Encouraging Me
                                </h3>
                                <button type="button" onClick={() => { setToggle(!toggle) }} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <form className="p-4 md:p-5">
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Encourager's Name</label>
                                        <input type="text" onChange={handleChange} value={paymentform.name} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="" />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                                        <input type="number" onChange={handleChange} value={paymentform.amount} name="amount" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="" />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donations</label>
                                        <select id="category" onChange={handleChange} value={paymentform.amount} name="amount" defaultValue='' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                            <option value=''>Select category</option>
                                            <option value="100">₹100</option>
                                            <option value="500"> ₹500</option>
                                            <option value="1000" >₹1000</option>
                                            <option value="1500" >₹1500</option>

                                        </select>
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                                        <textarea id="message" name='message' onChange={handleChange} value={paymentform.message} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="How is your day today"></textarea>
                                    </div>
                                </div>
                                <button type="button" onClick={() => { pay(Number.parseInt(paymentform.amount)) }} id='rzp-button1' className={`text-white inline-flex justify-center items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${paymentform.amount ? "" : "cursor-not-allowed opacity-50"}`}>

                                    Donate
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div id='donated ' className='flex justify-center items-center flex-col mt-5 '>

                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                    {/* Anything placed inside this container will be fade into view */}

                    <AnimatedContent
                        distance={150}
                        direction="horizontal"
                        reverse={true}
                        duration={1.2}
                        ease="power3.out"
                        initialOpacity={0.2}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                        delay={0.3}
                    >
                        <div>Thanks Encourager</div>

                    
                <ul>
                    {payments.map((payment, index) =>{ 
                        let toggle=index % 2 === 0 ;
                        return(
                        
                        <li key={index} className={`${toggle?"bg-gray-500":"bg-gray-800"} text-white dark:text-gray-200 p-4 border-b border-gray-300 dark:border-gray-600 tracking-wider md:tracking-tight `}>
                            <span className='text-orange-400'><strong>{payment.fromUserId}</strong></span> donated <span className='text-green-500'>₹{payment.amount}</span> with message: <span className='italic text-amber-300'>"{payment.message}"</span>
                        </li>
                    )})}
                </ul>
                </AnimatedContent>
                </FadeContent>
            </div>
        </div>
</div>

    )
}

export default Payment