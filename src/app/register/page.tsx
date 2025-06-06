import Image from "next/image";

export default function RegisterPage() {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row overflow-hidden">
            {/* Left: Form */}
            <div className="flex flex-col justify-center w-full max-w-md mx-auto px-6 sm:px-8 py-12">
                <div className="text-center">
                    <Image src="/unnamed.png" alt="Logo" width={40} height={40} className="mx-auto mb-4" />
                    <h2 className="text-2xl font-bold">Create your account</h2>
                    <p className="mt-2 text-sm text-gray-500">
                        Already have an account?{" "}
                        <a href="/login" className="text-indigo-600 hover:underline">
                            Sign in
                        </a>
                    </p>
                </div>

                <form className="mt-6 space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div className="flex items-start text-sm">
                        <input
                            type="checkbox"
                            id="terms"
                            className="mt-1 rounded border-gray-300 text-indigo-600"
                        />
                        <label htmlFor="terms" className="ml-2 text-gray-700">
                            I agree with the{" "}
                            <a href="#" className="text-indigo-600 hover:underline">
                                Terms of Use
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-indigo-600 hover:underline">
                                Privacy Policy
                            </a>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                    >
                        Create Account
                    </button>
                </form>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block lg:w-1/2">
                <div className="w-full h-full">
                    <Image
                        src="/unnamed.png"
                        alt="Register page illustration"
                        layout="responsive"
                        width={1000}
                        height={1000}
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
