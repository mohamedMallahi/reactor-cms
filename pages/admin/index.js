import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

// import { server } from '../../config';

export default function Admin({ posts }) {
	return (
		<>
			<h1 className='mb-2'>All posts</h1>
			<table className='table table-striped table-hover '>
				<thead>
					<tr className='table-dark'>
						<th scope='col'>Title</th>
						<th scope='col'>ID</th>
						<th scope='col'>Actions</th>
					</tr>
				</thead>
				<tbody>
					{posts.map((post) => (
						<tr className={post.completed && 'completed'} key={post.id}>
							<td>{post.title}</td>
							<td>{post.id}</td>
							<td>
								<Link href={`/admin/edit/${post.id}`}>
									<a className='btn btn-dark me-2'>Edit</a>
								</Link>
								<Link href={`/admin/delete/${post.id}`}>
									<a className='btn btn-outline-dark '>Delete</a>
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}

Admin.getLayout = (page) => {
	return (
		<>
			<Navbar />
			<main className='py-3 container'>{page}</main>
		</>
	);
};

export async function getServerSideProps(context) {
	const res = await fetch('https://dummyjson.com/posts');
	const data = await res.json();
	return {
		props: {
			posts: data.posts,
		},
	};
}
