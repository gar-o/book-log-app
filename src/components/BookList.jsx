import BookItem from './BookItem';

function BookList({ logs }) {
    return (
        <div>
            <h2>📖 読書履歴リスト</h2>
            {logs.length === 0 ? (
                <p>まだ記録がありません</p>
            ) : (
                <ul>
                    {logs.map((log) => (
                        <BookItem key={log.id} log={log} />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default BookList;
