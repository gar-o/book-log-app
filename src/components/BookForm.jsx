import { useState } from "react";

function BookForm({ onAdd }) {
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState('1');

    const handleAdd = (e) => {
        e.preventDefault();

        if (title.trim() === '' || comment.trim() === '') {
            alert("タイトルとコメントは必須です！");
            return;
        }

        const newLog = {
            id: Date.now(),
            title,
            comment,
            rating,
            date: new Date().toLocaleDateString()
        };

        onAdd(newLog);

        setTitle('');
        setComment('');
        setRating('1');
    };

    return (
        <form onSubmit={handleAdd}>
            <div>
                <label>タイトル</label><br />
                <input
                    type="text"
                    placeholder="タイトルを入力"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>コメント</label><br />
                <textarea
                    placeholder="感想などを入力"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
            </div>
            <div>
                <label>評価</label><br />
                <select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value="1">★</option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                    <option value="4">★★★★</option>
                    <option value="5">★★★★★</option>
                </select>
            </div>
            <button type="submit">追加</button>
        </form>
    );
}

export default BookForm;
