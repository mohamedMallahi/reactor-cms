// import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../../../components/Navbar';

export default function Edit() {
	const router = useRouter();
	const { id } = router.query;

	return (
		<>
			<h1>Edit Todo</h1>
			<p>{id}</p>
		</>
	);
}

Edit.getLayout = (page) => {
	return (
		<>
			<Navbar />
			<main className='py-3 container'>{page}</main>
		</>
	);
};
