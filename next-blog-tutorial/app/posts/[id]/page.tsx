import { getAllPostIds, getPostData } from "@/lib/posts";
import type { Post } from "@/lib/posts";

/*
 * 動的な投稿詳細ページが受け取る props の型。
 * URL が /posts/1 の場合、params.id には "1" が入る。
 */
type PostPageProps = {
    // [id] フォルダーに対応する URL パラメーター。
    params: Promise<{
        // 投稿 ID は URL から取得するため文字列として扱う。
        id: string;
    }>;
};

/*
 * 投稿詳細ページを生成するための URL パラメーターを作成する。
 * /posts/[id] の [id] に入る投稿 ID を、Django API から事前に取得する。
 * 例えば、投稿 ID が 1 と 2 の場合は [{ id: "1" }, { id: "2" }] を返す。
 */
export async function generateStaticParams(): Promise<{ id: string }[]> {
    // API から投稿一覧の ID を取得するため、非同期処理が完了するまで待つ。
    const paths = await getAllPostIds();

    // API 用の { params: { id } } 形式から、Next.js が使用する { id } 形式に変換する。
    return paths.map(({ params }) => ({
        id: params.id,
    }));
}

// Django API から投稿詳細を取得してページに表示する。
export default async function PostPage({ params }: PostPageProps) {
    
    // URL の /posts/[id] から、投稿 ID を文字列として取り出す。
    // 例: /posts/1 にアクセスした場合、id は "1" になる。
    const { id } = await params;

    // 取得した ID を使って Django API の投稿詳細エンドポイントを呼び出す。
    // 取得した投稿データは、Post 型の post 変数に格納する。
    const post: Post = await getPostData(id);

    return (
        <article className="w-full space-y-5">
            <div className="mb-5 flex flex-col items-center justify-center">
                <h1 className="mb-3 text-3xl font-bold">{post.title}</h1>
                <p className="mb-3">{post.created_at}</p>
                <div className="w-14 border"></div>
            </div>
            <p className="whitespace-pre-wrap">{post.content}</p>
        </article>
    );
}

// API の再取得間隔を3秒に設定する。
export const revalidate = 3;