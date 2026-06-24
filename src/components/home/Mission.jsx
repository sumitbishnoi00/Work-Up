import React from 'react'
import Para from '../common/Para'

const Mission = () => {
    return (
        <section className='px-4'>
            <div className="max-w-285 mx-auto w-full bg-[url('/assets/featursbg.png')] bg-cover flex flex-col justify-between bg-center bg-no-repeat min-h-[789.1px] px-4 sm:px-6 lg:px-0 rounded-xl overflow-hidden pb-10 sm:pb-15 md:pb-20 lg:pb-[89.85px]">

                <div className='w-full flex flex-col lg:flex-row justify-center lg:justify-between lg:pl-10 gap-8 lg:gap-0'>
                    <div className='max-w-[420.14px] w-full mt-10'>
                        <div className='bg-white h-0.75 rounded-2xl mb-2 w-28.5'></div>
                        <h3 className='font-medium mb-6 text-[40px] text-white Outfit leading-[100%]'>Our Mission</h3>
                        <Para para={"Our mission is to harness the power of AI-driven automation to empower Australian businesses. We propel all sized businesses towards success by automating financial tasks, from tax payments to bank transfers, report building. Creating an ecosystem where AI acts as the autopilot for finance. Join us in building a future where businesses thrive effortlessly and reach new heights."} vari="sec" />
                    </div>
                    <img src="/assets/Our Mission.webp" className='w-140.25 h-95.25 object-cover rounded-xl' alt="Our Mission" />

                </div>

                <div className='w-full flex flex-col-reverse lg:flex-row gap-8 lg:gap-[66.5px]'>
                    
                    <img src="/assets/Solution.webp" className='w-140.25 h-95.25 object-cover rounded-xl' alt="Solution" />

                    <div className='max-w-[402.64px] w-full mt-10 lg:mt-27.5'>
                        <div className='bg-white h-0.75 rounded-2xl mb-2 w-35.5'></div>
                        <h3 className='font-medium mb-6 text-[40px] text-white leading-[100%] Outfit '>Solution</h3>
                        <Para para={"We grasp the struggles of business finance management and the risks of losing control. WorkUp's AI automation solution restores control, automating tax payments, securing profits, and managing expenses with ease"} vari="sec" />
                    </div>
                </div>

            </div>
            
        </section>
    )
}

export default Mission