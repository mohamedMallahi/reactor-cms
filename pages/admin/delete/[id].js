import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../../../components/Navbar';

export default function Delete() {
	const router = useRouter();
	const { id } = router.query;

	const deleteHandler = async (e) => {
		e.preventDefault();
		const res = await fetch('/api/posts/' + id, {
			method: 'DELETE',
		});
		const data = await res.json();
		console.log(data);
		alert(data.message);
	};

	return (
		<>
			<h1>Delete Todo</h1>
			<p>Are you sure you want delete this todo</p>
			<form onSubmit={deleteHandler}>
				<button className='btn btn-dark me-2' type='submit'>
					Yes
				</button>
				<Link href='/admin'>
					<a className='btn btn-outline-dark'>No</a>
				</Link>
			</form>
		</>
	);
}

Delete.getLayout = (page) => {
	return (
		<>
			<Navbar />
			<main className='py-3 container'>{page}</main>
		</>
	);
};
