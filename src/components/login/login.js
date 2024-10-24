
import Header from "../components/common/Header";

const LoginPage = () => {
	return (
		<div className='flex-1 relative z-10 overflow-auto'>
			{/* Reuse Header Component */}
			<Header title={"Login"} />

			<main className='max-w-lg mx-auto py-6 px-4 lg:px-8'>
				{/* Animated container for the login form */}
				<motion.div
					className='bg-blue-800 p-8 rounded-lg shadow-lg'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<h2 className='text-center text-2xl font-bold text-white mb-6'>
						Login to Your Account
					</h2>

					<form className='space-y-6'>
						{/* Email Field */}
						<div>
							<label htmlFor='email' className='block text-sm font-medium text-gray-300'>
								Email Address
							</label>
							<div className='mt-1'>
								<input
									id='email'
									name='email'
									type='email'
									autoComplete='email'
									required
									className='w-full px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-indigo-500'
								/>
							</div>
						</div>

						{/* Password Field */}
						<div>
							<label htmlFor='password' className='block text-sm font-medium text-gray-300'>
								Password
							</label>
							<div className='mt-1'>
								<input
									id='password'
									name='password'
									type='password'
									autoComplete='current-password'
									required
									className='w-full px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-indigo-500'
								/>
							</div>
						</div>

						{/* Submit Button */}
						<div>
							<button
								type='submit'
								className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
							>
								Sign In
							</button>
						</div>
					</form>

					{/* Forgot Password Link */}
					<div className='mt-6 text-center'>
						<a href='#' className='text-sm text-gray-400 hover:text-gray-300'>
							Forgot your password?
						</a>
					</div>
				</motion.div>
			</main>
		</div>
	);
};

export default LoginPage;
