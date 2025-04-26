function BookItem({ log }) {
    return (
        <li>
            <strong>{log.title}</strong>：{log.comment}（{log.date}） 評価：{log.rating}★
        </li>
    );
}

export default BookItem;
