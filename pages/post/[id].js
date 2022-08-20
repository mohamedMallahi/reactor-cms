// import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// import { server } from '../../../config';

export default function Post({ post, comments }) {
	const router = useRouter();
	const { id } = router.query;
	console.log(post);

	return (
		<div className='container'>
			<h1 className='text-capitalize'>{post.title}</h1>
			<Link href={`/user/${id}`}>
				<strong className='text-muted mb-2 d-block'>By Khalid Kashmiri</strong>
			</Link>
			<p>{post.body}</p>
			<p>{post.body}</p>
			<p>{post.body}</p>
			<h3>Comments ({comments.length})</h3>
			<ul className='list-group'>
				{comments.map((comment) => (
					<li className='list-group-item rounded mb-2'>
						<h4>{comment.user.username}</h4>
						<p>{comment.body}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export async function getServerSideProps(context) {
	// const res = await fetch( + '/api/posts/' + context.params.id);
	const res = await fetch('https://dummyjson.com/posts/' + context.params.id);
	const data = await res.json();
	const res2 = await fetch(
		'https://dummyjson.com/posts/' + context.params.id + '/comments'
	);
	const data2 = await res2.json();
	return { props: { post: data, comments: data2.comments } };
}
