import React from "react"



function QuesTions() {

    return (
        <>
            <div className="flex justify-center">

                <div
                    className="mt-5 border-0 w-4/6 sm:px-6">
                    <div className="lg:col-span-2">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 ">Question 1</h1>
                    </div>

                    <div
                        className="py-10 lg:col-span-2 w-11/12 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-2">

                        <div className="space-y-6">
                            <p className="text-base text-gray-900">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Ullam
                                omnis voluptatem facere corrupti modi ipsam, repellat maxime minima hic est ipsum vero
                                doloremque. Maiores nulla omnis optio iusto, tenetur molestias.</p>
                        </div>

                        {/* <!-- Radio --> */}
                        <fieldset>
                            <div className="mt-4 space-y-6">
                                <div className="flex items-center gap-x-2">
                                    <input id="push-everything" name="push-notifications" type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label for="push-everything"
                                        className="block text-sm font-medium leading-6 text-gray-900">Everything</label>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <input id="push-everything" name="push-notifications" type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label for="push-everything"
                                        className="block text-sm font-medium leading-6 text-gray-900">Everything</label>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <input id="push-email" name="push-notifications" type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label for="push-email"
                                        className="block text-sm font-medium leading-6 text-gray-900">Same as
                                        email</label>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <input id="push-nothing" name="push-notifications" type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label for="push-nothing"
                                        className="block text-sm font-medium leading-6 text-gray-900">No push
                                        notifications</label>
                                </div>
                            </div>
                        </fieldset>

                        <hr className="mt-3" />

                        {/* <!-- btn --> */}
                        <div className="flex mt-3">
                            <button
                                type="button"
                                class="inline-flex items-center me-5 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="mr-2 h-4 w-4"
                                >
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                                Button Text
                            </button>

                            <button type="submit"
                                className="transition-all sub_btn flex w-28 items-center justify-center rounded-lg border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                Save
                            </button>

                            <button
                                type="button"
                                className="inline-flex items-center rounded-md bg-black px-3 ms-5 py-2 text-sm font-semibold text-white hover:bg-black/80"
                            >
                                Button Text
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="ml-2 h-4 w-4"
                                >
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>

                        </div>

                    </div>

                </div>

                {/* Shapes */}
                <div class="flex items-center h-24">

                    <div class="relative">
                        <svg class="block" width="70" height="70" viewBox="0 0 200 200">
                            <polygon points="100 ,50 170,50 170,150 100,240 30,150 30,50"
                                fill="green" />
                        </svg>
                        <div
                            class="w-8 h-8 bg-grey-900 ms-3 -mt-12 rounded-full flex items-center justify-center text-white text-xl">
                            1</div>
                    </div>

                    <div class="relative">
                        <svg class="block" width="70" height="70" viewBox="0 0 200 200">
                            <polygon points="100 ,50 170,50 170,150 100,240 30,150 30,50"
                                fill="green" />
                        </svg>
                        <div
                            class="w-8 h-8 bg-grey-900 ms-3 -mt-12 rounded-full flex items-center justify-center text-white text-xl">
                            2</div>
                    </div>

                    <div class="relative">
                        <svg class="block" width="70" height="70" viewBox="0 0 200 200">
                            <polygon points="100 ,50 170,50 170,150 100,240 30,150 30,50"
                                fill="green" />
                        </svg>
                        <div
                            class="w-8 h-8 bg-grey-900 ms-3 -mt-12 rounded-full flex items-center justify-center text-white text-xl">
                            3</div>
                    </div>

                    <div class="relative">
                        <svg class="block" width="70" height="70" viewBox="0 0 200 200">
                            <polygon points="100 ,50 170,50 170,150 100,240 30,150 30,50"
                                fill="green" />
                        </svg>
                        <div
                            class="w-8 h-8 bg-grey-900 ms-3 -mt-12 rounded-full flex items-center justify-center text-white text-xl">
                            4</div>
                    </div>

                    <div class="relative">
                        <svg class="block" width="70" height="70" viewBox="0 0 200 200">
                            <polygon points="100 ,50 170,50 170,150 100,240 30,150 30,50"
                                fill="green" />
                        </svg>
                        <div
                            class="w-8 h-8 bg-grey-900 ms-3 -mt-12 rounded-full flex items-center justify-center text-white text-xl">
                            5</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuesTions
