import Image from "next/image";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row overflow-hidden">
            {/* Left section: Form */}
            <div className="flex flex-col justify-center w-full max-w-md mx-auto px-6 sm:px-8 py-12">
                <div className="text-center">
                    <Image src="/unnamed.png" alt="Logo" width={40} height={40} className="mx-auto mb-4" />
                    <h2 className="text-2xl font-bold">Sign in to your account</h2>
                    <p className="mt-2 text-sm text-gray-500">
                        Not a member?{" "}
                        <a href="#" className="text-indigo-600 hover:underline">
                            Start a 14 day free trial
                        </a>
                    </p>
                </div>

                <form className="mt-6 space-y-4">
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

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded border-gray-300 text-indigo-600" />
                            Remember me
                        </label>
                        <a href="#" className="text-indigo-600 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                    >
                        Sign in
                    </button>
                </form>
            </div>

            {/* Right section: Image */}
            <div className="hidden lg:block lg:w-1/2">
                <div className="w-full h-full">
                    <Image
                        src="/unnamed.png"
                        alt="Login page illustration"
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
