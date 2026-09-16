import Link from "next/link";
import type { Post as PostData } from "@/lib/posts";

// 投稿コンポーネントが受け取る props の型。
// post には Django API から取得した1件分の投稿データが入る。
type PostProps = {
    post: PostData;
};

// 投稿の画像とタイトルを表示するコンポーネント。
export default function Post({ post }: PostProps) {
    return (
        // 投稿カード全体をクリックすると、投稿詳細ページへ移動する。
        <Link
            href={`/posts/${post.id}`}
            className="block w-full p-4 sm:w-1/2 lg:w-1/4"
        >
            <article className="cursor-pointer">
                {/* Django API が返した画像 URL を投稿画像として表示する。 */}
                <img alt={post.title} className="object-cover" src={post.image} />

                {/* 投稿タイトルをカードの中央に表示する。 */}
                <div className="my-4 text-center">
                    <p>{post.title}</p>
                </div>
            </article>
        </Link>
    );
}