import Image from "next/image";

import Post from "@/components/post/post";
import { getAllPostsData } from "@/lib/posts";
import type { Post as PostData } from "@/lib/posts";


// ページを再生成する間隔を秒数で指定する。
// Django API の最新データを最大3秒ごとに反映する。
export const revalidate = 3;

// Django API から投稿を取得し、トップページに一覧表示する。
export default async function Home() {
  const posts: PostData[] = await getAllPostsData();

  return (
    <div>
      <div className="mb-10 rounded border p-3">
        <Image
          className="rounded object-cover"
          src="/top.png"
          alt="top"
          width={1280}
          height={500}
        />
      </div>
      <div className="mb-10 flex flex-col items-center justify-center">
        <div className="mb-3 text-lg">BLOG POSTS</div>
        <div className="border w-14"></div>
      </div>

      {/*
       * Django API から取得した投稿一覧を表示する領域。
       * flex で投稿カードを横方向に並べ、flex-wrap で画面幅に応じて折り返す。
       * -m-4 と mb-5 は、投稿カードの余白と一覧の下余白を調整する。
       */}
      <div className="-m-4 mb-5 flex flex-wrap">
        {/*  posts の各データを Post コンポーネントに渡して投稿カードを作成する。 */}
        {posts.map((post) => (
          // key は投稿を一意に識別し、一覧の更新を正しく処理するために指定する。
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}