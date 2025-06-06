import Image from "next/image";

export default function ForgotPasswordPage() {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row overflow-hidden">
            {/* Left section: Form */}
            <div className="flex flex-col justify-center w-full max-w-md mx-auto px-6 sm:px-8 py-12">
                <div className="text-center">
                    <Image src="/unnamed.png" alt="Logo" width={40} height={40} className="mx-auto mb-4" />
                    <h2 className="text-2xl font-bold">Forgot your password?</h2>
                    <p className="mt-2 text-sm text-gray-500">
                        No worries! Enter your email and we'll send you a reset link.
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

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                    >
                        Send Reset Link
                    </button>

                    <div className="text-center text-sm mt-4">
                        <a href="/login" className="text-indigo-600 hover:underline">
                            Back to Sign In
                        </a>
                    </div>
                </form>
            </div>

            {/* Right section: Image */}
            <div className="hidden lg:block lg:w-1/2">
                <div className="w-full h-full">
                    <Image
                        src="/unnamed.png"
                        alt="Forgot password illustration"
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
