import Head from 'next/head';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	if (Component.getLayout) {
		return Component.getLayout(<Component {...pageProps} />);
	}

	return (
		<>
			<Navbar />
			<Head>
				<title>Reactor CMS</title>
				<meta
					name='description'
					content='Reactor CMS is a minimalist content management system'
				/>
			</Head>
			<main className='py-3 row m-0'>
				<div className='col-md-8'>
					<Component {...pageProps} />
				</div>
				<aside className='col-md-4'>
					<div className='border rounded p-3 text-center'>
						<img
							className='rounded-circle'
							style={{ width: '100px', height: '100px', objectFit: 'cover' }}
							src='../profile.jpg'
							alt=''
						/>
						<h4 className='mt-2'>
							Mohamed
							<br />
							Mallahi
						</h4>
						<p>
							Sunt Aut Facere Repellat Provident Occaecati Excepturi Optio
							Reprehenderit
						</p>
					</div>
					<div className='border rounded	 p-3 mt-2 '>
						<form action='/newsletter'>
							<input
								className='form-control'
								type='email'
								placeholder='Email Address'
							/>
							<button className='btn btn-dark w-100 mt-2'>Subscribe</button>
						</form>
					</div>
				</aside>
			</main>
			<footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
				<div className='col-md-4 d-flex align-items-center'>
					<a
						href='/'
						className='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1'
					>
						<svg className='bi' width='30' height='24'>
							<use href='#bootstrap'></use>
						</svg>
					</a>
					<span className='text-muted'>© 2021 Reactor CMS, Inc</span>
				</div>

				<ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
					<li className='ms-3'>
						<a className='text-muted' href='#'>
							<svg className='bi' width='24' height='24'>
								<use href='#twitter'></use>
							</svg>
						</a>
					</li>
					<li className='ms-3'>
						<a className='text-muted' href='#'>
							<svg className='bi' width='24' height='24'>
								<use href='#instagram'></use>
							</svg>
						</a>
					</li>
					<li className='ms-3'>
						<a className='text-muted' href='#'>
							<svg className='bi' width='24' height='24'>
								<use href='#facebook'></use>
							</svg>
						</a>
					</li>
				</ul>
			</footer>
		</>
	);
}

export default MyApp;
