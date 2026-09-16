// Django API サーバーのベース URL。
// 各関数では、この URL に API のパスを追加してリクエストする。
const SERVER_URL = "http://127.0.0.1:8000";

// Django の PostSerializer が返す投稿データの型。
// API の JSON データを TypeScript で安全に扱うために定義する。
export type Post = {
    id: number;
    title: string;
    image: string;
    content: string;
    created_at: string;
};

// 指定された URL から投稿一覧を取得する共通処理。
// HTTP ステータスを確認し、成功した場合だけ JSON を Post 配列として返す。
async function fetchPosts(url: string): Promise<Post[]> {
    const response = await fetch(url);

    // 404 や 500 などの HTTP エラーが発生した場合は処理を中断する。
    if (!response.ok) {
        throw new Error(`投稿の取得に失敗しました: ${response.status}`);
    }

    // API のレスポンス本文を JSON に変換して投稿一覧として返す。
    return (await response.json()) as Post[];
}

// Django API からすべての投稿を取得する。
export async function getAllPostsData(): Promise<Post[]> {
    return fetchPosts(`${SERVER_URL}/api/post/`);
}

// 投稿一覧から、各投稿の ID だけをページ生成用の形式に整形する。
// ID を文字列に変換して、URL のパラメーターとして利用できるようにする。
export async function getAllPostIds(): Promise<{ params: { id: string } }[]> {
    const posts = await fetchPosts(`${SERVER_URL}/api/post/`);

    // 投稿配列を { params: { id: string } } の配列に変換する。
    return posts.map((post) => ({
        params: {
            id: String(post.id),
        },
    }));
}

// 指定された ID の投稿を Django API から取得する。
export async function getPostData(id: number | string): Promise<Post> {
    const response = await fetch(`${SERVER_URL}/api/post/${id}/`);

    // 指定した投稿が存在しない場合などはエラーにする。
    if (!response.ok) {
        throw new Error(`投稿の取得に失敗しました: ${response.status}`);
    }

    // API のレスポンス本文を JSON に変換して投稿データとして返す。
    return (await response.json()) as Post;
}