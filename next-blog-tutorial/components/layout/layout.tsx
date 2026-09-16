import type { ReactNode } from "react";
import Navigation from "./navigation";

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex min-h-screen flex-col">
            <Navigation />

        {/*
         * 各ページの内容を表示するメイン領域。
         * children には app/page.tsx など、表示中のページの内容が入る。
         * コンテンツを中央に配置し、ヘッダーとフッターの間の余白を広げる。
         */}
        <main className="container mx-auto flex max-w-screen-lg flex-1 justify-center px-5">
            {children}
        </main>

        <footer className="flex h-20 w-full items-center justify-center border-t text-sm">
            © 2026 NextJS Startup
        </footer>
    </div>
);
}