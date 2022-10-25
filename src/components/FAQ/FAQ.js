import React from 'react';

const FAQ = () => {
    return (
        <div>
            <section className=" text-gray-700">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold">How it works?</h3>
                            <p className="mt-1 dark:text-gray-400">We are non profit organization.Here kind of person can come and learn.We take some donation from the learners and then donate it to affected people.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">How learners will learn?</h3>
                            <p className="mt-1 dark:text-gray-400">There will be recorded videos and there will be milestones.Each milestones will carry almost 7-8 modules and also each module will carry 9-10 videos.And we will release modules at night so everyone can watch video.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Evaluation System</h3>
                            <p className="mt-1 dark:text-gray-400">There will be quiz and assignments which will be based on each module and there will be strict deadline and the deadline is strictly followed.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Benefits</h3>
                            <p className="mt-1 dark:text-gray-400">There will be conceptual sessions, live sessions and in discord server each of the moderator and admin will help if anyone faces any</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;