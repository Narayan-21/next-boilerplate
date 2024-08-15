
// Make the component a client component - if - using something that server do not understand(useEffect, useState, onClick...etc)
// Or the error pops up telling us to create a client component.
// More Reading - https://github.com/vercel/next.js/discussions/43153

import ButtonComponent from "./Button";


interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
}

function LabelledInput({ label, placeholder, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input type={type || "text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}

function buttonHandler() {
    console.log("Clicked!!")
}



export const SigninComponent = () => {
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Sign in
                        </div>
                    </div>
                    <div className="pt-2">
                        <LabelledInput label="Username" placeholder="narine@gmail.com" />
                        <LabelledInput label="Password" type={"password"} placeholder="narine@1234" />
                        <ButtonComponent title="Sign in"/>
                    </div>
                </div>
            </a>
        </div>
    </div>
}

