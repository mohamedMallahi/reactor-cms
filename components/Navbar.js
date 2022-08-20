import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
	const [showMenu, setShowMenu] = useState('');

	return (
		<nav class='navbar navbar-expand-lg navbar-light bg-light'>
			<div className='container'>
				<Link href='/'>
					<a class='navbar-brand'>Reactor CMS</a>
				</Link>
				<button
					class='navbar-toggler'
					type='button'
					onClick={(e) => {
						if (showMenu === '') {
							setShowMenu('collapsing');
							setTimeout(() => setShowMenu('show'));
						} else if (showMenu === 'show') {
							setShowMenu('');
						}
					}}
				>
					<span class='navbar-toggler-icon'></span>
				</button>

				<div
					class={`collapse navbar-collapse ${showMenu}`}
					id='navbarSupportedContent'
				>
					<ul class='navbar-nav mr-auto'>
						<li class='nav-item'>
							<Link href='/about'>
								<a className='nav-link'>About</a>
							</Link>
						</li>
						<li class='nav-item'>
							<Link href='/admin'>
								<a className='nav-link'>Admin</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
