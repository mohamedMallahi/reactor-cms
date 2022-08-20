// import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// import { server } from '../../../config';

export default function Post({ userdata }) {
	const router = useRouter();
	const { id } = router.query;
	console.log(userdata);

	return (
		<>
			<div className='text-center py-3 bg-primary text-white mb-4'>
				<img
					style={{ width: '100px' }}
					src={userdata.image}
					alt=''
					className='rounded-circle border bg-dark text-center'
				/>
				<h1 className='text-capitalize'>
					{userdata.firstName + ' ' + userdata.lastName}
				</h1>
			</div>
			<ul className='list-group'>
				<li className='list-group-item rounded mb-2'>Age: {userdata.age}</li>
				<li className='list-group-item rounded mb-2'>Sex: {userdata.gender}</li>
				<li className='list-group-item rounded mb-2'>
					Email Adress: {userdata.email}
				</li>
				<li className='list-group-item rounded mb-2'>
					Phone Number: {userdata.phone}
				</li>
			</ul>
		</>
	);
}

export async function getServerSideProps(context) {
	// const res = await fetch( + '/api/posts/' + context.params.id);
	const res = await fetch('https://dummyjson.com/users/' + context.params.id);
	const data = await res.json();

	return { props: { userdata: data } };
}
