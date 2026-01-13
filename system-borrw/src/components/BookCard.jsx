import Link from "next/link";
import styles from "./BookCard.module.css";

export default function BookCard({ book, onBorrow }) {
	if (!book) return null;

	return (
		<div className={styles.card}>
			<div className={styles.topImage}>
				<img
					src={book.image || "/placeholder-book.png"}
					alt={book.title || "ปกหนังสือ"}
					className={styles.image}
				/>
			</div>

			<div className={styles.title} aria-hidden>
				{book.category || "ภาษาไทย"}
			</div>

			<Link href={`/books/${book.id}`} className={styles.detailBtn}>
				รายละเอียด
			</Link>

			<button
				className={styles.cartBtn}
				aria-label="ยืมหนังสือ"
				onClick={() => onBorrow && onBorrow(book)}
			>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 6H4" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M6 6L7 14H17L19 8H8" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
					<circle cx="10" cy="20" r="1.2" fill="#4b5563"/>
					<circle cx="17" cy="20" r="1.2" fill="#4b5563"/>
				</svg>
			</button>
		</div>
	);
}
