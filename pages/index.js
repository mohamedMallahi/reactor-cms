import { useState } from 'react';
import Link from 'next/link';
import { useForm } from '../hooks';
import { server } from '../config';

export default function Home({ posts, images }) {
	// const [values, changeHandler] = useForm({ title: '', body: '' });
	// console.log(posts);

	// const submitHandler = async (e) => {
	// 	e.preventDefault();
	// 	const res = await fetch('/api/posts', {
	// 		method: 'POST',
	// 		body: {
	// 			...values,
	// 		},
	// 	});
	// 	const data = await res.json();
	// 	console.log(data);
	// 	alert(data.message);
	// };

	return (
		<>
			{/* <h1>Posts</h1> */}

			<div className='container d-flex flex-column'>
				{posts.map((post, index) => (
					<div key={post.id} className=' row mb-4 border rounded'>
						<img
							style={{
								objectFit: 'cover',
							}}
							src={images[index].url}
							alt=''
							className='col-md-4 p-0'
						/>
						<div className='col-md-8 card-body d-flex justify-content-center flex-column'>
							<h5 className='card-title text-capitalize mb-0'>{post.title}</h5>
							<div>
								{post.tags.map((tag) => (
									<span
										class='badge bg-dark me-2'
										style={{ fontSize: '0.56em' }}
									>
										{tag}
									</span>
								))}
							</div>
							<p className='card-text'>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<div>
								<Link href={`/post/${post.id}`}>
									<a className='btn btn-dark'>Read More</a>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export async function getStaticProps(context) {
	// const res = await fetch(server + '/api/posts');
	const res = await fetch('https://dummyjson.com/posts?limit=100');
	const data = await res.json();
	const res2 = await fetch(
		'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=100'
	);

	const data2 = await res2.json();
	return {
		props: {
			posts: data.posts,
			images: data2,
		},
	};
}

{
	/* <form onSubmit={submitHandler}>
	<div className='mb-3'>
		<label for='title'>Title</label>
		<input
			className='form-control'
			value={values.title}
			id='title'
			name='title'
			onChange={changeHandler}
			type='text'
		/>
	</div>
	<div className='mb-3'>
		<label for='body'>Body</label>
		<textarea
			className='form-control'
			value={values.body}
			id='body'
			name='body'
			onChange={changeHandler}
		/>
	</div>
	<button className='btn btn-success' type='submit'>
		Add
	</button>
</form>; */
}
